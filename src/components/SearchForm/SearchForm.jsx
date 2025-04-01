import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" placeholder="Enter topic"></input>
        <button className="search__button" type="button">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
