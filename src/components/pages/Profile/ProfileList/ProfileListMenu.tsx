import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {}

export const ProfileListMenu: FC<Props> = (props) => {
  return (
    <Flex justify={"end"} w="100%">
      <Link to={"/games/search"}>
        <Button
          leftIcon={<FaPlusCircle />}
          colorScheme="teal"
          variant="solid"
          size="sm"
        >
          Add Game
        </Button>
      </Link>
    </Flex>
  );
};
