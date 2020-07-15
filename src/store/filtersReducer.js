/* ============== Dependencies ================ */

/* =================================================
==============  Filters REDUCER ======================
================================================= */
const filtersReducerDefaultState = {
  title: "",
  sortBy: "patient's name",
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
