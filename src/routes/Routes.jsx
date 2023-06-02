import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
