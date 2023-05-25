const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

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
          <button className="btn btn-outline border-0 border-b-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
