import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsSection = ({}) => {
  const profileCards = clothingItems;

  return (
    <div className="card__items">
      {profileCards.map((item) => (
        <NewsCard
          source={source.name}
          title={title}
          publishedAt={publishedAt}
          urlToImage={urlToImage}
          description={description}
        />
      ))}
    </div>
  );
};

export default NewsSection;
