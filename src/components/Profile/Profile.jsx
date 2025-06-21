import "./Profile.css";
import NewsCard from "../NewsCard/NewsCard";

const Profile = ({
  articles,
  isLoggedIn,
  handleDeleteArticle,
  isProfilePage,
}) => {
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">
          {" "}
          {articles.length > 0
            ? `You have ${articles.length} saved article${
                articles.length > 1 ? "s" : ""
              }.`
            : "You have no saved articles."}
        </h1>
        <div
          className={`profile__articles ${
            articles.length === 0 ? "profile__articles-empty" : ""
          }`}
        >
          {articles.length > 0
            ? articles.map((article, index) => (
                <NewsCard
                  key={index}
                  article={article}
                  isLoggedIn={isLoggedIn}
                  handleDeleteArticle={handleDeleteArticle}
                  isProfilePage={isProfilePage}
                />
              ))
            : null}
          {/* <p>By keywords: Nature, Yellowstone, and 2 other</p> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
