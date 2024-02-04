import React, { useEffect, useState } from "react";
import parse from 'html-react-parser'
import DOMPurify from 'dompurify';
import { useLoaderData } from "react-router-dom";
import { TaskBar } from "./TaskBar/TaskBar";
import './BookDetails.css';

export function bookIdLoader({ params }) {
    const bookId = params.bookId;
    return { bookId };
  }

export const BookDetails = () => {
    const { bookId } = useLoaderData();
    const [bookData, setBookData] = useState(null);
    
    useEffect(() => {
      const fetchBookData = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBookData(data);
      };
      fetchBookData();
    }, []);
    
    const htmlFrom = (htmlString) => {
      const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true } });
      return parse(cleanHtmlString);
    }

    if (!bookData) {
      return <div>Loading...</div>;
    }

    
    return (
      <div>
        <TaskBar />
        <div className="book-card">
        <div className="text-container">
          <div className="book-details">
            <h1 className="book-name">{bookData.volumeInfo.title}</h1>
            {bookData.volumeInfo.authors && Array.isArray(bookData.volumeInfo.authors) && (
                <p className="book-info">
                  {bookData.volumeInfo.authors.length === 1 ? (<span><strong>Author:</strong>{bookData.volumeInfo.authors[0]}</span>)
                  : (<span><strong>Authors: </strong>{bookData.volumeInfo.authors.join(', ')}</span>)}
                </p>
              )}
              <p className="book-info"><strong>Publisher: </strong> {bookData.volumeInfo.publisher}</p>
              {bookData.volumeInfo.categories && bookData.volumeInfo.categories.length > 0 && (
                <p className="book-info"><strong>Genre: </strong> {bookData.volumeInfo.categories[0]}</p>
              )}
              <p className="book-info"><strong>Published Date:</strong> {bookData.volumeInfo.publishedDate}</p>
              <p className="book-info"><strong>Description:</strong> </p>
            <div className="scrollable-text">
              {/* <div className="description" dangerouslySetInnerHTML={{__html: bookData.volumeInfo.description}} />           */}
              {bookData.volumeInfo.description && (
                <div className="description">{htmlFrom(bookData.volumeInfo.description)}</div>
              )}
            </div>
          </div>
        </div>
        <div className="image-container">
          {bookData.volumeInfo.imageLinks && (
            <img className="book-card-image" src={bookData.volumeInfo.imageLinks.thumbnail} alt={bookData.volumeInfo.title}/>
          )}
        </div>
      </div>
    </div>
      
    );
}