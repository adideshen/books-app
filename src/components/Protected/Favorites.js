import React from "react";
import { useAuth } from "../../Context/AuthContext";
import "./Favorites.css";

export function userLoader() {
  return false;
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
