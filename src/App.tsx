import { Box, Grid } from "@chakra-ui/react";
import { Profile } from "./components/pages";

export const App = () => (
  <Box>
    <Grid minH="100vh" p={3}>
      <Profile />
    </Grid>
  </Box>
);
