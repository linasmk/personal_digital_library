/* =============== Dependencies ============= */
import React, { Component } from "react";
import { without, findIndex } from "lodash";
/* ================= Components ================= */
import Header from "../Header";
import library from "../../data/Library";
import SearchBlock from "../SearchBlock";
import AddBook from "../AddBook";
import Footer from "../Footer";
import SearchResult from "../SearchResult";

/* ================= Code ================= */

export default class PersonalDigitalLibraryApp extends Component {
  state = {
    library: library,
    search: "",
    lastIndex: 0,
    // New
    orderBy: "title",
    orderDir: "asc",
  };
  changeSearchOrder = (order, dir) => {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  };
  searchForBooks(query) {
    this.setState({
      search: query,
    });
  }
  // Adjusting state to search results
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let order;
    let filteredLibrary = this.state.library;
    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredLibrary = filteredLibrary
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter((eachItem) => {
        return (
          eachItem["title"]
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          eachItem["author"]
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          eachItem["category"]
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          eachItem["publicationYear"]
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        );
      });

    return (
      <div className="container">
        <Header />
        <main className="main-content">
          <SearchBlock
            search={this.state.search}
            updateSearch={this.updateSearch.bind(this)}
            orderBy={this.state.orderBy}
            orderDir={this.state.orderDir}
            changeSearchOrder={this.changeSearchOrder.bind(this)}
            searchForBooks={this.searchForBooks.bind(this)}
          />
          <SearchResult
            editBookInfo={this.editBookInfo}
            library={this.state.library}
            filteredLibrary={filteredLibrary}
          />
          <AddBook />
        </main>
        <Footer />
      </div>
    );
  }
}
