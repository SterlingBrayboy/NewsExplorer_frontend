import "./NewsCard.css";
// import React, { useContext } from "react";
import React, { useState } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const NewsCard = ({
  article,
  isLoggedIn,
  handleSaveArticle,
  handleDeleteArticle,
  isProfilePage,
}) => {
  const [save, setSave] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const handleSaveClick = () => {
    if (isLoggedIn) {
      setSave(!save);
      handleSaveArticle(article);
    } else {
      setIsWarningVisible(true);
    }
  };

  const handleDeleteClick = () => {
    handleDeleteArticle(article); // Call delete function
  };

  const handleMouseEvents = (isEntering) => {
    if (!isLoggedIn) {
      setIsWarningVisible(isEntering);
    }
  };

  const images = article.urlToImage;
  const titles = article.title;
  const description = article.description;
  const source = article.source.name;
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log("isLoggedIn:", isLoggedIn);
  console.log("isWarningVisible:", isWarningVisible);
  console.log(article);

  return (
    <section className="newscard">
      <div className="newscard__article">
        {isProfilePage ? (
          <button
            className="newscard__delete-button"
            onClick={handleDeleteClick}
          ></button>
        ) : (
          <button
            className={
              save ? "newscard__save-clicked" : "newscard__save-button"
            }
            onClick={handleSaveClick}
            onMouseEnter={() => handleMouseEvents(true)}
            onMouseLeave={() => handleMouseEvents(false)}
          ></button>
        )}
        <div
          className={`newscard__warning ${
            isWarningVisible ? "newscard__warning_visible" : ""
          }`}
        >
          <p>Sign in to save articles</p>
        </div>
        <img src={images} alt={titles} className="newscard__image" />
        <div className="newscard__info">
          <p className="newscard__date">{date}</p>
          <h3 className="newscard__title">{titles}</h3>
          <p className="newscard__description">{description}</p>
          <p className="newscard__source">{source}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
