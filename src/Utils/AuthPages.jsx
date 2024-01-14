import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthPages = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to="login"
      state={{
        message: "you must be logged in",
        comingFrom: location.pathname,
      }}
      replace
    />
  );
};

export default AuthPages;
