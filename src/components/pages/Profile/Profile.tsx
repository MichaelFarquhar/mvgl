import { VStack } from "@chakra-ui/react";
import { ProfileList } from "./ProfileList/ProfileList";

export const Profile = () => {
  return (
    <VStack spacing={4}>
      <ProfileList />
    </VStack>
  );
};
