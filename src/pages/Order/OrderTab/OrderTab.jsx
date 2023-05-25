import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-10 mx-10 xl:mx-0">
        {items?.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default OrderTab;
