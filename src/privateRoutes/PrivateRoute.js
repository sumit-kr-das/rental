import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ element, roles }) => {
  const { user } = useContext(AuthContext);

  if (!user.access_token || !user.role) {
    return <Navigate to="/login" />;
  } else if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  } else return <>{element}</>;
};

export default PrivateRoute;
