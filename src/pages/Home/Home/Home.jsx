import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefMenu from "../ChefMenu/ChefMenu";
import Description from "../Description/Description";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <div className="max-w-screen-xl mx-auto">
        <Description />
        <PopularMenu />
        <CallUs />
        <ChefMenu />
      </div>
      <Features />
      <div className="max-w-screen-xl mx-auto">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
