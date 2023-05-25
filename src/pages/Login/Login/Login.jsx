import { useContext } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import bgImg from "../../../assets/others/authentication.png";
import loginImg from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signInUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      alert("Captcha does not match");
    }
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
                  ref={captchaRef}
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-sm mt-2"
                >
                  Validate
                </button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
