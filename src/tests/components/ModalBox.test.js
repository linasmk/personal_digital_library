/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import { ModalBox } from "../../components/ModalBox";
import books from "../fixtures/books";
import { AiOutlineClose, AiOutlineCheckSquare } from "react-icons/ai";
//import { editBook } from "../../store/actionCreators";
/* ========= Code ============= */
let wrapper, dispatchEditBook;

beforeEach(() => {
  dispatchEditBook = jest.fn();
  wrapper = shallow(<ModalBox {...books[0]} />);
});

test("Should render ModalBox correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

// test("Should handle editBook", () => {
//   wrapper.find("AiOutlineCheckSquare").simulate("click");
//   expect(dispatchEditBook).toHaveBeenLastCalledWith(books[0].id, books[0]);
// });
