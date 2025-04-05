import "./Header.css";
import logo from "../../images/NewsExplorer.svg";
import logoblk from "../../images/NewsExplorerblk.svg";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import Navigation from "../Navigation/Navigation";
// import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

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
            <button className="header__home-button" type="button">
              Home
            </button>
            <button type="text" className="header__saved-button">
              Saved articles
            </button>
            <button
              className="header__sign-in"
              type="button"
              onClick={onCreateModal}
            >
              Sign In
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
