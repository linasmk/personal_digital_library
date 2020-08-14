import React from "react";
import { shallow } from "enzyme";
import { SearchResult } from "../../components/SearchResult";
import books from "../fixtures/books";
import { wrap } from "lodash";

test("Should render books list with books", () => {
  const wrapper = shallow(<SearchResult books={books} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render SearchResult with empty message", () => {
  const wrapper = shallow(<SearchResult books={[]} />);
  expect(wrapper).toMatchSnapshot();
});
