import "./Header.css";
import logo from "../../images/NewsExplorer.svg";
import logoblk from "../../images/NewsExplorerblk.svg";
import exitWht from "../../images/exit-wht.svg";
import exitBlk from "../../images/exit.svg";
import hamburgMenu from "../../images/hamburg-menu.svg";
import { useNavigate } from "react-router-dom";

const Header = ({
  onCreateModal,
  isLoggedIn,
  handleLogout,
  isProfilePage,
  handleLoginModal,
}) => {
  const navigate = useNavigate();

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <header className="header">
      <img
        className="header__logo"
        src={isProfilePage ? logoblk : logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <div
        className={`header__elements ${isProfilePage ? "header__profile" : ""}`}
      >
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header__home-button"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              type="button"
              className="header__saved-button"
              onClick={() => navigate("/profile")}
            >
              Saved articles
            </button>
            <button
              className="header__sign-out"
              type="button"
              onClick={handleLogout}
            >
              Elise
              <img
                src={isProfilePage ? exitBlk : exitWht}
                alt="Sign Out"
                className="header__sign-out-icon"
              />
            </button>
            <img
              className="header__hamburg-menu"
              src={hamburgMenu}
              onClick={onCreateModal}
            />
          </>
        ) : (
          <>
            <button className="header__home-button" type="button">
              Home
            </button>
            <button
              className="header__sign-in"
              type="button"
              onClick={onCreateModal}
            >
              Sign In
            </button>
            <img
              className="header__hamburg-menu"
              src={hamburgMenu}
              onClick={onCreateModal}
            />
          </>
        )}
      </div>
      <div className="header__border"></div>
    </header>
  );
};

export default Header;
