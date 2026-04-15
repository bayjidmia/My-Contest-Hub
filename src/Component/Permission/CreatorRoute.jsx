import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import { Navigate } from "react-router";

const CreatorRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (user.role !== "creator") return <Navigate to="/" />;

  return children;
};

export default CreatorRoute;
