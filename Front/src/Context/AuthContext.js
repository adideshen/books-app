import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = React.createContext();

const signupEndpoint = "http://localhost:3001/users/sign-up";
const loginEndpoint = "http://localhost:3001/users/login";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const RequestSignup = async (details) => {
    try {
      const response = await axios.post(signupEndpoint, details);
      setAuthUser({ name: details.name, email: details.email, password: details.password });
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Signup failed: ", error.response.data);
    }
  }
  
  const RequestLogin = async (details) => {
    try {
      const response = await axios.post(loginEndpoint, details);
      // console.log(response.data.email);
      setAuthUser({ name: response.data.name , email: details.email, password: details.password });
      setIsLoggedIn(true);
    } catch (error) {
      // alert("Login failed: " + error.response.data)
      console.log("Login failed: ", error.response.data)
    }
  }

  const value = {
    RequestLogin,
    RequestSignup,
    authUser,
    // setAuthUser,
    isLoggedIn,
    // setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
