
/* ========== Dependencies ============ */
import React from "react";
import { FaCaretDown } from "react-icons/fa";

/* ========== Redux ============= */
import { connect } from "react-redux";
import {
  setTextFilter,
  sortBySearchType,
  sortByDirection,
} from "../store/actionCreators";

class SearchBlock extends React.Component {
  state = {
    setActiveState: false,
    sortBy: "title",
    sortDirection: "ascending",
  };
  toggleAccordion = (e) => {
    this.setState(() => ({
      setActiveState: !this.state.setActiveState,
    }));
  };
  changeSearchSettings = (sortBy, sortDirection) => {
    this.setState({
      sortBy: sortBy,
      sortDirection: sortDirection,
    });
    this.handleSortBySearchType(sortBy, sortDirection);
  };
  handleSortBySearchType = (searchType, sortDirection) => {
    this.setState(() => {
      this.props.dispatch(sortBySearchType(searchType));
      this.props.dispatch(sortByDirection(sortDirection));
    });
  };

  render() {
    return (
      <section className="search-block">
        <div className="search__query">
          <input
            className="search__query-input"
            type="text"
            placeholder="Search for books"
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
          <nav className="search__query-dropdown">
            <button
              className="search-block__btn"
              data-back={this.state.sortBy.toUpperCase()}
              data-front="SORT BY:"
              onClick={this.toggleAccordion}
            >
              <FaCaretDown className="search-block__caret-down" />
            </button>
            <ul
              className={
                "search__query-dropdown--slider" +
                " " +
                (this.state.setActiveState === true ? "active-accordion" : "")
              }
            >
              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.state.sortBy === "title"
                      ? "active-dropdown--item"
                      : "")
                  }
                  href="#"
                  onClick={(e) =>
                    this.changeSearchSettings("title", this.state.sortDirection)
                  }
                >
                  Title
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.state.sortBy === "author"
                      ? "active-dropdown--item"
                      : "")
                  }
                  href="#"
                  onClick={(e) =>
                    this.changeSearchSettings(
                      "author",
                      this.state.sortDirection
                    )
                  }
                >
                  Author
                </a>
              </li>

              <div className="dropdown-divider"></div>
              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.state.sortDirection === "ascending"
                      ? "active-dropdown--item"
                      : "")
                  }
                  onClick={(e) =>
                    this.changeSearchSettings(this.state.sortBy, "ascending")
                  }
                  href="#"
                >
                  Ascending
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.state.sortDirection === "descending"
                      ? "active-dropdown--item"
                      : "")
                  }
                  onClick={(e) =>
                    this.changeSearchSettings(this.state.sortBy, "descending")
                  }
                  href="#"
                >
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

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(SearchBlock);
