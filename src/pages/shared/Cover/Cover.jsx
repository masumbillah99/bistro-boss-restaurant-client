import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[750px]">
        <div className="text-center text-white bg-slate-900 bg-opacity-50 mx-10 lg:mx-28 p-5 lg:p-20">
          <h1 className="mb-5 text-5xl font-bold uppercase logo-font">
            {title}
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
