import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/pages/NotFoundPage";

test("Should NotFoundPage render corectly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
