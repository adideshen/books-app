import React from "react";
import { Link } from "react-router-dom";

export const FavoritesButton = () => {
  return (
    <Link to="/favorites">
      <button className="favorite-button">Favorites</button>
    </Link>
  );
};
