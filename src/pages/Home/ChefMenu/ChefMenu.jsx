import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../../Order/OrderTab/OrderTab";

const ChefMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-20">
      <SectionTitle subHeading="---Should Try---" heading="chef recommends" />
      <OrderTab items={popular} />
    </div>
  );
};

export default ChefMenu;
