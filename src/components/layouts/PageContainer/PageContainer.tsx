import { Container } from "@chakra-ui/react";
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
    <div style={styles}>
      <Container bg={bg}>{children}</Container>
    </div>
  );
};
