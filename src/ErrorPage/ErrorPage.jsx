import { Link, useRouteError } from "react-router-dom";
import errorGif from "../assets/404.gif";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <div className="text-center">
      <img className="w-1/3 mx-auto" src={errorGif} />
      <p className="text-red-700">{error?.message}</p> <br />
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-700 text-white text-xl py-3 px-4 mx-auto rounded-lg"
      >
        Back to HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
