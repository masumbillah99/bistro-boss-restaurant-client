import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    axiosSecure.delete(`/menu/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Successfully deleted an item");
      }
    });
  };

  return (
    <div className="max-w-screen-xl w-full">
      <SectionTitle subHeading="---Hurry Up!---" heading="manage items" />
      <div className="overflow-x-auto mx-0 lg:mx-20">
        <h2 className="text-2xl font-bold mb-3">Total Items: {menu.length}</h2>
        <table className="table w-full">
          <thead>
            <tr className="uppercase">
              <th># </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>price</th>
              <th>action</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="food image" />
                    </div>
                  </div>
                </td>
                <td className="font-bold">{item.name}</td>
                <td className="text-sm opacity-50">${item.price}</td>
                <td>
                  <button className="btn btn-ghost text-white bg-orange-500 hover:bg-orange-600 btn-sm">
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-white bg-red-500 hover:bg-red-600 btn-sm"
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

export default ManageItems;
