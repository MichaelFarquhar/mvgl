import { IconButton, InputRightElement } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
  showPassword: boolean;
  ariaLabel: string;
  onClick(): void;
}

export const ShowPasswordButton = ({
  showPassword,
  ariaLabel,
  onClick,
}: Props) => {
  return (
    <InputRightElement mr={2}>
      <IconButton
        h="1.75rem"
        bg={"transparent"}
        size="md"
        onClick={onClick}
        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
        aria-label={ariaLabel}
      >
        {showPassword ? "Hide" : "Show"}
      </IconButton>
    </InputRightElement>
  );
};
