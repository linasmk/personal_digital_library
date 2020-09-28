import { iteratee } from "lodash";
import selectBooksTotal from "../../store/selectors-total";
import books from "../fixtures/books";

it("returns 0, if no books to show", () => {
  const res = selectBooksTotal([]);
  expect(res).toBe(0);
});

it("correctly adds up 1 book", () => {
  const res = selectBooksTotal([books[0]]);
  expect(res).toBe(1);
});

it("correctly adds up multiple books", () => {
  const res = selectBooksTotal(books);
  expect(res).toBe(3);
});
