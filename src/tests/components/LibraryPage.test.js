import React from "react";
import { shallow } from "enzyme";
import LibraryPage from "../../components/pages/LibraryPage";

test("Should LibraryPage render corectly", () => {
  const wrapper = shallow(<LibraryPage />);
  expect(wrapper).toMatchSnapshot();
});
