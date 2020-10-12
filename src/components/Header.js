/* ========= App Dependencies ============= */
import React from "react";
/* ========= Components ============= */
import BooksSummary from "./BooksSummary";
/* ========= Code ============= */

const Header = (props) => {
  return (
    <header>
      <h1 className="header__main_heading">{props.title}</h1>
      <BooksSummary />
    </header>
  );
};
Header.defaultProps = {
  title: "Personal Digital Library",
};
export default Header;
