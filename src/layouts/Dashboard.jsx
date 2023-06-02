import {
  FaShoppingCart,
  FaCalendar,
  FaWallet,
  FaHome,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { HiMenu, HiMail } from "react-icons/hi";
import { AiFillShopping } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-5"
        >
          Open Menu
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/user">
                  <FaHome />
                  admin home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils />
                  add item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBook />
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <span className="badge badge-secondary">
                    {cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

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
