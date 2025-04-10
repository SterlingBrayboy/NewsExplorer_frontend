import "./SearchForm.css";
import React, { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch({ searchQuery });
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          placeholder="Enter topic"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        ></input>
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
