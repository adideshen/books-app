import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeButton } from "../TaskBar/HomeButton";
import { useAuth } from "../../Context/AuthContext";
import "./SignUpLogin.css";

import userIcon from "./user-solid.svg";
import emailIcon from "./envelope-solid.svg";
import lockIcon from "./lock-solid.svg";

export const SignUpLogin = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [authUser, isLoggedIn]);

  const handleSignUp = (event) => {
    event.preventDefault();
    setAction("Sign Up");
    if (name && email && password) {
      setAuthUser({ name: name, email: email, password: password });
      setIsLoggedIn(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setAction("Login");
    const name = "user"; // import username
    if (email && password) {
      setAuthUser({ name: name, email: email, password: password });
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <HomeButton />
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underLine"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={userIcon} alt="" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
          )}
          <div className="input">
            <img src={emailIcon} alt="" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input">
            <img src={lockIcon} alt="" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <button
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
