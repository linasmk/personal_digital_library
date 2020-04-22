import React from "react";
import { FaCaretDown } from "react-icons/fa";
export default class SearchBlock extends React.Component {
  state = {
    setActiveState: false,
  };
  toggleAccordion = (e) => {
    if (e.target) {
      this.setState(() => ({
        setActiveState: !this.state.setActiveState,
      }));
    }
  };
  render() {
    return (
      <section className="search__block">
        <div className="search__query">
          <input
            className="search__query-input"
            type="text"
            placeholder="Search for books"
            value={this.props.search}
            onChange={this.props.updateSearch}
          />
          <nav className="search__query-dropdown">
            <button
              //https://codepen.io/LinasYesterday/pen/ExVKxzM
              className="search__query-dropdown--toggle"
              onClick={this.toggleAccordion.bind(this)}
            >
              Sort by
              <FaCaretDown className="dropdown__toggle_caret" />
            </button>
            <ul
              className={
                "search__query-dropdown--slider" +
                " " +
                (this.state.setActiveState === true ? "active-accordion" : "")
              }
            >
              <li className="search__query-dropdown--item">
                <a className="search__query-dropdown--btn" href="#">
                  Title
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a className="search__query-dropdown--btn" href="#">
                  Author
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a className="search__query-dropdown--btn" href="#">
                  Category
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a className="search__query-dropdown--btn" href="#">
                  Year
                </a>
              </li>

              <div className="dropdown-divider"></div>
              <li className="search__query-dropdown--item">
                <a className="search__query-dropdown--btn" href="#">
                  Ascending
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a className="search__query-dropdown--btn" href="#">
                  Descending
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
