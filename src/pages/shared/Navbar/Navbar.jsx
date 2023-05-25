import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
      {/* <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          contact us
        </NavLink>
      </li> */}
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
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          our shop
        </NavLink>
      </li>
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
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal uppercase px-1">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
