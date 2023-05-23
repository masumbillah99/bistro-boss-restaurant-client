import moment from "moment";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featImg from "../../../assets/home/featured.jpg";

const Features = () => {
  return (
    <section>
      <div
        className="hero h-[848px] bg-fixed"
        style={{
          backgroundImage: `url(${featImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 text-white pt-28">
          <SectionTitle subHeading={"Check it out"} heading={"from our menu"} />
        </div>
        <div className="hero-content flex-col md:flex-row mt-44 gap-10">
          <img className="w-1/2" src={featImg} alt="" />
          <div className="text-white">
            <p>{moment().format("MMMM Do YYYY")}</p>
            <h3 className="text-xl font-semibold py-2">
              WHERE CAN I GET SOME?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline hover:btn-primary border-white border-0 border-b-4 mt-5 px-5 text-xl text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
