import booksReducer from "../../store/booksReducer";
import library from "../../data/library";
import books from "./fixtures/books";

test("Should set default state", () => {
  const state = booksReducer(library, { type: "@@INIT" });
  expect(state).toEqual(library);
});

test("Should remove books by id", () => {
  const action = {
    type: "REMOVE_BOOK",
    id: books[1].id,
  };
  const state = booksReducer(books, action);
  expect(state).toEqual([books[0], books[2]]);
});

test("Should not remove books, if id not found", () => {
  const action = {
    type: "REMOVE_BOOK",
    id: "-1",
  };
  const state = booksReducer(books, action);
  expect(state).toEqual(books);
});

test("Should add an appointment", () => {
  const book = {
    id: 105,
    title: "Book Name",
    author: "Book Author",
    description: "This book is alright",
    publicationYear: 2000,
    publisher: "Random Publisher",
    publicationLength: 255,
    category: "Science",
    rating: "8",
    url: "http://www.booklink.book",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/41RcuRuB5mL._SX317_BO1,204,203,200_.jpg",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41RcuRuB5mL._SX317_BO1,204,203,200_.jpg",
    srcSm:
      "https://images-na.ssl-images-amazon.com/images/I/41RcuRuB5mL._SX317_BO1,204,203,200_.jpg",
    srcMd:
      "https://images-na.ssl-images-amazon.com/images/I/41RcuRuB5mL._SX317_BO1,204,203,200_.jpg",
    srcLg:
      "https://images-na.ssl-images-amazon.com/images/I/41RcuRuB5mL._SX317_BO1,204,203,200_.jpg",
    srcXlg:
      "https://images-na.ssl-images-amazon.com/images/I/41RcuRuB5mL._SX317_BO1,204,203,200_.jpg",
  };
  const action = {
    type: "ADD_BOOK",
    book,
  };
  const state = booksReducer(books, action);
  expect(state).toEqual([...books, book]);
});

test("Should edit a book", () => {
  const title = "Why Penguins Get Ulcers";
  const action = {
    type: "EDIT_BOOK",
    id: books[0].id,
    updates: {
      title,
    },
  };
  const state = booksReducer(books, action);
  expect(state[0].title).toBe(title);
});

test("Should not edit a book, if book not found", () => {
  const title = 355;
  const action = {
    type: "EDIT_BOOK",
    id: "-1",
    updates: {
      title,
    },
  };
  const state = booksReducer(books, action);
  expect(state[0].title).toBe(state[0].title);
});
