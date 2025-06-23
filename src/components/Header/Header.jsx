import "./Header.css";
import logo from "../../images/NewsExplorer.svg";
import logoBlk from "../../images/NewsExplorerblk.svg";
import exitWht from "../../images/exit-wht.svg";
import exitBlk from "../../images/exit.svg";
import menu from "../../images/menu.svg";
import menuBlk from "../../images/menu-blk.svg";

const Header = ({
  onCreateModal,
  isLoggedIn,
  handleLogout,
  isProfilePage,
  handleLoginModal,
  isLoginModalOpen,
  navigate,
}) => {
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <header className="header">
      <img
        className="header__logo"
        src={isProfilePage ? logoBlk : logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <nav
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
            {!isLoginModalOpen && (
              <img
                className="header__menu"
                src={isProfilePage ? menuBlk : menu}
                onClick={onCreateModal}
              />
            )}
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
              Sign in
            </button>
            {!isLoginModalOpen && (
              <img
                className="header__menu"
                src={isProfilePage ? menuBlk : menu}
                onClick={onCreateModal}
              />
            )}
          </>
        )}
      </nav>
      <div
        className={`header__border ${
          isProfilePage ? "header__border-black" : ""
        }`}
      ></div>
    </header>
  );
};

export default Header;
