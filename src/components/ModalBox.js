import React from "react";
import BookPicture from "./BookPicture";
import Modal from "react-modal";
import StarRatingModal from "./StarRating_Modal";
Modal.setAppElement("#app");

const ModalBox = ({
  //Handlers
  editBookInfo,
  viewBookModal,
  clearViewBookModal,
  //Props
  id,
  title,
  author,
  description,
  publicationYear,
  publisher,
  publicationLength,
  category,
  rating,
  url,
  imgLink,
  src,
  srcSm,
  srcMd,
  srcLg,
  srcXlg,
}) => (
  <Modal
    isOpen={viewBookModal}
    onRequestClose={clearViewBookModal}
    contentLabel={title}
    closeTimeoutMS={800}
    className="modal"
  >
    <h2
      className="modal__title"
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => editBookInfo("title", e.target.innerText, id)}
    >
      {title}
    </h2>
    <h3 className="modal__author">
      <span>by </span>
      <span
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => editBookInfo("author", e.target.innerText, id)}
      >
        {author}
      </span>
    </h3>
    <section className="modal__details_block">
      <section className="details__block_description">
        <h3 className="description__heading">Description:</h3>
        <p
          className="description__p"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => editBookInfo("description", e.target.innerText, id)}
        >
          {description}
        </p>
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
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  editBookInfo("publicationYear", e.target.innerText, id)
                }
              >
                <strong>{publicationYear}</strong>
              </td>
            </tr>
            <tr>
              <td>Publisher</td>
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  editBookInfo("publisher", e.target.innerText, id)
                }
              >
                <strong>{publisher}</strong>
              </td>
            </tr>
            <tr>
              <td>Publication Length</td>
              <td>
                <strong>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      editBookInfo("publicationLength", e.target.innerText, id)
                    }
                  >
                    {publicationLength}
                  </span>
                  &nbsp;pages
                </strong>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editBookInfo("category", e.target.innerText, id)}
              >
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
