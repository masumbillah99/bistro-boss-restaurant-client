import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const imgHoistingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddItem = (data) => {
    console.log(data, imgHoistingToken);
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
    </div>
  );
};

export default AddItem;
