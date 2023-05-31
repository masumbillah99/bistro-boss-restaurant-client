import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const MyCart = () => {
  const [cart, refetch] = useCart();

  // how does reduce works
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    fetch(`http://localhost:5000/carts/${item._id}`, {
      method: "DELETE",
      // headers: {
      //   "content-type": "application/json",
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("review cart deleted successfully");
          refetch();
        }
      });
  };

  return (
    <section className="w-full max-w-screen-xl lg:mt-20">
      <Helmet>
        <title>Bistro Boss || MyCart</title>
      </Helmet>
      <SectionTitle subHeading="---My Cart---" heading="wanna add more?" />
      <div className="">
        <div className="uppercase font-semibold my-10 flex items-center justify-evenly">
          <h3>total items: {cart.length}</h3>
          <h3>total price: ${total}</h3>
          <button className="btn btn-warning">pay</button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr className="hover" key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
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
      </div>
      <ToastContainer />
    </section>
  );
};

export default MyCart;
