import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  bg?: string;
  children: JSX.Element | JSX.Element[];
}

const styles = {
  width: "100%",
};

export const PageContainer: FC<Props> = ({ bg, children }) => {
  return (
    <Box style={styles} bg={bg}>
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
};
