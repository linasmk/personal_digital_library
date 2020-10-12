/* ============ Dependencies ============= */
import React from "react";
import Modal from "react-modal";
import { AiOutlineClose} from "react-icons/ai";
/* ============== Redux =============== */

/* ============ Components ============== */
/* =============== Code ================= */
//Modal.setAppElement("#app");
class AddBookForm extends React.Component {
  state = {
    title: this.props.book ? this.props.book.title : "",
    author: this.props.book ? this.props.book.author : "",
    description: this.props.book ? this.props.book.description : "",
    publicationYear: this.props.book ? this.props.book.publicationYear : "",
    publisher: this.props.book ? this.props.book.publisher : "",
    publicationLength: this.props.book ? this.props.book.publicationLength : "",
    category: this.props.book ? this.props.book.category : "",
    url: this.props.book ? this.props.book.url : "",
    rating: this.props.book ? this.props.book.rating : "",
    imgLink: this.props.book ? this.props.book.imgLink : "",
    error: "",
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };
  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({
      author,
    }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };
  onPublicationYearChange = (e) => {
    const publicationYear = e.target.value;
    this.setState(() => ({
      publicationYear,
    }));
  };

  onPublicationLengthChange = (e) => {
    const publicationLength = e.target.value;
    this.setState(() => ({
      publicationLength,
    }));
  };

  onPublisherChange = (e) => {
    const publisher = e.target.value;
    this.setState(() => ({
      publisher,
    }));
  };

  onUrlChange = (e) => {
    const url = e.target.value;
    this.setState(() => ({
      url,
    }));
  };
  
  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({
      category,
    }));
  };
  
  onRatingChange = (e) => {
    const rating = e.target.value;
    this.setState(() => ({
      rating,
    }));
  };
  onImgLinkChange = (e) => {
    const imgLink = e.target.value;
    this.setState(() => ({
      imgLink,
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title) {
      this.setState(() => ({
        error: "Title's name field should not stay empty!",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        publicationYear: this.state.publicationYear,
        publisher: this.state.publisher,
        publicationLength: this.state.publicationLength,
        category: this.state.category,
        url: this.state.url,
        rating: this.state.rating,
        imgLink: this.state.imgLink,
      });
      this.props.clearAddNewBookModal();
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.addNewBookModal}
        onRequestClose={this.props.clearAddNewBookModal}
        contentLabel={"Add New Book"}
        closeTimeoutMS={800}
        className="modal"
        ariaHideApp={false}
      >
      <div className="top-bar h-top-bar-modal">
        <AiOutlineClose
            className="card__btn-close h-icon-styles"
            viewBox="100 50 800 880"
            onClick={this.props.clearAddNewBookModal}
          />
      </div>
        <h2 className="addbook__heading">Add New Book</h2>
        <form className="addbook__form" onSubmit={this.onSubmit}>
          {this.state.error && (
            <p className="addbook-form__warning">{this.state.error}</p>
          )}
          <div className="addbook__form_row">
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="text"
                required
                autoComplete="off"
                value={this.state.title}
                onChange={this.onTitleChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Book Title</span>
              </label>
            </div>
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="text"
                required
                autoComplete="off"
                value={this.state.author}
                onChange={this.onAuthorChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Author</span>
              </label>
            </div>
          </div>
          <div className="addbook__form_row">
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="number"
                required
                value={this.state.publicationYear}
                onChange={this.onPublicationYearChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Publication Year</span>
              </label>
            </div>
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="number"
                required
                value={this.state.publicationLength}
                onChange={this.onPublicationLengthChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">
                  Publication Length
                </span>
              </label>
            </div>
          </div>

          <div className="addbook__form_row">
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="text"
                required
                value={this.state.publisher}
                onChange={this.onPublisherChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Publisher</span>
              </label>
            </div>
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="url"
                title="URL should match the pattern: https://.*"
                required
                pattern="https://.*"
                autoComplete="off"
                value={this.state.url}
                onChange={this.onUrlChange}
              />
              <label htmlFor="url" className="addbook__form_label">
                <span className="addbook__form_content">Link to the Book</span>
              </label>
            </div>
          </div>

          <div className="addbook__form_row">
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="text"
                required
                value={this.state.category}
                onChange={this.onCategoryChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Category</span>
              </label>
            </div>

            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="number"
                min="1"
                max="10"
                required
                value={this.state.rating}
                onChange={this.onRatingChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Rating</span>
              </label>
            </div>
          </div>
          <div className="addbook__form_row">
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="url"
                title="URL should match the pattern: https://.*"
                required
                autoComplete="on"
                value={this.state.imgLink}
                onChange={this.onImgLinkChange}
              />
              <label htmlFor="url" className="addbook__form_label">
                <span className="addbook__form_content">Image Link</span>
              </label>
            </div>
          </div>
          <div className="addbook__form_row">
            <div className="addbook__form_column-textarea">
              <textarea
                className="addbook__form_textarea"
                type="text"
                required
                maxLength="3000"
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
              <label htmlFor="title" className="addbook__form_label-textarea">
                <span className="addbook__form_content-textarea">
                  Book Description
                </span>
              </label>
            </div>
          </div>
          <div className="modal__button-bottom_wrapper">
            <button className="modal__button-bottom" type="submit">
              Add Book
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default AddBookForm;
