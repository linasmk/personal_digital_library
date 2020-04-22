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
            //value={this.props.search}
            onChange={(e) => this.props.searchForBooks(e.target.value)}
          />
          <nav className="search__query-dropdown">
            <button
              //https://codepen.io/LinasYesterday/pen/ExVKxzM
              className="search__query-dropdown--toggle"
              data-back={this.props.orderBy}
              data-front="Sort by"
              onClick={this.toggleAccordion.bind(this)}
            ></button>
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
                    (this.props.orderBy === "title"
                      ? "active-dropdown--item"
                      : "")
                  }
                  href="#"
                  onClick={(e) =>
                    this.props.changeSearchOrder("title", this.props.orderDir)
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
                    (this.props.orderBy === "author"
                      ? "active-dropdown--item"
                      : "")
                  }
                  href="#"
                  onClick={(e) =>
                    this.props.changeSearchOrder("author", this.props.orderDir)
                  }
                >
                  Author
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.props.orderBy === "category"
                      ? "active-dropdown--item"
                      : "")
                  }
                  href="#"
                  onClick={(e) =>
                    this.props.changeSearchOrder(
                      "category",
                      this.props.orderDir
                    )
                  }
                >
                  Category
                </a>
              </li>

              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.props.orderBy === "publicationYear"
                      ? "active-dropdown--item"
                      : "")
                  }
                  href="#"
                  onClick={(e) =>
                    this.props.changeSearchOrder(
                      "publicationYear",
                      this.props.orderDir
                    )
                  }
                >
                  Year
                </a>
              </li>

              <div className="dropdown-divider"></div>
              <li className="search__query-dropdown--item">
                <a
                  className={
                    "search__query-dropdown--btn" +
                    " " +
                    (this.props.orderDir === "asc"
                      ? "active-dropdown--item"
                      : "")
                  }
                  onClick={(e) =>
                    this.props.changeSearchOrder(this.props.orderBy, "asc")
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
                    (this.props.orderDir === "desc"
                      ? "active-dropdown--item"
                      : "")
                  }
                  onClick={(e) =>
                    this.props.changeSearchOrder(this.props.orderBy, "desc")
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
