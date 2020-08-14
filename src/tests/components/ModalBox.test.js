/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import { ModalBox } from "../../components/ModalBox";
import books from "../fixtures/books";
/* ========= Code ============= */
test("Should render ModalBox correctly", () => {
  const wrapper = shallow(<ModalBox {...books[0]} />);
  expect(wrapper).toMatchSnapshot();
});
