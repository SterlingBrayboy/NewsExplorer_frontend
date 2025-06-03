import "./Header.css";
import logo from "../../images/NewsExplorer.svg";
import logoblk from "../../images/NewsExplorerblk.svg";
import exitWht from "../../images/exit-wht.svg";
import exitBlk from "../../images/exit.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ onCreateModal, isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProfilePage = location.pathname === "/profile";

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <header className="header">
      <img
        className={`header__logo ${
          isProfilePage ? "header__logo--profile" : ""
        }`}
        src={isProfilePage ? logoblk : logo}
        alt="logo"
      />
      <div
        className={`header__elements ${isProfilePage ? "header--profile" : ""}`}
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
          </>
        )}
      </div>
      <div className="header__border"></div>
    </header>
  );
};

export default Header;
