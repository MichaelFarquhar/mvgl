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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { AuthLayout } from "../../layouts";
import { Link as RouterLink } from "react-router-dom";

interface FormInputs {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <AuthLayout>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        Login
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
                type="password"
                placeholder="••••••"
                errorBorderColor="crimson"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {!!errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Flex gap={4} alignItems="center" mt={10}>
          <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
            Login
          </Button>
          <Button
            colorScheme="pink"
            isLoading={isSubmitting}
            type="submit"
            as={RouterLink}
            to="/register"
          >
            Register
          </Button>
        </Flex>
      </form>
    </AuthLayout>
  );
};
