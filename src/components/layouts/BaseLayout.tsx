import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { login, logout } from "../../state/userSlice";
import { Header, Footer } from "../layouts";

export const BaseLayout = () => {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const email = user.email;
      dispatch(login(email ?? ""));
    } else {
      dispatch(logout());
    }
  });

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
