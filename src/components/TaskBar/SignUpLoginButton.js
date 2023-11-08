import React from "react";
import { Link } from "react-router-dom";

export const SighUpLoginButton = () => {
  return (
    <Link to="/sign-up-login">
      <button className="sign-up-button">Sign Up\ Login</button>
    </Link>
  );
};
