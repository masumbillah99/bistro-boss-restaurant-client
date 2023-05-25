import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      {/* main cover */}
      <SectionTitle subHeading="---Don't miss---" heading="today's offer" />
      {/* offered menu items */}
      <MenuCategory items={offered} btn="order your favorite food" />

      {/* dessert menu items */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg} />

      {/* pizza menu items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />

      {/* salad menu items */}
      <MenuCategory items={salad} title="Salad" img={saladImg} />

      {/* soup menu items */}
      <MenuCategory items={soup} title="Soup" img={soupImg} />
    </div>
  );
};

export default Menu;
