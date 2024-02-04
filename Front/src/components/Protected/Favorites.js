import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Favorites.css";

// export const userLoader = (isLoggedIn) => 
//   () =>
//     {
//       console.log("hi");
//       // return false;
//       if (!isLoggedIn) {
//         return redirect("/");
//       }
//       return null;
//     }

export function userLoader( isLoggedIn ) {
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
