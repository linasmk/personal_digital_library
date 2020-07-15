/* ============ Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
import AddBook from "../components/AddBook";
/* ============================================
=========== Action Creators ================
============================================ */

// ADD_BOOK
export const AddBook = ({
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
  src = "",
  srcSm = "",
  srcMd = "",
  srcLg = "",
  srcXlg = "",
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
    src: src,
    srcSm: srcSm,
    srcMd: srcMd,
    srcLg: srcLg,
    srcXlg: srcXlg,
  },
});
// REMOVE_BOOK
