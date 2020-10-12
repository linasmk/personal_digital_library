/* ========= App Dependencies ============= */
import React from "react";
import { connect } from "react-redux";
/* ========== Redux ========== */
import getVisibleBooks from "../store/selectors";

/* ========= Code ============= */
export const BooksSummary = ({ booksCount }) => {
  return (
    <section className="header__summary_block">
      <p className="header__summary_p">
        Filtered books:{" "}
        <span className="header__summary_output">{booksCount}</span>
      </p>
    </section>
  );
};

const mapStateToProps = (state) => {
  const visibleBooks = getVisibleBooks(state.books, state.filters);
  return {
    booksCount: visibleBooks.length,
  };
};

export default connect(mapStateToProps)(BooksSummary);
