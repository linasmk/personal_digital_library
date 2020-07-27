/* ========== Dependencies ============ */
import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineClose, AiOutlineCheckSquare } from "react-icons/ai";
/* ========== Redux ============= */
import { connect } from "react-redux";
import { editBook } from "../store/actionCreators";
/* ========== Components ============ */
import BookPicture from "./BookPicture";
import Modal from "react-modal";
import StarRating from "./StarRating";
import { method } from "lodash";

/* ========== Code ============ */
Modal.setAppElement("#app");

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.book ? props.book.id : "",
      title: props.book ? props.book.title : "",
      author: props.book ? props.book.author : "",
      description: props.book ? props.description : "",
      publicationYear: props.book ? props.book.publicationYear : "",
      publisher: props.book ? props.book.publisher : "",
      publicationLength: props.book ? props.book.publicationLength : "",
      category: props.book ? props.book.category : "",
      rating: props.book ? props.book.rating : "",
      src: props.book ? props.book.src : "",
      isContentInEditMode: false,
    };
  }

  toggleEditMode = () => {
    this.setState((prevState) => ({
      isContentInEditMode: !prevState.isContentInEditMode,
    }));
  };
  dispatchEditBook = () => {
    this.setState((book) => {
      this.props.dispatch(editBook(this.state.id, book));
    }),
      this.toggleEditMode();
  };
  onTitleChange = (e) => {
    const title = e.target.textContent;
    this.setState(() => ({
      title,
    }));
  };
  onAuthorChange = (e) => {
    const author = e.target.textContent;
    this.setState(() => ({
      author,
    }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.textContent;
    this.setState(() => ({
      description,
    }));
  };
  onPublicationYearChange = (e) => {
    const publicationYear = e.target.textContent;
    this.setState(() => ({
      publicationYear,
    }));
  };
  onPublisherChange = (e) => {
    const publisher = e.target.textContent;
    this.setState(() => ({
      publisher,
    }));
  };
  onPublicationLengthChange = (e) => {
    const publicationLength = e.target.textContent;
    this.setState(() => ({
      publicationLength,
    }));
  };
  onCategoryChange = (e) => {
    const category = e.target.textContent;
    this.setState(() => ({
      category,
    }));
  };

  render() {
    return (
      <Modal
        isOpen={this.props.viewBookModal}
        onRequestClose={this.props.clearViewBookModal}
        contentLabel={this.props.title}
        closeTimeoutMS={800}
        className="modal"
        key={this.state.id}
      >
        <div className="top-bar h-top-bar-modal">
          {this.state.isContentInEditMode ? (
            <AiOutlineCheckSquare
              className="h-icon-styles"
              viewBox="100 0 900 980"
              /*viewBox attribute is a list of four numbers: 
            min-x, min-y, width and height */
              onClick={this.dispatchEditBook}
            />
          ) : (
            <FiEdit
              className="card__btn-edit h-icon-styles"
              onClick={this.toggleEditMode}
            />
          )}

          <AiOutlineClose
            className="card__btn-close h-icon-styles"
            viewBox="100 50 800 880"
            onClick={this.props.clearViewBookModal}
          />
        </div>
        <h2
          className="modal__title"
          contentEditable={this.state.isContentInEditMode}
          suppressContentEditableWarning
          onBlur={this.onTitleChange}
        >
          {this.state.title}
        </h2>
        <h3 className="modal__author">
          <span>by </span>
          <span
            contentEditable={this.state.isContentInEditMode}
            suppressContentEditableWarning
            onBlur={this.onAuthorChange}
          >
            {this.state.author}
          </span>
        </h3>
        <section className="modal__details_block">
          <section className="details__block_description">
            <h3 className="description__heading">Description:</h3>
            <p
              className="description__p"
              contentEditable={this.state.isContentInEditMode}
              suppressContentEditableWarning
              onBlur={this.onDescriptionChange}
            >
              {this.state.description}
            </p>
          </section>

          <a
            className="details__block_link"
            href={this.state.url}
            target="_blank"
          >
            <BookPicture
              src={this.state.src}
              srcSm={this.state.srcSm}
              srcMd={this.state.srcMd}
              srcLg={this.state.srcLg}
              srcXlg={this.state.srcXlg}
            />
          </a>
          <div className="details__block_table-wrapper">
            <table className="modal__table">
              <tbody>
                <tr>
                  <td>Publication Year</td>
                  <td
                    contentEditable={this.state.isContentInEditMode}
                    suppressContentEditableWarning
                    onBlur={this.onPublicationYearChange}
                  >
                    <strong>{this.state.publicationYear}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td
                    contentEditable={this.state.isContentInEditMode}
                    suppressContentEditableWarning
                    onBlur={this.onPublisherChange}
                  >
                    <strong>{this.state.publisher}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Publication Length</td>
                  <td>
                    <strong>
                      <span
                        contentEditable={this.state.isContentInEditMode}
                        suppressContentEditableWarning
                        onBlur={this.onPublicationLengthChange}
                      >
                        {this.state.publicationLength}
                      </span>
                      &nbsp;pages
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td
                    contentEditable={this.state.isContentInEditMode}
                    suppressContentEditableWarning
                    onBlur={this.onCategoryChange}
                  >
                    <strong>{this.state.category}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <StarRating
            // handleStarRating={this.handleStarRating}
            bookRating={this.state.rating}
            bookId={this.state.id}
            starRatingUl="star-rating__ul--modal"
            star="star--modal"
            selected="selected"
            stroke="rgb(255, 152, 0)"
            strokeWidth={1}
          />
        </section>

        <div className="modal__button-bottom_wrapper">
          <button
            className="modal__button-bottom"
            onClick={this.props.clearViewBookModal}
          >
            Okay
          </button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    book: state.books.find((book) => book.id === props.id),
  };
};

export default connect(mapStateToProps)(ModalBox);

// /* ========== Code ============ */

// Modal.setAppElement("#app");

// const ModalBox = ({
//   //Handlers
//   editBookInfo,
//   viewBookModal,
//   clearViewBookModal,
//   //Props
//   book,
//   id,
//   title,
//   author,
//   description,
//   publicationYear,
//   publisher,
//   publicationLength,
//   category,
//   rating,
//   url,
//   imgLink,
//   src,
//   srcSm,
//   srcMd,
//   srcLg,
//   srcXlg,
// }) => {
//   // State
//   const [isContentInEditMode, setEditMode] = useState(false);
//   const [bookTitle, setTitle] = useState(title ? title : "");
//   const [bookAuthor, setAuthor] = useState(author ? author : "");
//   const [bookDescription, setDescription] = useState(
//     description ? description : ""
//   );
//   const [bookPublicationYear, setPublicationYear] = useState(
//     publicationYear ? publicationYear : ""
//   );
//   const [bookPublisher, setPublisher] = useState(publisher ? publisher : "");
//   const [bookPublicationLength, setPublicationLength] = useState(
//     publicationLength ? publicationLength : ""
//   );
//   const [bookCategory, setCategory] = useState(category ? category : "");

//   // Event handlers
//   const editBook =
//   const handleEditMode = () => setEditMode(!isContentInEditMode);
//   const onTitleChange = (e) => setTitle(e.target.textContent);
//   const onAuthorChange = (e) => setAuthor(e.target.textContent);
//   const onDescriptionChange = (e) => setDescription(e.target.textContent);
//   const onPublicationYearChange = (e) =>
//     setPublicationYear(e.target.textContent);
//   const onPublisherChange = (e) => setPublisher(e.target.textContent);
//   const onPublicationLengthChange = (e) =>
//     setPublicationLength(e.target.textContent);
//   const onCategoryChange = (e) => setCategory(e.target.textContent);

//   return (
//     <Modal
//       isOpen={true /*viewBookModal*/}
//       onRequestClose={clearViewBookModal}
//       contentLabel={title}
//       closeTimeoutMS={800}
//       className="modal"
//     >
//       <div className="top-bar h-top-bar-modal">
//         {isContentInEditMode ? (
//           <AiOutlineCheckSquare
//             className="h-icon-styles"
//             viewBox="100 0 900 980"
//             /*viewBox attribute is a list of four numbers:
//             min-x, min-y, width and height */
//             onClick={handleEditMode}
//           />
//         ) : (
//             <FiEdit
//               className="card__btn-edit h-icon-styles"
//               onClick={handleEditMode}
//             />
//           )}

//         <AiOutlineClose
//           className="card__btn-close h-icon-styles"
//           viewBox="100 50 800 880"
//           onClick={clearViewBookModal}
//         />
//       </div>
//       <h2
//         className="modal__title"
//         contentEditable={isContentInEditMode}
//         suppressContentEditableWarning
//         onBlur={onTitleChange}
//       >
//         {title}
//       </h2>
//       <h3 className="modal__author">
//         <span>by </span>
//         <span
//           contentEditable={isContentInEditMode}
//           suppressContentEditableWarning
//           onBlur={onAuthorChange}
//         >
//           {author}
//         </span>
//       </h3>
//       <section className="modal__details_block">
//         <section className="details__block_description">
//           <h3 className="description__heading">Description:</h3>
//           <p
//             className="description__p"
//             contentEditable={isContentInEditMode}
//             suppressContentEditableWarning
//             onBlur={onDescriptionChange}
//           >
//             {description}
//           </p>
//         </section>

//         <a className="details__block_link" href={url} target="_blank">
//           <BookPicture
//             src={src}
//             srcSm={srcSm}
//             srcMd={srcMd}
//             srcLg={srcLg}
//             srcXlg={srcXlg}
//           />
//         </a>
//         <div className="details__block_table-wrapper">
//           <table className="modal__table">
//             <tbody>
//               <tr>
//                 <td>Publication Year</td>
//                 <td
//                   contentEditable={isContentInEditMode}
//                   suppressContentEditableWarning
//                   onBlur={onPublicationYearChange}
//                 >
//                   <strong>{publicationYear}</strong>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Publisher</td>
//                 <td
//                   contentEditable={isContentInEditMode}
//                   suppressContentEditableWarning
//                   onBlur={onPublisherChange}
//                 >
//                   <strong>{publisher}</strong>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Publication Length</td>
//                 <td>
//                   <strong>
//                     <span
//                       contentEditable={isContentInEditMode}
//                       suppressContentEditableWarning
//                       onBlur={onPublicationLengthChange}
//                     >
//                       {publicationLength}
//                     </span>
//                     &nbsp;pages
//                   </strong>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Category</td>
//                 <td
//                   contentEditable={isContentInEditMode}
//                   suppressContentEditableWarning
//                   onBlur={onCategoryChange}
//                 >
//                   <strong>{category}</strong>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <StarRatingModal />
//       </section>

//       <div className="modal__button-bottom_wrapper">
//         <button className="modal__button-bottom" onClick={clearViewBookModal}>
//           Okay
//         </button>
//       </div>
//     </Modal>
//   );
// };
// const mapStateToProps = (state, { id }) => {
//   return {
//     book: state.books.find(
//       (book) => book.id === id
//     ),
//   };
// };

// export default connect(mapStateToProps)(ModalBox);
