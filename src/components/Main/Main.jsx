import "./Main.css";
import React, { useState } from "react";
// import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import SearchForm from "../SearchForm/SearchForm";

const Main = ({ articles, handleSearch }) => {
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
      <Articles articles={articles} />
      <About />
    </main>
  );
};

export default Main;
function Articles({ articles }) {
  const [numToShow, setNumToShow] = useState(3);
  return (
    <section>
      {articles.length > 0 ? (
        articles
          .slice(0, numToShow)
          .map((article, index) => <NewsCard key={index} article={article} />)
      ) : (
        <p className="main__error-message">No Articles Found.</p>
      )}
    </section>
  );
}
