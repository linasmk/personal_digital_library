/* ============ Dependencies ============= */
import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
/* ============== Redux =============== */
import { connect } from "react-redux";
import { addBook } from "../store/actionCreators";
/* ============ Components ============== */
import AddBookForm from "./AddBookForm";

/* =============== Code ================= */

class AddBook extends Component {
  //There cannot be 'this' keyword before props in functional component.
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
          onSubmit={(book) => {
            this.props.dispatch(addBook(book));
          }}
          clearAddNewBookModal={this.clearAddNewBookModal}
          addNewBookModal={this.state.addNewBookModal}
        />
      </section>
    );
  }
}
export default connect()(AddBook);
