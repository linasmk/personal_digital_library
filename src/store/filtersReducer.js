/* ============== Dependencies ================ */

/* =================================================
==============  Filters REDUCER ======================
================================================= */
const filtersReducerDefaultState = {
  text: "",
  searchType: "title",
  sortDirection: "ascending",
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_SEARCH_TYPE":
      return {
        ...state,
        searchType: action.searchType,
      };
    case "SORT_BY_DIRECTION":
      return {
        ...state,
        sortDirection: action.sortDirection,
      };
    default:
      return state;
  }
};
