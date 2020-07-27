/* ============ Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
import AddBook from "../components/AddBook";
/* ============================================
=========== Action Creators ================
============================================ */
/* ============== Books Actions ================ */
// ADD_BOOK
export const addBook = ({
  title = "",
  author = "",
  description = "",
  publicationYear = 0,
  publisher = "",
  publicationLength = 0,
  category = "",
  rating = 0,
  url = "",
  imgLink = "",
} = {}) => ({
  type: "ADD_BOOK",
  book: {
    id: uuidv4(),
    title: title,
    author: author,
    description: description,
    publicationYear: publicationYear,
    publisher: publisher,
    publicationLength: publicationLength,
    category: category,
    rating: rating,
    url: url,
    imgLink: imgLink,
    src: imgLink,
    srcSm: imgLink,
    srcMd: imgLink,
    srcLg: imgLink,
    srcXlg: imgLink,
  },
});
// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
  type: "REMOVE_BOOK",
  id,
});
// EDIT_BOOK
export const editBook = (id, updates) => ({
  type: "EDIT_BOOK",
  id,
  updates,
});

/* ============== Filters Actions ================ */
//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
//"SORT_BY_SEARCH_TYPE"
export const sortBySearchType = (searchType = "") => ({
  type: "SORT_BY_SEARCH_TYPE",
  searchType,
});
//"SORT_BY_DIRECTION"
export const sortByDirection = (sortDirection = "") => ({
  type: "SORT_BY_DIRECTION",
  sortDirection,
});
