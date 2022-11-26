import { Card, VStack } from "@chakra-ui/react";
import { PageContainer } from "../../layouts";
import { ProfileList } from "./ProfileList/ProfileList";

export const Profile = () => {
  return (
    <VStack spacing={4}>
      <ProfileList />
    </VStack>
  );
};
