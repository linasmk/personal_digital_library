import {
  addBook,
  removeBook,
  editBook,
  setTextFilter,
  sortBySearchType,
  sortByDirection,
} from "../../store/actionCreators";

// Set up removeBook
test("Should set up remove book action object", () => {
  const action = removeBook({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_BOOK",
    id: "123abc",
  });
});

// Set up editBook
test("Should set up edit book action object", () => {
  const action = editBook("123abc", { description: "Description" });
  expect(action).toEqual({
    type: "EDIT_BOOK",
    id: "123abc",
    updates: {
      description: "Description",
    },
  });
});

// Set up addBook with values
test("Should set up add book action object with provided values", () => {
  const bookData = {
    title: "Title",
    author: "Name",
    description: "Description",
    publicationYear: 1999,
    publisher: "Publishing House",
    publicationLength: 400,
    category: "Science",
    rating: 7,
    url: "http://",
    imgLink: "http://",
    src: "http://",
    srcSm: "http://",
    srcMd: "http://",
    srcLg: "http://",
    srcXlg: "http://",
  };
  const action = addBook(bookData);
  expect(action).toEqual({
    type: "ADD_BOOK",
    book: {
      ...bookData,
      id: expect.any(String),
    },
  });
});

// Set up addBook without values
test("Should set up add book action object without provided values", () => {
  const action = addBook();
  expect(action).toEqual({
    type: "ADD_BOOK",
    book: {
      id: expect.any(String),
      title: "",
      author: "",
      description: "",
      publicationYear: 0,
      publisher: "",
      publicationLength: 0,
      category: "",
      rating: 0,
      url: "",
      imgLink: "",
      src: "",
      srcSm: "",
      srcMd: "",
      srcLg: "",
      srcXlg: "",
    },
  });
});

// Generate setTextFilter with values
test("Should generate set text filter action object with text values", () => {
  const text = "Text string";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

// Generate setTextFilter without values
test("Should generate set text filter action object without text values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

// Generate sortBySearchType
test("Should generate sortSearchType filter action object", () => {
  expect(sortBySearchType()).toEqual({
    type: "SORT_BY_SEARCH_TYPE",
    searchType: "",
  });
});
// Generate sortByDirection
test("Should generate sortByDirection filter action object", () => {
  expect(sortByDirection()).toEqual({
    type: "SORT_BY_DIRECTION",
    sortDirection: "",
  });
});
