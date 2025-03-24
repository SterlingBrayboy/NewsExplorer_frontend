import "./Footer.css";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedIn.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__credits">
        © {currentYear} Supersite, Powered by News API
      </div>
      <div className="footer__elements">
        <button type="button">Home</button>
        <button type="button">TripleTen</button>
        <img className="footer__github" src={github} alt="github" />
        <img className="footer__linkedin" src={linkedIn} alt="linkedIn" />
      </div>
    </footer>
  );
};

export default Footer;
