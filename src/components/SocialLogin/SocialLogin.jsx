import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch(
          "https://bistro-boss-server-side-masumbillah99.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          }
        )
          .then((res) => res.json())
          .then(() => navigate(from, { replace: true }));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <p className="text-center mt-3">
        Or Sign in with
        <span className="flex flex-row gap-3 mt-3 items-center justify-center">
          <button className="btn btn-outline btn-circle text-lg">
            <FaFacebookF />
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-circle text-lg"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-outline btn-circle text-lg">
            <FaGithub />
          </button>
        </span>
      </p>
      <ToastContainer />
    </>
  );
};

export default SocialLogin;
