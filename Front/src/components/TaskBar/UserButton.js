import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import arrowIcon from "./chevron-down-solid.svg";

import { useAuth } from "../../Context/AuthContext";
import "./UserButton.css";

export const UserButton = () => {
  // const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const { RequestLogin, RequestSignup, authUser, isLoggedIn, setLogout } = useAuth();
  const userName = authUser.name;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setLogout();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="basic-button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        icon={arrowIcon}
      >
        Hi {userName}!
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/favorites">
          <MenuItem onClick={handleClose}>Favorites</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
