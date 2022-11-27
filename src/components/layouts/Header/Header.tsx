import {
  Button,
  Flex,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { PageContainer } from "../PageContainer/PageContainer";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Header = () => {
  const logoColor = useColorModeValue("teal", "teal.200");

  return (
    <Box mb={6}>
      <PageContainer>
        <Flex justify={"space-between"} align="center" py={6}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            lineHeight={1}
            color={logoColor}
            fontFamily="Aldrich, sans-serif"
            borderBottom="3px solid"
            borderColor={logoColor}
            pb={1}
          >
            MVGL
          </Text>
          <Stack direction="row" spacing={4} align="center">
            <Button
              size="sm"
              leftIcon={<FaUser />}
              colorScheme="teal"
              variant="solid"
            >
              Login
            </Button>
            <Button
              size="sm"
              leftIcon={<FaUserPlus />}
              colorScheme="pink"
              variant="solid"
            >
              Register
            </Button>
            <ColorModeSwitcher />
          </Stack>
        </Flex>
      </PageContainer>
    </Box>
  );
};
