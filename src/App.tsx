import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react";
import { Footer, Header } from "./components/layouts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Header />
        <VStack spacing={8}>
          <Text>Hello World</Text>
        </VStack>
      </Grid>
      <Footer />
    </Box>
  </ChakraProvider>
);
