import React, { Component } from "react";
import Header from "./Header";
import library from "./Library";
import SearchBlock from "./SearchBlock";
import AddBook from "./AddBook";
import Footer from "./Footer";
import SearchResult from "./SearchResult";

export default class PersonalDigitalLibraryApp extends Component {
  state = {
    library: library,
    search: "",
    lastIndex: 0,
  };
  // Adjusting state to search results
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  addNewBookDetails = (book) => {
    let tempBook = this.state.library;
    book.id = this.state.lastIndex;
    tempBook.unshift(book);
    this.setState(() => ({
      library: tempBook,
      lastIndex: this.state.lastIndex + 1,
    }));
  };
  render() {
    let filteredLibrary = this.state.library.filter((book) => {
      return (
        book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <Header />
        <main className="main__content">
          <SearchBlock
            search={this.state.search}
            updateSearch={this.updateSearch.bind(this)}
          />
          <SearchResult
            library={this.state.library}
            filteredLibrary={filteredLibrary}
          />
          <AddBook addNewBookDetails={this.addNewBookDetails} />
        </main>
        <Footer />
      </div>
    );
  }
}
