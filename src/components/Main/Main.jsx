import "./Main.css";
import React, { useState } from "react";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import SearchForm from "../SearchForm/SearchForm";
import notfound from "../../images/nothing-found.svg";
import Preloader from "../Preloader/Preloader";

const Main = ({
  articles,
  handleSearch,
  hasSearched,
  isSearchLoading,
  isLoggedIn,
}) => {
  return (
    <main className="main">
      <div className="main__background"></div>
      <section className="main__section">
        <div className="main__container">
          <h1 className="main__title">What's going on in the world?</h1>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm handleSearch={handleSearch} />
        </div>
      </section>
      {hasSearched && isSearchLoading ? <Preloader /> : null}
      {hasSearched && !isSearchLoading ? (
        <Articles articles={articles} isLoggedIn={isLoggedIn} />
      ) : null}
      <About />
    </main>
  );
};

export default Main;
function Articles({ articles, isLoggedIn }) {
  const [numToShow, setNumToShow] = useState(6);
  return (
    <section className="articles-section">
      {/* Place the Search Results heading in its own container */}
      {articles.length > 0 && (
        <h3 className="main__search-results">Search Results</h3>
      )}

      <div className="newscard__articles">
        {articles.length > 0 ? (
          <>
            {articles.slice(0, numToShow).map((article, index) => (
              <NewsCard key={index} article={article} isLoggedIn={isLoggedIn} />
            ))}
            {numToShow < articles.length && (
              <button
                className="newscard__show-more"
                onClick={() => setNumToShow(numToShow + 3)}
              >
                Show More
              </button>
            )}
          </>
        ) : (
          <div className="main__error">
            <img className="main__error-pic" src={notfound} alt="sad face" />
            <h3 className="main__error-title">Nothing Found</h3>
            <p className="main__error-subtitle">
              Sorry, but nothing matched your search terms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
