import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Switch from "react-switch";
import { ThemeContext } from "../contexts/ThemeContext";

export default function RootLayout() {
  const { isDarkTheme, handleThemeChanged } = useContext(ThemeContext);

  const theme = isDarkTheme ? "dark" : "light";

  let [menu, setMenu] = React.useState("false");
  function toggleMenu() {
    setMenu((prevState) => (prevState = !prevState));
  }
  return (
    <div id={theme}>
      <nav>
        <div className="container main">
          <div className={menu ? "menu-list" : "open"}>
            <h2 className="close-div" onClick={toggleMenu}>
              &#10006;
            </h2>

            <ul className="nav-mob-links">
              <li>
                <HashLink to="/#projects" preventScrollReset={true}>
                  Project
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#skills" preventScrollReset={true}>
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink to="/#contact" preventScrollReset={true}>
                  Contact me
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="nav-items">
            <span className="logo_name">
              <Link className="logo_link" to="/">
                <img src="/logo.png" alt="Logo" />
              </Link>
              <Link to="/" className="logo_link_text">
                <h3 className="name">SEUN👨‍💻</h3>
              </Link>
            </span>
            <ul className="nav-links">
              <li>
                <HashLink to="/#projects" preventScrollReset={true}>
                  Project
                </HashLink>
              </li>
              <li>
                <HashLink to="/#skills" preventScrollReset={true}>
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink to="/#contact">Contact me</HashLink>
              </li>
            </ul>
            <Switch onChange={handleThemeChanged} checked={theme === "dark"} />
            <h2 className="bar" onClick={toggleMenu}>
              &#9782;
            </h2>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
      <div className="footer">
        Designed by <a href="https://portfolio-site-ecru.vercel.app">Kelvin</a>
      </div>
    </div>
  );
}
