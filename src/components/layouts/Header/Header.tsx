import { PageContainer } from "../PageContainer/PageContainer";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Header = () => {
  return (
    <PageContainer>
      <ColorModeSwitcher justifySelf="flex-end" />
    </PageContainer>
  );
};
