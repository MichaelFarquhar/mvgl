import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { Footer, Header } from "./components/layouts";
import { Profile } from "./components/pages";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Grid minH="100vh" p={3}>
        <Header />
        <Profile />
      </Grid>
      <Footer />
    </Box>
  </ChakraProvider>
);
