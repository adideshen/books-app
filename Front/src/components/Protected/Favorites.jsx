import React from "react";
import { redirect } from "react-router-dom";
import "./Favorites.css";

export function UserLoader( isLoggedIn ) {
      if (!isLoggedIn) {
        console.log("youre not logged in");
        return redirect("/");
      }
      console.log(isLoggedIn);
      return null;
    }

export const Favorites = ( isLoggedIn ) => {

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
