import getVisibleBooks from "../../store/selectors";
import books from "./fixtures/books";

test("Should filter by text value", () => {
  const filters = {
    text: "Fast",
    searchType: "title",
    sortDirection: "ascending",
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[2]]);
});

test("Should sortBy title,scending", () => {
  const filters = {
    text: "",
    searchType: "title",
    sortDirection: "ascending",
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[1], books[2], books[0]]);
});

test("Should sortBy author, ascending", () => {
  const filters = {
    text: "",
    searchType: "author",
    sortDirection: "ascending",
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[2], books[1], books[0]]);
});

test("Should sortBy by title: descending", () => {
  const filters = {
    text: "",
    searchType: "title",
    sortDirection: "descending",
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[0], books[2], books[1]]);
});

test("Should sortBy by author: descending", () => {
  const filters = {
    text: "",
    searchType: "author",
    sortDirection: "descending",
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[0], books[1], books[2]]);
});
