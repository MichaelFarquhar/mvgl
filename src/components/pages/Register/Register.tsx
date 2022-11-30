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
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

interface FormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

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
                  required: "Password Confirmation is required",
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
              {!!errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Flex gap={4} alignItems="center" mt={10}>
          <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
            Register
          </Button>
          <Button
            leftIcon={<FaArrowLeft />}
            colorScheme="gray"
            isLoading={isSubmitting}
            type="submit"
            as={RouterLink}
            to="/login"
          >
            Back to Login
          </Button>
        </Flex>
      </form>
    </AuthLayout>
  );
};
