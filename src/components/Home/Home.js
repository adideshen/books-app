import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import "./Home.css";
import { TaskBar } from "../TaskBar/TaskBar";

export const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="home">
      <TaskBar />
      <header className="home-header">
        <span className="welcome">Welcome To The Books Searcher!</span>
        <p className="quote">
          "Books are a uniquely portable magic." - Stephan King
        </p>
      </header>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
};
