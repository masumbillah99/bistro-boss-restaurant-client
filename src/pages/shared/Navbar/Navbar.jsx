import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => toast.success(error.message));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] hover:bg-none"
              : "text-white hover:bg-none"
          }
        >
          <button className="btn gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+99</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <img
              className="w-20 rounded-full mt-3"
              src={user?.photoURL}
              alt="user profile img"
            />
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-ghost bg-red-500 hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-[#EEFF25]" : "text-white"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 px-0 lg:px-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact uppercase dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="text-3xl logo-font">
            Bistro Boss <br />
            Restaurant
          </Link>
        </div>
        <div className="ms-auto hidden lg:flex">
          <ul className="menu menu-horizontal items-center uppercase px-1">
            {navItems}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
