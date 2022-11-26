import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import { ProfileListMenu } from "./ProfileListMenu";
import { ProfileListTable } from "./ProfileListTable";

interface Props {}

const games = [
  {
    id: 1,
    title: "God of War",
    score: 10,
    date_added: new Date(),
  },
  {
    id: 2,
    title: "League of Legends",
    score: 7,
    date_added: new Date(),
  },
  {
    id: 3,
    title: "Minecraft",
    score: 10,
    date_added: new Date(),
  },
];

export const ProfileList: FC<Props> = () => {
  return (
    <VStack spacing={6}>
      <ProfileListMenu />
      <ProfileListTable tableData={games} />
    </VStack>
  );
};
