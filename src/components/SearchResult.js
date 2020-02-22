import React from "react";
import BookPicture from "./BookPicture";

const SearchResult = props => {
  return (
    <section className="card">
      <div className="book-title">
        <h2>{props.title}</h2>
        <h3>
          <span>by </span>
          {props.author}
        </h3>
        <h3 className="book-rating">
          Rating: <span> {props.rating}</span>
        </h3>
      </div>

      <div className="book-description">
        <h3>Description:</h3>
        <a className="book-link" href={props.url} target="_blank">
          <BookPicture
            src={props.src}
            srcSm={props.srcSm}
            srcMd={props.srcMd}
            srcLg={props.srcLg}
            srcXlg={props.srcXlg}
          />
        </a>
        <p>{props.description}</p>
      </div>
      <div className="book-other--info">
        <h3>Other Info</h3>
        <p>
          Publication Year: <strong>{props.publicationYear}</strong>
        </p>
        <p>
          Publication Length: <strong>{props.publicationLength}</strong> pages
        </p>
        <p>
          Category: <strong>{props.category}</strong>
        </p>
      </div>
    </section>
  );
};
export default SearchResult;
