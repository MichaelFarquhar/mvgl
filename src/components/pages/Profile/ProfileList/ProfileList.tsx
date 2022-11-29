import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import { ProfileListMenu } from "./ProfileListMenu";
import { ProfileListTable } from "./ProfileListTable";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

interface Props {}

export const ProfileList: FC<Props> = () => {
  const list = useSelector((state: RootState) => state.list);

  return (
    <VStack spacing={6}>
      <ProfileListMenu />
      <ProfileListTable tableData={list} />
    </VStack>
  );
};
