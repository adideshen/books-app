import React from "react";
import { Link } from "react-router-dom";
import booksIcon from "../Home/books-icon.png";
import "./HomeButton.css";

export const HomeButton = () => {
  return (
    <Link to="/">
      <img className="home-button" src={booksIcon} />
    </Link>
  );
};
