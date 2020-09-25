/* ===== App Dependencies ===== */
import React from "react";
import { shallow } from "enzyme";
import { filters, altFilters } from "../fixtures/filters";
/* ========== Components ========== */

import { SearchBlock } from "../../components/SearchBlock";

/* ========== Code ========== */
let setTextFilter, sortBySearchType, sortByDirection, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortBySearchType = jest.fn();
  sortByDirection = jest.fn();
  wrapper = shallow(
    <SearchBlock
      filters={filters}
      setTextFilter={setTextFilter}
      sortBySearchType={sortBySearchType}
      sortByDirection={sortByDirection}
    />
  );
});

test("should render SearchBlock correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render SearchBlock with alternative data correctly", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "Dan Ariely";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
