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
    default:
      return state;
  }
};
