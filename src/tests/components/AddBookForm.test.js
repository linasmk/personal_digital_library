/* ===== App Dependencies ===== */
import React from "react";
import { shallow } from "enzyme";
import books from "../fixtures/books";
/* ========== Components ========== */
import AddBookForm from "../../components/AddBookForm";

/* ========== Code ========== */
test("Should render AddBookForm correctly", () => {
  const wrapper = shallow(<AddBookForm />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render AddBookForm with books data", () => {
  const wrapper = shallow(<AddBookForm book={books[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<AddBookForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("Should set title on input change", () => {
  const value = "New title";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("title")).toBe(value);
});

test("Should set author on input change", () => {
  const value = "New author";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("author")).toBe(value);
});

test("Should set publicationYear on input change", () => {
  const value = "New publication year";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(2).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("publicationYear")).toBe(value);
});

test("Should set publicationLength on input change", () => {
  const value = "New publication length";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(3).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("publicationLength")).toBe(value);
});

test("Should set publisher on input change", () => {
  const value = "New publisher";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(4).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("publisher")).toBe(value);
});

test("Should set url on input change", () => {
  const value = "New url";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(5).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("url")).toBe(value);
});

test("Should set category on input change", () => {
  const value = "New category";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(6).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("category")).toBe(value);
});

test("Should set rating on input change", () => {
  const value = "New rating";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(7).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("rating")).toBe(value);
});

test("Should set imgLink on input change", () => {
  const value = "New imgLink";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("input").at(8).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("imgLink")).toBe(value);
});

test("Should set description on textarea change", () => {
  const value = "New description";
  const wrapper = shallow(<AddBookForm />);
  wrapper.find("textarea").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("Should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const clearAddNewBookModalSpy = jest.fn();
  const wrapper = shallow(
    <AddBookForm
      book={books[0]}
      onSubmit={onSubmitSpy}
      clearAddNewBookModal={clearAddNewBookModalSpy}
    />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: books[0].title,
    author: books[0].author,
  });
  expect(clearAddNewBookModalSpy).toBe("");
});

// test("Should call onSubmit prop for valid form submission", () => {
//   const onSubmitSpy = jest.fn();
//   const clearAddNewBookModalSpy = jest.fn();
//   onSubmitSpy();
//   clearAddNewBookModalSpy();
// });
