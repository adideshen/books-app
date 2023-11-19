import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Favorites.css";



export const userLoader = (isLoggedIn, navigate) => 
  () =>
    {
      return false;
      // const authService = useAuth();
      // const isLoggedIn = authService.isLoggedIn;
      // if (!isLoggedIn) {
      //   const navigate = useNavigate();
      //   navigate("/");
      // }
      // return null;
    }



export const Favorites = () => {
  const authService = useAuth();
  const isLoggedIn = authService.isLoggedIn;
  // console.log(authService);

  return (
    <div>
      {isLoggedIn ? (
        <div>This is your favorites!</div>
      ) : (
        <div>You need to Login first!</div>
      )}
    </div>
  );
};
