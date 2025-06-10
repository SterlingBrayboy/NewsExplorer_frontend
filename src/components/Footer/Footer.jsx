import "./Footer.css";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedIn.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__elements">
        <div className="footer__credits">
          © {currentYear} Supersite, Powered by News API
        </div>
        <div className="footer__links">
          <div className="footer__buttons">
            <button className="footer__home" type="button">
              Home
            </button>
            <button type="button">TripleTen</button>
          </div>
          <img className="footer__github" src={github} alt="github" />
          <img className="footer__linkedin" src={linkedIn} alt="linkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
