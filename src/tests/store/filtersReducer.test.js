import filtersReducer from "../../store/filtersReducer";

test("Should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    searchType: "title",
    sortDirection: "ascending",
  });
});
test("Should set searchType to author", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_SEARCH_TYPE" });
  expect((state.searchType = "author")).toBe("author");
});

test("Should set sortDirection to descending", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DIRECTION" });
  expect((state.sortDirection = "descending")).toBe("descending");
});

test("Should set sortBy to title", () => {
  const currentState = {
    text: "",
    searchType: "author",
    sortDirection: "ascending",
  };
  const action = { type: "SORT_BY_SEARCH_TYPE" };
  const state = filtersReducer(currentState, action);
  expect((state.searchType = "title")).toBe("title");
});

test("Should set sortDirection to ascending", () => {
  const currentState = {
    text: "",
    searchType: "author",
    sortDirection: "descending",
  };
  const action = { type: "SORT_BY_DIRECTION" };
  const state = filtersReducer(currentState, action);
  expect((state.sortDirection = "ascending")).toBe("ascending");
});

test("Should set text filter", () => {
  const text = "Text";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});
