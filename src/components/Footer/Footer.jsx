import "./Footer.css";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedIn.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div>© {currentYear} Supersite, Powered by News API</div>
      <div className="footer__elements">
        <p>Home</p>
        <p>TripleTen</p>
        <img src={github} alt="github" />
        <img src={linkedIn} alt="linkedIn" />
      </div>
    </footer>
  );
};

export default Footer;
