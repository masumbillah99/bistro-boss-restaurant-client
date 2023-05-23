import service from "../../../assets/home/chef-service.jpg";

const Description = () => {
  return (
    <>
      <div
        className="hero h-[582px]"
        style={{
          backgroundImage: `url(${service})`,
        }}
      >
        <div className="text-center text-black bg-white mx-10 lg:mx-28 p-5 lg:p-20">
          <h2 className="text-3xl font-bold logo-font mb-2">bistro boss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
