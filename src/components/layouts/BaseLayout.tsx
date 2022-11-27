import { ChakraProvider, theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../layouts";

export const BaseLayout = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
};
