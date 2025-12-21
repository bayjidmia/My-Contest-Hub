import { Navigate } from "react-router";
import useRole from "./useRole";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
