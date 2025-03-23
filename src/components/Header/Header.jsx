import "./Header.css";
import logo from "../../images/NewsExplorer.svg";
import React from "react";
// import Navigation from "../Navigation/Navigation";
// import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__elements">
        <button className="header__home-button">Home</button>
        <button className="header__sign-in" onClick={onCreateModal}>
          Sign In
        </button>
      </div>
      <div className="header__border"></div>
    </header>
  );
};

export default Header;
