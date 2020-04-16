import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#app");

export default class AddBookForm extends React.Component {
  state = {
    title: "",
    author: "",
    publicationYear: "",
    publicationLength: "",
    publisher: "",
    url: "",
    category: "",
    rating: "",
    src: "",
    description: "",
  };
  handleAddBookFormChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleAddBookFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
    let tempBook = {
      title: this.state.title,
      author: this.state.author,
      publicationYear: this.state.publicationYear,
      publicationLength: this.state.publicationLength,
      publisher: this.state.publisher,
      url: this.state.url,
      category: this.state.category,
      rating: this.state.rating,
      src: this.state.src,
      description: this.state.description,
    };
    this.props.addNewBookDetails(tempBook);
    this.setState(() => ({
      title: "",
      author: "",
      publicationYear: "",
      publicationLength: "",
      publisher: "",
      url: "",
      category: "",
      rating: "",
      src: "",
      description: "",
    }));
    this.props.clearAddNewBookModal();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.addNewBookModal}
        onRequestClose={this.props.clearAddNewBookModal}
        contentLabel={"Add New Book"}
        closeTimeoutMS={800}
        className="modal"
      >
        <h2>Add New Book</h2>
        <form className="addbook__form" onSubmit={this.handleAddBookFormSubmit}>
          <div className="addbook__form_row">
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="text"
                name="title"
                required
                autoComplete="off"
                value={this.state.title}
                onChange={this.handleAddBookFormChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Book Title</span>
              </label>
            </div>
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="text"
                name="author"
                required
                autoComplete="off"
                value={this.state.author}
                onChange={this.handleAddBookFormChange}
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
                name="publicationYear"
                required
                value={this.state.publicationYear}
                onChange={this.handleAddBookFormChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Publication Year</span>
              </label>
            </div>
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="number"
                name="publicationLength"
                required
                value={this.state.publicationLength}
                onChange={this.handleAddBookFormChange}
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
                name="publisher"
                required
                value={this.state.publisher}
                onChange={this.handleAddBookFormChange}
              />
              <label htmlFor="title" className="addbook__form_label">
                <span className="addbook__form_content">Publisher</span>
              </label>
            </div>
            <div className="addbook__form_column">
              <input
                className="addbook__form_input"
                type="url"
                name="url"
                title="URL should match the pattern: https://.*"
                required
                pattern="https://.*"
                autoComplete="off"
                value={this.state.url}
                onChange={this.handleAddBookFormChange}
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
                name="category"
                required
                value={this.state.category}
                onChange={this.handleAddBookFormChange}
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
                name="rating"
                required
                value={this.state.rating}
                onChange={this.handleAddBookFormChange}
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
                name="src"
                title="URL should match the pattern: https://.*"
                required
                autoComplete="on"
                value={this.state.src}
                onChange={this.handleAddBookFormChange}
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
                name="description"
                required
                maxLength="3000"
                value={this.state.description}
                onChange={this.handleAddBookFormChange}
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
        <button
          className="modal__button-top"
          onClick={this.props.clearAddNewBookModal}
        >
          <span>&times;</span>
        </button>
      </Modal>
    );
  }
}
