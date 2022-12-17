import {
  Stack,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaEnvelope, FaKey } from "react-icons/fa";
import { AuthLayout } from "../../layouts";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormAlert } from "../../forms/FormAlert";
import { useFirebaseError } from "../../../firebase/useFirebaseHook";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import { FirebaseError } from "firebase/app";
import { ShowPasswordButton } from "../../forms/ShowPasswordButton";

interface FormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useFirebaseError("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Account created.",
      description: "You have been logged in automatically.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const passwordValue = watch("password");

  // On form submit, attempt register user and send them to profile
  const onSubmit = (data: FormInputs) => {
    setRegisterLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
        setRegisterLoading(false);
        showToast();
      })
      .catch((err: FirebaseError) => setFirebaseError(err));
  };

  return (
    <AuthLayout title="Register Account">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          {/* Email Field */}
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaEnvelope />}
                color="gray.300"
              />
              <Input
                id="email"
                type="email"
                placeholder="name@email.com"
                errorBorderColor="crimson"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {!!errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          {/* Password Field */}
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaKey />}
                color="gray.300"
              />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                errorBorderColor="crimson"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
              />
              <ShowPasswordButton
                showPassword={showPassword}
                onClick={() => setShowPassword(!showPassword)}
                ariaLabel="Show password"
              />
            </InputGroup>
            <FormErrorMessage>
              {!!errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          {/* Confirm Password Field */}
          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaKey />}
                color="gray.300"
              />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••"
                errorBorderColor="crimson"
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: (value) => {
                    return (
                      value === passwordValue || "The passwords do not match."
                    );
                  },
                })}
              />
              <ShowPasswordButton
                showPassword={showConfirmPassword}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ariaLabel="Show confirmation password"
              />
            </InputGroup>
            <FormErrorMessage>
              {!!errors.confirmPassword && errors.confirmPassword.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack mt={10}>
          <FormAlert alert={firebaseError} />
          <Flex gap={4} alignItems="center">
            <Button
              colorScheme="teal"
              isLoading={registerLoading}
              type="submit"
              loadingText="Submitting"
            >
              Register
            </Button>
            <Button
              leftIcon={<FaArrowLeft />}
              colorScheme="gray"
              disabled={registerLoading}
              type="submit"
              as={RouterLink}
              to="/login"
            >
              Back to Login
            </Button>
          </Flex>
        </Stack>
      </form>
    </AuthLayout>
  );
};
