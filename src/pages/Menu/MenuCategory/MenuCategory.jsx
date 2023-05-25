import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <>
      {title && <Cover img={img} title={title} />}
      <div className="max-w-screen-xl mx-auto my-20 text-center">
        <div className="grid lg:grid-cols-2 gap-10 mx-3 lg:mx-0 mb-10 text-left">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-2">
          Order your favorite food
        </button>
      </div>
    </>
  );
};

export default MenuCategory;
