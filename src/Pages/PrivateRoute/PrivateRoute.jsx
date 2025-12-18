import { Navigate } from "react-router";
import { AuthContext } from "../../Authprovide/Context/Context";
import { useLocation } from "react-router";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return;
  }

  if (user && user?.email) {
    return children;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
