import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  ModalBody,
  Flex,
} from "@chakra-ui/react";
import { useState, KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BaseModal } from "./BaseModal";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

export const GameSearchModal = (props: Props) => {
  const [searchError, setSearchError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Navigate to game search page with inputted search query
  const searchAction = () => {
    if (searchInput !== "") {
      navigate(`/games/search?q=${searchInput}`);
    } else {
      setSearchError(true);
    }
  };

  // Handle Enter key for submitting from search box
  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    searchAction();
  };

  return (
    <BaseModal {...props} title="Search Game">
      <ModalBody mb={4}>
        <Flex gap={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              type="search"
              name="search"
              id="search"
              placeholder="Enter game title"
              onChange={(e) => setSearchInput(e.target.value)}
              autoFocus
              isInvalid={searchError}
              errorBorderColor="red.400"
              onKeyDown={(e) => handleKey(e)}
            />
          </InputGroup>
          <Button colorScheme="teal" onClick={searchAction}>
            Search
          </Button>
        </Flex>
      </ModalBody>
    </BaseModal>
  );
};
