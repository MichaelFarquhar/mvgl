import {
  Stack,
  Text,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Flex,
  InputRightElement,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  FaArrowLeft,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaKey,
} from "react-icons/fa";
import { AuthLayout } from "../../layouts";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormAlert } from "../../FormAlert";
import { useFirebaseError } from "../../../firebase/useFirebaseHook";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import { FirebaseError } from "firebase/app";

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
    <AuthLayout>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        Register Account
      </Text>
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
              <InputRightElement mr={2}>
                <IconButton
                  h="1.75rem"
                  bg={"transparent"}
                  size="md"
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  aria-label="Show password"
                >
                  {showPassword ? "Hide" : "Show"}
                </IconButton>
              </InputRightElement>
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
              <InputRightElement mr={2}>
                <IconButton
                  h="1.75rem"
                  bg={"transparent"}
                  size="md"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  aria-label="Show confirmation password"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </IconButton>
              </InputRightElement>
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
