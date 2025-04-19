import "./NewsCard.css";
// import React, { useContext } from "react";
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

  return (
    <section className="newscard">
      <div className="newscard__articles">
        <div className="newscard__article">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="newscard__image"
          />
          <div className="newscard__info">
            <h3 className="newscard__title">{article.title}</h3>
            <p className="newscard__description">{article.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
