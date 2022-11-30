import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
  useConst,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";

interface Props {}

export const HeaderNavbar: FC<Props> = () => {
  const navbarRoutes = useConst([
    { label: "Home", route: "/" },
    { label: "Game Search", route: "/games/search" },
  ]);

  return (
    <Stack direction="row" spacing={16} align="center">
      {/* Navbar */}
      <Stack direction="row" spacing={10} align="center">
        {navbarRoutes.map((item, index) => (
          <Link
            colorScheme="teal"
            fontWeight={"semibold"}
            as={RouterLink}
            to={item.route}
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </Stack>

      {/* Profile Dropdown Menu*/}
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Account
        </MenuButton>
        <MenuList py={0} minW="0" w={"150px"}>
          <MenuItem icon={<FaSignOutAlt />} borderRadius="5px">
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};
