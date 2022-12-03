import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
  useConst,
  MenuGroup,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

export const HeaderNavbar = () => {
  const navbarRoutes = useConst([
    { label: "Home", route: "/" },
    { label: "Game Search", route: "/games/search" },
  ]);

  const email = useSelector((state: RootState) => state.user.user);

  // Sign out user and go to login page
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

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
        <MenuList>
          <MenuGroup title={email}>
            <MenuItem icon={<FaSignOutAlt />} onClick={logout}>
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Stack>
  );
};
