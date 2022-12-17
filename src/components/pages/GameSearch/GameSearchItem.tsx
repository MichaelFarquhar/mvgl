import {
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  Badge,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";
import { AddToListModal } from "../../modals/AddToListModal";
import { MetacriticScore } from "./MetacriticScore";

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
    >
      <Image
        objectFit="cover"
        width={"100%"}
        src={item.background_image}
        alt={item.name}
      />

      <Stack>
        <CardBody>
          <Heading size="lg">{item.name}</Heading>
          <Stack direction="row" mt={3}>
            {item?.platforms.map((platform: any, index: number) => (
              <Badge variant="outline" key={index} py={0.5} px={1.5}>
                {platform.platform.name}
              </Badge>
            ))}
          </Stack>
          <Flex justifyContent="space-between" alignItems="center" mt={6}>
            <MetacriticScore score={item.metacritic} />
            <Button variant="solid" colorScheme="teal" onClick={onOpen}>
              Add To List
            </Button>
          </Flex>
          <AddToListModal isOpen={isOpen} onClose={onClose} />
        </CardBody>
      </Stack>
    </Card>
  );
};
