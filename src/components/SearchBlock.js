/* ========== Dependencies ============ */
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

/* ========== Redux ============= */
import { connect } from "react-redux";
import {
  setTextFilter,
  sortBySearchType,
  sortByDirection,
} from "../store/actionCreators";

export class SearchBlock extends React.Component {
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
      this.props.sortBySearchType(searchType);
      this.props.sortByDirection(sortDirection);
    });
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <section className="search-block">
        <div className="search__query">
          <input
            className="search__query-input"
            type="text"
            placeholder={`Search by ${this.state.sortBy}`}
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
          <nav className="search__query-dropdown">
            <button
              className="search-block__btn"
              onClick={this.toggleAccordion}
            >SORT BY:
           {this.state.setActiveState ? <AiFillCaretUp className="search-block__caret-down" /> : <AiFillCaretDown className="search-block__caret-down" />}
              
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
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortBySearchType: (searchType) => dispatch(sortBySearchType(searchType)),
  sortByDirection: (sortDirection) => dispatch(sortByDirection(sortDirection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
