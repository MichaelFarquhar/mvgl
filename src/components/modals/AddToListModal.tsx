import {
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Button,
  Select,
  Divider,
} from "@chakra-ui/react";
import { FC } from "react";
import { BaseModal } from "./BaseModal";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

export const AddToListModal: FC<Props> = (props) => {
  return (
    <BaseModal {...props} title="God of War (2005)">
      <Divider mb={2} />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Score</FormLabel>
          <Select placeholder="Select score">
            {[...Array(10)].map((_, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </Select>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="teal" mr={3}>
          Add
        </Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </ModalFooter>
    </BaseModal>
  );
};
