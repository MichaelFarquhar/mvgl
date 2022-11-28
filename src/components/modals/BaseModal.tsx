import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose(): void;
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const BaseModal: FC<Props> = ({ isOpen, onClose, children, title }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
};
