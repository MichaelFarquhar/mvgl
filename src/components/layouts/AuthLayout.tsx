import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ children }: Props) => {
  const logoColor = useColorModeValue("teal", "teal.200");

  return (
    <Box w="full" h="100vh" display="grid" placeItems="center" bg="gray.100">
      <Flex flexDirection={"column"} alignItems="center">
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
        <Card px={8} py={6} mx={4} borderRadius="2xl" shadow="xl" bg="white">
          <CardBody>{children}</CardBody>
        </Card>
      </Flex>
    </Box>
  );
};
