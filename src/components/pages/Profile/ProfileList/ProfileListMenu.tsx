import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { GameSearchModal } from "../../../modals/GameSearchModal";

export const ProfileListMenu = () => {
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
