import { FaShoppingCart, FaCalendar, FaWallet, FaHome } from "react-icons/fa";
import { HiMenu, HiMail } from "react-icons/hi";
import { AiFillShopping } from "react-icons/ai";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content max-w-screen-xl lg:ml-40">
        {/* <!-- Page content here --> */}
        <MyCart />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] uppercase">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/user">
              <FaHome />
              User home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <HiMenu />
              menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <AiFillShopping />
              shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <HiMail />
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
