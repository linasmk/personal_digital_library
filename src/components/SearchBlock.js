import React from "react";
import { FaCaretDown } from "react-icons/fa";
export default class SearchBlock extends React.Component {
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
          <div className="search__query-dropdown">
            <button className="search__query-dropdown--toggle">
              Search by
              <FaCaretDown className="dropdown__toggle_caret" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}
