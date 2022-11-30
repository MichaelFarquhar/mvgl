import { Flex, Stack, Text, Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PageContainer } from "../PageContainer/PageContainer";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { HeaderNavbar } from "./HeaderNavbar";

export const Header = () => {
  const logoColor = useColorModeValue("teal", "teal.200");
  return (
    <Box mb={6}>
      <PageContainer>
        <Flex justify={"space-between"} align="center" py={6}>
          <Link to={"/"}>
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
          </Link>
          <Stack direction="row" spacing={4} align="center">
            <HeaderNavbar />
            <ColorModeSwitcher />
          </Stack>
        </Flex>
      </PageContainer>
    </Box>
  );
};
