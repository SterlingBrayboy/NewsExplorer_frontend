import "./NewsCard.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const NewsCard = ({ source, title, publishedAt, description, urlToImage }) => {
  const { currentUser } = useContext(CurrentUserContext);
  //   const isOwn = item.owner === currentUser._id;
  //   const isLiked =
  //     item.likes && item.likes.some((like) => like === currentUser?._id);

  // Determine visibility of the like button based on ownership
  //   const cardLikeVisible = isOwn ? "newscard__like_visible" : "newscard__like_hidden";

  // Determine the style of the like button based on whether it's liked
  //   const cardLiked = !isLiked ? "newscard__like" : "newscard__unlike";

  return (
    <div className="card__area">
      {/* <button
        className={`${newscardLikeVisible} ${newscardLiked}`}
        onClick={() => onCardLike(item, isLiked)}
      ></button> */}
      {/* <img
        className="newscard__image"
        src={item.urlToImage}
        onClick={() => onSelectCard(item)}
        alt={item.name}
      /> */}
      {/* <div className="newscard__name">{item.name}</div> */}
    </div>
  );
};

export default NewsCard;
