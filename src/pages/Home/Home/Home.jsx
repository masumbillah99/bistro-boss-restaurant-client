import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <div className="max-w-screen-xl mx-auto">
        <Description />
        <PopularMenu />
        <CallUs />
      </div>
      <Features />
      <div className="max-w-screen-xl mx-auto">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
