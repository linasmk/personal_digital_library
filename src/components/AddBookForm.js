import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#app");

const AddBookForm = (props) => (
  <Modal
    isOpen={props.formDisplay}
    contentLabel={"Add New Book"}
    closeTimeoutMS={800}
    className="addbook__contactform"
  >
    <form>
      <input title="Book Title" type="text" />
    </form>
  </Modal>
);

export default AddBookForm;
