import React, { use } from "react";

import { Navigate } from "react-router";
import { AuthContext } from "../../Authprovide/Context/Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
