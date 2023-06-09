import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const loginLayout = location.pathname.includes("login");
  const signUpLayout = location.pathname.includes("signUp");

  return (
    <>
      {loginLayout || signUpLayout || <Navbar />}
      <Outlet />
      {loginLayout || signUpLayout || <Footer />}
    </>
  );
};

export default Main;
