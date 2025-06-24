import "./About.css";
import avatar from "../../images/avatar.png";

const About = () => {
  return (
    <section className="about">
      <img className="about__image" src={avatar} alt="avatar" />
      <div className="about__wording">
        <h1 className="about__title">About the author</h1>
        <p className="about__subtitle">
          Fullstack Software Engineer with 2 years of experience building web
          applications using the MERN stack (MongoDB, Express, React, Node.js)
          and Git, with deployment experience on Google Cloud.
        </p>
      </div>
    </section>
  );
};

export default About;
