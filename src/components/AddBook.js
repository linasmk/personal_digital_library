import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import AddBookForm from "./AddBookForm";

export default class AddBook extends Component {
  //There cannot be no 'this' keyword before props in functional component.
  state = {
    addNewBookModal: undefined,
  };
  handleAddNewBookModalPopUp = () => {
    this.setState(() => ({
      addNewBookModal: true,
    }));
  };
  clearAddNewBookModal = () => {
    this.setState(() => ({
      addNewBookModal: undefined,
    }));
  };
  render() {
    return (
      <section className="addbook__wraper">
        <button
          className="button__addbook"
          onClick={this.handleAddNewBookModalPopUp.bind(this)}
        >
          <FaPlus className="button__addbook_icon" />
        </button>
        <AddBookForm
          clearAddNewBookModal={this.clearAddNewBookModal}
          addNewBookModal={this.state.addNewBookModal}
          addNewBookDetails={this.props.addNewBookDetails}
        />
      </section>
    );
  }
}
