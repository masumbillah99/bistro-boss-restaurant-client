const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: " 0px 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl mb-2">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
