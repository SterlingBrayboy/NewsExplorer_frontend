import "./NewsCard.css";
// import React, { useContext } from "react";
import React, { useState } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const NewsCard = ({ article }) => {
  //   const { currentUser } = useContext(CurrentUserContext);
  //   const isOwn = item.owner === currentUser._id;
  //   const isLiked =
  //     item.likes && item.likes.some((like) => like === currentUser?._id);

  // Determine visibility of the like button based on ownership
  //   const cardLikeVisible = isOwn ? "newscard__like_visible" : "newscard__like_hidden";

  // Determine the style of the like button based on whether it's liked
  //   const cardLiked = !isLiked ? "newscard__like" : "newscard__unlike";

  const [save, setSave] = useState(true);

  const images = article.urlToImage;
  const titles = article.title;
  const description = article.description;
  const source = article.source.name;

  return (
    <section className="newscard">
      {/* <h1 className="newscard__search-results">Search Results</h1> */}
      <div className="newscard__article">
        <button
          className={save ? "newscard__save-button" : "newscard__save-clicked"}
          onClick={() => setSave(!save)}
        ></button>
        <img src={images} alt={titles} className="newscard__image" />
        <div className="newscard__info">
          <h3 className="newscard__title">{titles}</h3>
          <p className="newscard__description">{description}</p>
          <p className="newscard__source">{source}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
