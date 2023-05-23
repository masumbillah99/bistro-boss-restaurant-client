import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <div className="max-w-screen-xl mx-auto">
        <Description />
        <PopularMenu />
      </div>
      <Features />
    </>
  );
};

export default Home;
