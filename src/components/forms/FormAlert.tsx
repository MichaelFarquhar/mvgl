import { Alert } from "@chakra-ui/react";

interface Props {
  alert: string;
}

export const FormAlert = ({ alert }: Props) => {
  return alert ? (
    <Alert status="error" mb={4} w="300px" fontSize={"sm"} color={"red.800"}>
      {alert}
    </Alert>
  ) : (
    <></>
  );
};
