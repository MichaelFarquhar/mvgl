import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { GameSearchModal } from "../../../modals/GameSearchModal";

interface Props {}

export const ProfileListMenu: FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify={"end"} w="100%">
      <Button
        leftIcon={<FaSearch />}
        colorScheme="teal"
        variant="solid"
        size="sm"
        onClick={onOpen}
      >
        Search games
      </Button>
      <GameSearchModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
