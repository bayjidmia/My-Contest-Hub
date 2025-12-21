import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Authprovide/Context/Context";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
      return config;
    });
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
