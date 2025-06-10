import "./Profile.css";
import NewsCard from "../NewsCard/NewsCard";

const Profile = ({ articles, isLoggedIn }) => {
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__articles">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <NewsCard key={index} article={article} isLoggedIn={isLoggedIn} />
            ))
          ) : (
            <h1 className="profile__no-articles">
              You have no saved articles.
            </h1>
          )}
          <p>By keywords: Nature, Yellowstone, and 2 other</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
