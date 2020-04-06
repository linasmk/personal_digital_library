import React, { Component } from "react";
import Header from "./Header";
import library from "./Library";
import SearchBlock from "./SearchBlock";
import AddBook from "./AddBook";
import Footer from "./Footer";

export default class PersonalDigitalLibraryApp extends Component {
  state = {
    library: library
  };

  render() {
    return (
      <div className="container">
        <Header />
        <main className="main__content">
          <SearchBlock
            library={this.state.library}
            renderStarRating={this.state.renderStarRating}
            handleSetRating={this.state.handleSetRating}
          />
          <AddBook />
        </main>
        <Footer />
      </div>
    );
  }
}
