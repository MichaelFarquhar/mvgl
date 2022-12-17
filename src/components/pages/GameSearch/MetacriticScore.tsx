import { Box } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const MetacriticScore = ({ score }: Props) => {
  let scoreColor = "";
  if (score > 74) scoreColor = "green.600";
  else if (score < 75 && score > 49) scoreColor = "yellow.600";
  else scoreColor = "red.600";

  return (
    <Box
      color={scoreColor}
      border="2px"
      borderColor={scoreColor}
      py={1}
      px={2}
      fontSize="md"
      fontWeight="bold"
    >
      {score}
    </Box>
  );
};
