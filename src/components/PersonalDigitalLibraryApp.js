import React from "react";
import Header from "./Header";
import library from "./Library";
import SearchBlock from "./SearchBlock";
import Footer from "./Footer";

export default class PersonalDigitalLibraryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      library: library
    };
  }
  render() {
    return (
      <main className="container">
        <Header />
        <SearchBlock library={this.state.library} />
        <Footer />
      </main>
    );
  }
}
