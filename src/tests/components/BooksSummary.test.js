/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========== Components ========== */
import { BooksSummary } from "../../components/BooksSummary";

it("renders BooksSummary correctly with 1 book", () => {
  const wrapper = shallow(<BooksSummary booksCount={1} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders booksSummary correctly with several books", () => {
  const wrapper = shallow(<BooksSummary booksCount={5} />);
  expect(wrapper).toMatchSnapshot();
});
