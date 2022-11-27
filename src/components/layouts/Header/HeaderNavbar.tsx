import { Button, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";

interface Props {}

export const HeaderNavbar: FC<Props> = () => {
  return (
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
    </Stack>
  );
};
