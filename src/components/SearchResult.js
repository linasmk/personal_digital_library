import React from "react";
import BookPicture from "./BookPicture";
import ModalBox from "./ModalBox";
import StarRating from "./StarRating";

export default class SearchResult extends React.Component {
  state = {
    selectedOption: undefined,
  };
  handleModalPopUp = () => {
    this.setState(() => ({
      selectedOption: true,
    }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
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
          </section>
          <button
            className="view__more"
            onClick={this.handleModalPopUp.bind(this)}
          >
            View More
          </button>
        </article>
        <ModalBox
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
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
