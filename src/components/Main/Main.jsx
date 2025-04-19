import "./Main.css";
import React from "react";
// import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";

const Main = ({ article }) => {
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
        </div>
      </section>
      <About />
      <NewsCard />
    </main>
  );
};

export default Main;
