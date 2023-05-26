import { useContext, useRef, useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import bgImg from "../../../assets/others/authentication.png";
import loginImg from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signInUser, googleSignIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("successfully logged in");
        e.target.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      alert("Captcha does not match");
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("successfully logged in with google");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url("${bgImg}")` }}
      >
        <div className="hero-content flex-col lg:flex-row lg:gap-36">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  disabled={disabled}
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="text-center pb-5">
              <p>
                New here?
                <Link
                  to="/signUp"
                  className="text-orange-500 text-lg hover:underline ms-1"
                >
                  Create a New Account
                </Link>
              </p>
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
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
