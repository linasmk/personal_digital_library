/* =============== Dependencies ============= */
import React, { useState } from "react";

/* ========== Redux ============= */
import { connect } from "react-redux";
import getVisibleBooks from "../store/selectors";
import { removeBook } from "../store/actionCreators";

/* ============== Components ================= */
import BookPicture from "./BookPicture";
import ModalBox from "./ModalBox";
import StarRating from "./StarRating";

/* =============== Code ======================== */
const SearchResult = (props) => {
  const [viewBookModalId, setBookModallId] = useState(undefined);
  const viewBookModalPopUp = (id) => setBookModallId(id);
  const clearViewBookModal = () => setBookModallId(undefined);

  return (
    <div className="search__result">
      {props.books.map((book) => (
        <div key={book.id.toString()} className="card__container">
          <article className="card">
            <button
              className="card__button-top"
              onClick={(e) => {
                props.dispatch(removeBook({ id: book.id }));
              }}
            >
              <span>&times;</span>
            </button>
            <section className="card__main_block">
              <a className="card__book_link" href={book.url} target="_blank">
                <BookPicture
                  src={book.src}
                  srcSm={book.srcSm}
                  srcMd={book.srcMd}
                  srcLg={book.srcLg}
                  srcXlg={book.srcXlg}
                />
              </a>

              <h2 className="card__book_title">{book.title}</h2>
              <h3 className="card__book_author">
                <span>by </span>
                {book.author}
              </h3>
              <StarRating />
              <div className="view__more_box">
                <button
                  className="view__more_btn"
                  onClick={() => viewBookModalPopUp(book.id)}
                >
                  View More
                </button>
              </div>
            </section>
          </article>
          <ModalBox
            //Book info
            key={book.id}
            {...book}
            // Modal handlers
            clearViewBookModal={clearViewBookModal}
            viewBookModal={viewBookModalId === book.id}
            // Book edits
            editBookInfo={props.editBookInfo}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.books),
  };
};
export default connect(mapStateToProps)(SearchResult);
