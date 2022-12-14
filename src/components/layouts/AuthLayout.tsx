import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ title, children }: Props) => {
  const navigate = useNavigate();

  // If logged in, skip login form and go to profile
  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        navigate("/");
      }
    });

    return onAuth;
  });

  const logoColor = useColorModeValue("teal", "teal.200");

  return (
    <Box w="full" h="100vh" display="grid" placeItems="center" bg="gray.100">
      <Flex flexDirection={"column"} alignItems="center">
        {/* Header */}
        <Text
          fontSize="6xl"
          fontWeight="bold"
          lineHeight={1}
          fontFamily="Aldrich, sans-serif"
          borderBottom="3px solid"
          pb={1}
          w="fit-content"
          mb={16}
          color={logoColor}
          borderColor={logoColor}
        >
          MVGL
        </Text>

        {/* Content Card */}
        <Card px={8} py={6} mx={4} borderRadius="2xl" shadow="xl" bg="white">
          <CardBody>
            <Text fontSize="2xl" fontWeight="bold" mb={8}>
              {title}
            </Text>
            {children}
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};
