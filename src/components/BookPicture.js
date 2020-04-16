import React from "react";
const BookPicture = (props) => {
  return (
    <picture>
      <source media="(min-width: 1400px)" srcSet={props.srcXlg} sizes="250px" />
      <source media="(min-width: 998px)" srcSet={props.srcLg} sizes="200px" />
      <source media="(min-width: 480px)" srcSet={props.srcMd} sizes="120px" />
      <source media="(min-width: 200px)" srcSet={props.srcSm} sizes="80px" />
      <img className="book__picture" src={props.src} alt="title" />
    </picture>
  );
};
export default BookPicture;
