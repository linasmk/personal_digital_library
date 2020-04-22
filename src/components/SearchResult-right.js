import React from "react";
import BookPicture from "./BookPicture";
import ModalBox from "./ModalBox";
import StarRating from "./StarRating";

export default class SearchResult extends React.Component {
  state = {
    viewBookModalId: undefined,
  };

  viewBookModalPopUp = (bookId) => {
    this.setState({
      viewBookModalId: bookId,
    });
  };
  clearViewBookModal = () => {
    this.setState(() => ({
      viewBookModalId: undefined,
    }));
  };
  render() {
    return (
      <div className="search__result">
        {this.props.filteredLibrary.map((book) => (
          <div key={book.id.toString()} className="card__container">
            <article className="card">
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
                  <span>by</span>
                  {book.author}
                </h3>
                <StarRating />
                <div className="view__more_box">
                  <button
                    className="view__more_btn"
                    onClick={() => this.viewBookModalPopUp(book.id)}
                  >
                    View More
                  </button>
                </div>
              </section>
            </article>

            <ModalBox
              //Book info
              identifier={book.id}
              title={book.title}
              author={book.author}
              url={book.url}
              src={book.src}
              srcSm={book.srcSm}
              srcMd={book.srcMd}
              srcLg={book.srcLg}
              srcXlg={book.srcXlg}
              description={book.description}
              publicationYear={book.publicationYear}
              publisher={book.publisher}
              publicationLength={book.publicationLength}
              category={book.category}
              // Modal handlers
              clearViewBookModal={this.clearViewBookModal}
              viewBookModal={this.state.viewBookModalId === book.id}
            />
          </div>
        ))}
      </div>
    );
  }
}
