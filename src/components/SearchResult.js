/* =============== Dependencies ============= */
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

/* ========== Redux ============= */
import { connect } from "react-redux";
import getVisibleBooks from "../store/selectors";
import { removeBook, editBook } from "../store/actionCreators";

/* ============== Components ================= */
import BookPicture from "./BookPicture";
import ModalBox from "./ModalBox";
import StarRating from "./StarRating";

/* =============== Code ======================== */
const SearchResult = (props) => {
  const [viewBookModalId, setBookModallId] = useState(undefined);
  const viewBookModalPopUp = (id) => setBookModallId(id);
  const clearViewBookModal = () => setBookModallId(undefined);

  const [starRating, setStarRating] = useState(0);

  const handleStarRating = (rating, starRating, id) => {
    if (starRating === rating) {
      setStarRating(0);
    } else {
      setStarRating({ starRating });
      setStarRating(() => props.dispatch(editBook(id, { starRating })));
    }
  };

  // const handleStarRating = (rating) => {
  //   if (this.state.rating === rating) {
  //     this.setState({ rating: 0 });
  //   } else {
  //     this.setState({ rating });
  //     this.setState(() =>
  //       this.props.dispatch(editBook(this.state.id, { rating }))
  //     );
  //   }
  // };

  return (
    <div className="search__result">
      {props.books.map((book) => (
        <div key={book.id} className="card__container">
          <article className="card">
            <div className="top-bar h-top-bar-search-results">
              <FaRegTrashAlt
                className="card__btn-trash h-icon-styles"
                onClick={(e) => props.dispatch(removeBook({ id: book.id }))}
              />
            </div>

            <section className="card__main-block">
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
              <StarRating
                // handleStarRating={handleStarRating}
                bookRating={book.rating}
                bookId={book.id}
                // Star props
                starRatingUl="star-rating__ul"
                star="star"
                selected="selected"
                stroke={undefined}
                strokeWidth={0}
              />
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
            handleStarRatin={handleStarRating}
            {...book}
            // Modal handlers
            clearViewBookModal={clearViewBookModal}
            viewBookModal={viewBookModalId === book.id}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.books, state.filters),
  };
};
export default connect(mapStateToProps)(SearchResult);
