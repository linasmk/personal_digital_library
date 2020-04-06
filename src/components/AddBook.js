import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import AddBookForm from "./AddBookForm";

export default class AddBook extends Component {
  state = {
    formDisplay: undefined,
  };
  handleAddBookFormPopUp = () => {
    this.setState(() => ({
      formDisplay: true,
    }));
  };
  render() {
    return (
      <section className="addbook__wraper">
        <button
          className="button__addbook"
          onClick={this.handleAddBookFormPopUp.bind(this)}
        >
          <FaPlus className="button__addbook_icon" />
        </button>
        <AddBookForm formDisplay={this.state.formDisplay} />
      </section>
    );
  }
}
