import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // 1. import axiosSecure
  // 2. call --- axiosSecure.get
  // 3. delete base url
  // 4. return res.data

  const handleMakeAdmin = (user) => {
    fetch(
      `https://bistro-boss-server-side-masumbillah99.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin now`);
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user);
  };

  return (
    <div className="w-full max-w-screen-xl px-5 lg:px-0 lg:mt-20">
      <Helmet>
        <title>Bistro Boss || All Users</title>
      </Helmet>
      <SectionTitle subHeading="---How Many?---" heading="manage all users" />
      <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost text-white bg-orange-500 hover:bg-orange-600 btn-md"
                    >
                      <FaUsers className="" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost text-white bg-red-500 hover:bg-red-600 btn-md"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllUsers;
