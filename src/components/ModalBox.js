import React from "react";
import BookPicture from "./BookPicture";
import Modal from "react-modal";
import StarRatingModal from "./StarRating_Modal";
Modal.setAppElement("#app");

const ModalBox = ({
  viewBookModal,
  clearViewBookModal,
  title,
  author,
  url,
  src,
  srcSm,
  srcMd,
  srcLg,
  srcXlg,
  description,
  publicationYear,
  publisher,
  publicationLength,
  category,
}) => (
  <Modal
    isOpen={viewBookModal}
    onRequestClose={clearViewBookModal}
    contentLabel={title}
    closeTimeoutMS={800}
    className="modal"
  >
    <h2 className="modal__title">{title}</h2>
    <h3 className="modal__author">
      <span>by </span>
      {author}
    </h3>
    <section className="modal__details_block">
      <section className="details__block_description">
        <h3 className="description__heading">Description:</h3>
        <p className="description__p">{description}</p>
      </section>

      <a className="details__block_link" href={url} target="_blank">
        <BookPicture
          src={src}
          srcSm={srcSm}
          srcMd={srcMd}
          srcLg={srcLg}
          srcXlg={srcXlg}
        />
      </a>
      <div className="details__block_table-wrapper">
        <table className="modal__table">
          <tbody>
            <tr>
              <td>Publication Year</td>
              <td>
                <strong>{publicationYear}</strong>
              </td>
            </tr>
            <tr>
              <td>Publisher</td>
              <td>
                <strong>{publisher}</strong>
              </td>
            </tr>
            <tr>
              <td>Publication Length</td>
              <td>
                <strong>{publicationLength} pages</strong>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <strong>{category}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <StarRatingModal />
    </section>
    <button className="modal__button-top" onClick={clearViewBookModal}>
      <span>&times;</span>
    </button>
    <div className="modal__button-bottom_wrapper">
      <button className="modal__button-bottom" onClick={clearViewBookModal}>
        Okay
      </button>
    </div>
  </Modal>
);

export default ModalBox;
