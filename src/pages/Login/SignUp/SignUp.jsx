import { useState, useContext } from "react";
import bgImg from "../../../assets/others/authentication.png";
import loginImg from "../../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const { registerUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if ((name, photo)) {
      registerUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          updateUserProfile(createdUser, name, photo);
          toast.success("signUp user successfully");
          e.target.reset();
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/login");
      })
      .catch((error) => toast.error(error));
  };

  // uncontrolled component => controlled component
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPassError("Password must be at least 6 characters long");
    } else if (!/.+[A-Z].+/.test(passwordInput)) {
      setPassError("Password must contain at least one uppercase letter");
    } else {
      setPassError("");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url("${bgImg}")` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-36">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmail}
                  placeholder="email"
                  className="input input-bordered mb-3"
                  required
                />
                {emailError && <span className="text-error">{emailError}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="password"
                  className="input input-bordered mb-3"
                  required
                />
                {passError && <span className="text-error">{passError}</span>}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>

            <div className="text-center pb-5">
              <p>
                Already registered?
                <Link
                  to="/login"
                  className="text-orange-500 text-lg hover:underline ms-1"
                >
                  Go to Log in
                </Link>
              </p>
              <p className="text-center mt-3">
                Or Sign up with
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

export default Register;
