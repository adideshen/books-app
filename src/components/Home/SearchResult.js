import React from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

export const SearchResult = ({result}) => {
    return (
        <Link to={`/book-details/${result.id}`}>
            <div className="search-result">
                {result.volumeInfo.title} 
                {result.volumeInfo.imageLinks && (
                    <img className="book-image" src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title}/>
                )}
            </div>
        </Link>
    )
}