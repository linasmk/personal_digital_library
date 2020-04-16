import React from "react";
import BookPicture from "./BookPicture";
import ModalBox from "./ModalBox";
import StarRating from "./StarRating";

export default class SearchResult extends React.Component {
  state = {
    viewBookModal: undefined,
  };
  viewBookModalPopUp = () => {
    this.setState(() => ({
      viewBookModal: true,
    }));
  };
  clearViewBookModal = () => {
    this.setState(() => ({
      viewBookModal: undefined,
    }));
  };
  render() {
    return (
      <div className="card__container">
        <article className="card">
          <section className="card__main_block">
            <a
              className="card__book_link"
              href={this.props.url}
              target="_blank"
            >
              <BookPicture
                src={this.props.src}
                srcSm={this.props.srcSm}
                srcMd={this.props.srcMd}
                srcLg={this.props.srcLg}
                srcXlg={this.props.srcXlg}
              />
            </a>

            <h2 className="card__book_title">{this.props.title}</h2>
            <h3 className="card__book_author">
              <span>by </span>
              {this.props.author}
            </h3>
            <StarRating />
            <div className="view__more_box">
              <button
                className="view__more_btn"
                onClick={this.viewBookModalPopUp}
              >
                View More
              </button>
            </div>
          </section>
        </article>
        <ModalBox
          //Book info
          title={this.props.title}
          author={this.props.author}
          url={this.props.url}
          src={this.props.src}
          srcSm={this.props.srcSm}
          srcMd={this.props.srcMd}
          srcLg={this.props.srcLg}
          srcXlg={this.props.srcXlg}
          description={this.props.description}
          publicationYear={this.props.publicationYear}
          publisher={this.props.publisher}
          publicationLength={this.props.publicationLength}
          category={this.props.category}
          // Modal handlers
          clearViewBookModal={this.clearViewBookModal}
          viewBookModal={this.state.viewBookModal}
        />
      </div>
    );
  }
}
