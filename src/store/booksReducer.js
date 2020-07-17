/* ============== Dependencies ================ */
import libraryData from "../data/Library.js";

/* =================================================
==============  BOOKS REDUCER ======================
================================================= */
const booksReducerDefaultState = libraryData;

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "REMOVE_BOOK":
      return state.filter((book) => {
        return book.id !== action.id;
      });
    case "EDIT_BOOK":
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            ...action.updates,
          };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};
