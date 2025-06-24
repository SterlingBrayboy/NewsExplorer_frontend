import "./Footer.css";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedIn.svg";

const currentYear = new Date().getFullYear();

const handleTripleTen = () => {
  window.open("https://tripleten.com", "_blank");
};

const handleGitHub = () => {
  window.open("https://github.com/SterlingBrayboy", "_blank");
};

const handleLinkedIn = () => {
  window.open("https://www.linkedin.com/in/sterlingbrayboy/", "_blank");
};

const Footer = ({ navigate }) => {
  return (
    <footer className="footer">
      <div className="footer__elements">
        <div className="footer__credits">
          © {currentYear} Supersite, Powered by News API
        </div>
        <nav className="footer__links">
          <div className="footer__buttons">
            <button
              className="footer__home"
              type="button"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="footer__tripleten"
              type="button"
              onClick={handleTripleTen}
            >
              TripleTen
            </button>
          </div>
          <div className="footer__icons">
            <img
              className="footer__github"
              src={github}
              alt="github"
              onClick={handleGitHub}
            />
            <img
              className="footer__linkedin"
              src={linkedIn}
              alt="linkedIn"
              onClick={handleLinkedIn}
            />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
