import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Authprovide/Context/Context";

const axiosSecure = axios.create({
  baseURL: "https://contesthub-server-bay.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!loading) {
      const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      });

      const resInterceptor = axiosSecure.interceptors.response.use(
        (response) => {
          return response;
        },
        (err) => {
          console.log(err);

          const statuscode = err.response?.status;
          if (statuscode === 401 || statuscode === 403) {
            logout().then(() => {
              navigate("/login");
            });
          }
          return Promise.reject(err);
        }
      );

      return () => {
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
      };
    }
  }, [user, loading, logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
