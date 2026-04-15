import React, { useContext } from "react";
import { AuthContext } from "../../Authprovide/Context/Context";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (user.role !== "admin") return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
