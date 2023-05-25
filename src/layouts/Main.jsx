import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const loginLayout = location.pathname.includes("login");

  return (
    <>
      {loginLayout || <Navbar />}
      <Outlet />
      {loginLayout || <Footer />}
    </>
  );
};

export default Main;
