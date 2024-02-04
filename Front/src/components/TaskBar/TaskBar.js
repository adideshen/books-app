import React from "react";
import { HomeButton } from "./HomeButton";
import { FavoritesButton } from "./FavoritesButton";
import { SighUpLoginButton } from "./SignUpLoginButton";
import { useAuth } from "../../Context/AuthContext";
import { UserButton } from "./UserButton";
import "./TaskBar.css";

export const TaskBar = () => {
  const authService = useAuth();
  const isLoggedIn = authService.isLoggedIn;

  return (
    <div className="task-bar">
      <HomeButton />
      {isLoggedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <div>
          <SighUpLoginButton />
        </div>
      )}
    </div>
  );
};
