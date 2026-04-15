import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import { Navigate } from "react-router";

const UserRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default UserRoute;
