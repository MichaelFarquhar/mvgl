import { Outlet } from "react-router-dom";
import { Header, Footer } from "../layouts";

export const BaseLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
