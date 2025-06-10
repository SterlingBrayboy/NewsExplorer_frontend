import "./SearchForm.css";
import React, { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <section className="search">
      <div className="search__elements">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            placeholder="Enter topic"
            type="text"
            onChange={handleInputChange}
          ></input>
          <div>
            <button className="search__button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
