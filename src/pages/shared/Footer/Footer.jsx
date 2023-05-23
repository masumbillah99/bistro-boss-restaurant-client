import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20  bg-gradient-to-r from-[#111827] to-[#1F2937]">
      <div className="footer p-20 text-white max-w-screen-xl mx-auto">
        <div>
          <p className="text-3xl font-bold uppercase mb-3">contact us</p>
          <p className="text-lg">123 ABS Street, Uni 21,</p>
          <p className="text-lg">Bangladesh +88 123456789</p>
          <p className="text-lg">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-lg">Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="">
          <span className="text-3xl font-bold">Follow US</span>
          <span className="text-xl">Join US on Social Media</span>
          <div className="grid grid-flow-col gap-4 text-xl mt-3">
            <Link to="https://github.com/masumbillah99" target="_blank">
              <FaGithub />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100036766350727"
              target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.linkedin.com/in/masumbillah99/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link to="https://www.youtube.com/@awebtutor9986" target="_blank">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-800 text-white text-center">
        <p>Copyright © 2023 - All right reserved by Culinary Cloud Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
