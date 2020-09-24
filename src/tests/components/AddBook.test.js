import React from "react";
import { shallow } from "enzyme";
import { AddBook } from "../../components/AddBook";
import books from "../fixtures/books";

let addBook, wrapper;

beforeEach(() => {
  addBook = jest.fn();
  wrapper = shallow(<AddBook addBook={addBook} />);
});

test("Should render AddBook correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("AddBookForm").prop("onSubmit")(books[1]);
  expect(addBook).toHaveBeenLastCalledWith(books[1]);
});
