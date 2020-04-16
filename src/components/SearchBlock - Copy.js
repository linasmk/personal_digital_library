import React from "react";
import SearchResult from "./SearchResult";

export default class SearchBlock extends React.Component {
  state = {
    search: "",
  };
  // Adjusting state to search results
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  render() {
    let filteredLibrary = this.props.library.filter((book) => {
      return (
        book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <section className="search-block">
        <div className="search-query">
          <label>
            <p>Search for books:</p>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </label>
        </div>
        <div className="search__result">
          {filteredLibrary.map((book, index) => (
            <SearchResult
              //Library data
              key={book.id.toString()}
              title={book.title}
              author={book.author}
              rating={book.rating}
              description={book.description}
              publicationYear={book.publicationYear}
              publisher={book.publisher}
              publicationLength={book.publicationLength}
              category={book.category}
              url={book.url}
              src={book.src}
              srcSm={book.srcSm}
              srcMd={book.srcMd}
              srcLg={book.srcLg}
              srcXlg={book.srcXlg}
              background={book.background}
            />
          ))}
        </div>
      </section>
    );
  }
}
