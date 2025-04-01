import "./About.css";
import avatar from "../../images/avatar.png";

const About = () => {
  return (
    <section className="about">
      <img className="about__image" src={avatar} alt="avatar" />
      <div className="about__wording">
        <h1 className="about__title">About the author</h1>
        <p className="about__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
    </section>
  );
};

export default About;
