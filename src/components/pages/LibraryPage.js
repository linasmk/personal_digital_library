/* =============== Dependencies ============= */
import React, { useState } from "react";
/* ================= Components ================= */
import Header from "../Header";
import SearchBlock from "../SearchBlock";
import AddBook from "../AddBook";
import Footer from "../Footer";
import SearchResult from "../SearchResult";

/* ================= Code ================= */

const PersonalDigitalLibraryApp = () => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <SearchBlock />
        <SearchResult />
        <AddBook />
      </main>
      <Footer />
    </div>
  );
};
export default PersonalDigitalLibraryApp;
