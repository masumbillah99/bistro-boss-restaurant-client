import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const imgHoistingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddItem = (data) => {
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHoistingToken}`;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imgURL = result.data.display_url;
          const { name, category, price, recipe } = data;
          const newMenuItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: imgURL,
          };
          axiosSecure.post("/menu", newMenuItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              toast.success("Wow! you added a new item");
              reset();
            }
          });
        }
      });
  };

  return (
    <div className="w-full max-w-screen-xl">
      <Helmet>
        <title>Bistro Boss || Add Item</title>
      </Helmet>
      <SectionTitle subHeading="---What's new?---" heading="add an item" />
      <form
        onSubmit={handleSubmit(handleAddItem)}
        className="bg-[#F3F3F3] p-12 rounded-lg mx-2 md:mx-5 lg:mx-0"
      >
        <div className="form-control">
          <label className="label font-semibold">Recipe Name*</label>
          <input
            {...register("name")}
            className="input input-bordered input-primary w-full"
            placeholder="Recipe Name"
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="form-control w-full">
            <label className="label font-semibold">Category*</label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label font-semibold">Price*</label>
            <input
              {...register("price", { required: true })}
              className="input input-bordered input-primary w-full"
              placeholder="Price"
              type="number"
            />
          </div>
        </div>
        <div className="form-control w-full pb-5">
          <label className="label font-semibold">Recipe Details*</label>
          <textarea
            className="textarea textarea-md input-primary w-full h-36"
            {...register("recipe")}
            placeholder="Recipe Details"
          />
        </div>
        <input
          {...register("image", { required: true })}
          type="file"
          className="file-input w-full max-w-xs mb-5"
        />
        <br />
        <button
          type="submit"
          className="btn px-5 border-0 bg-gradient-to-r from-[#835D23] to-[#B58130]"
        >
          Add Item
          <FaUtensils className="ms-1" />
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
