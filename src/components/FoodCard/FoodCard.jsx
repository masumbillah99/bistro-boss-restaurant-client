import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // console.log(item);
    if (user) {
      const cartItem = { foodId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Food added on the cart");
          }
        });
    } else {
      toast.warn("Please login to order the food");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food items" />
      </figure>
      <p className="absolute right-0 mt-4 mr-6 p-3 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body bg-[#F3F3F3]">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-3">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-2"
          >
            Add to cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodCard;
