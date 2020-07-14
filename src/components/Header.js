import React from "react";
const Header = props => {
	return (<header>
      <h1 className="main-heading">{props.title}</h1>
      <h2>{props.handleCopyrightDate}</h2>
    </header>);
};
Header.defaultProps = {
	title: "Personal Digital Library"
};
export default Header;