import "./Profile.css";

const Profile = ({}) => {
  return (
    <section className="profile">
      <div className="profile__container">
        <p className="profile__title">Saved articles</p>
        <h1 className="profile__review">Elise, you have 5 saved articles.</h1>
        <p className="profile__keywords">
          By keywords: Nature, Yellowstone, and 2 other
        </p>
      </div>
    </section>
  );
};

export default Profile;
