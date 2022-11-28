import {
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { AddToListModal } from "../../modals/AddToListModal";

interface Props {
  item: any;
}

export const GameSearchItem: FC<Props> = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      direction={{ base: "column" }}
      overflow="hidden"
      variant="outline"
      shadow={"lg"}
      width={"350px"}
    >
      <Image
        objectFit="cover"
        maxW="fit-content"
        src={item.background_image}
        alt={item.name}
      />

      <Stack>
        <CardBody>
          <Heading size="lg">{item.name}</Heading>
          <Stack direction="row" mt={2}>
            {item?.platforms.map((platform: any, index: number) => (
              <Badge variant="outline" key={index}>
                {platform.platform.name}
              </Badge>
            ))}
          </Stack>
          <Button variant="solid" colorScheme="teal" mt={6} onClick={onOpen}>
            Add To List
          </Button>
          <AddToListModal isOpen={isOpen} onClose={onClose} />
        </CardBody>
      </Stack>
    </Card>
    // <Card w={"100%"}>
    //   <Stack spacing={4}>
    //     <img src={item.background_image} width="300" />
    //     <Box>
    //       <Text fontSize="2xl">{item.name}</Text>
    //     </Box>
    //   </Stack>
    // </Card>
  );
};
