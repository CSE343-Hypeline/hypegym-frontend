import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({ children, accessBy }) => {
  const { user } = useContext(AuthContext);

  if (accessBy === "non-auth") {
    if (!user) {
      return children;
    }
  } else if (accessBy === "auth") {
    if (user) {
      return children;
    }
  }
  return <Navigate to="/"></Navigate>;
};
export default ProtectedRoute;
