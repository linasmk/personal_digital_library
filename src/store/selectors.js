import filtersReducer from "./filtersReducer";

/* =================================
=========== SELECTORS ================
==================================== */
export default (books, { text, searchType, sortDirection }) => {
  return books
    .filter((book) => {
      if (searchType === "title")
        return book.title.toLowerCase().includes(text.toLowerCase());
      if (searchType === "author")
        return book.author.toLowerCase().includes(text.toLowerCase());
    })
    .sort((a, b) => {
      if (sortDirection === "ascending" && searchType === "title") {
        return a.title < b.title ? -1 : 1;
      } else if (sortDirection === "descending" && searchType === "title") {
        return a.title > b.title ? -1 : 1;
      }
      if (sortDirection === "ascending" && searchType === "author") {
        return a.author < b.author ? -1 : 1;
      } else if (sortDirection === "descending" && searchType === "author") {
        return a.author > b.author ? -1 : 1;
      }
    });
};
