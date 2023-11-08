import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [searchInput, setSearchInput] = useState("");

  const fetchData = (value) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyA7WVoQQH6o-yum51g2mefvLT2An8uOw40`
    )
      .then((response) => response.json())
      .then((json) => {
        setResults(json.items);
        console.log(json);
      }); // makes the APIs calls
  };

  const handleChange = (value) => {
    value.preventDefault();
    setSearchInput(value.target.value);
    fetchData(value.target.value);
  };

  return (
    <div className="search-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search here"
          value={searchInput}
          onChange={handleChange}
          className="SearchBar"
        />
        {/* <div className="search-icon">
                    <img className='logo' src={searchIcon} />
                </div> */}
      </div>
    </div>
  );
};
