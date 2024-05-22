import React, { useState, useContext } from "react";
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
      setAuthUser({ name: response.data.name , email: details.email, password: details.password });
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Login failed: ", error.response.data);
    }
  }

  const setLogout = () => {
    setAuthUser(null);
    setIsLoggedIn(false);
  }

  const value = {
    RequestLogin,
    RequestSignup,
    authUser,
    isLoggedIn,
    setLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
