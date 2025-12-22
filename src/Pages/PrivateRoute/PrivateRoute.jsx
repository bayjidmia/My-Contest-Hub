import { Navigate } from "react-router";
import { AuthContext } from "../../Authprovide/Context/Context";
import { useLocation } from "react-router";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
