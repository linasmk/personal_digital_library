import React from "react";
import { shallow } from "enzyme";
import { AddBook } from "../../components/AddBook";
import books from "../fixtures/books";

let onSubmit, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  wrapper = shallow(<AddBook onSubmit={onSubmit} />);
});

test("Should render AddBook correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("AddBookForm").prop("onSubmit")(books[1]);
  expect(onSubmit).toHaveBeenLastCalledWith(books[1]);
});
