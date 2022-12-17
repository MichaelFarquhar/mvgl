import { VStack } from "@chakra-ui/react";
import { ProfileListMenu } from "./ProfileListMenu";
import { ProfileListTable } from "./ProfileListTable";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

export const ProfileList = () => {
  const list = useSelector((state: RootState) => state.list);

  return (
    <VStack spacing={6}>
      <ProfileListMenu />
      <ProfileListTable tableData={list} />
    </VStack>
  );
};
