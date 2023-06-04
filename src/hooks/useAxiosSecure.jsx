import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-side-masumbillah99.vercel.app",
});

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // const logoutAndRedirect = async () => {
    //   await AuthContext.logout();
    //   history.push('/login'); // Redirect to the login page
    // };

    // Clean up interceptors when the component unmounts
    // return () => {
    //   axiosSecure.interceptors.request.eject(interceptor);
    //   axiosSecure.interceptors.response.eject(responseInterceptor);
    // };
  }, [logOutUser, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
