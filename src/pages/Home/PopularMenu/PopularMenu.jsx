import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="my-20 text-center">
      <SectionTitle subHeading={"Check it out"} heading={"from our menu"} />
      <div className="grid lg:grid-cols-2 gap-10 mx-3 lg:mx-0 mb-10 text-left">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-2">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
