import React from "react";
import Switch from "react-switch";


export default function Header(props) {
  let [menu, setMenu] = React.useState('false');
  function toggleMenu() {
    setMenu((prevState) => (prevState = !prevState));
  }
  return (
    <nav>
      <div className="container main">
        <div className={menu ? "menu-list" : "open"}>
          <h2 className="close-div" onClick={toggleMenu}>
            &#10006;
          </h2>

          <ul className="nav-mob-links">
            <li>
              <a href="/#projects"> Projects</a>
            </li>
            <li>
              <a href="/#skills"> Skills</a>
            </li>
            <li>
              <a href="/#contact"> Contact me</a>
            </li>
          </ul>
        </div>
        <div className="nav-items">
          <span className="logo_name">
            <a className = 'logo_link' href="/">
              <img src="/images/logo.jpg" alt="Logo" />
            </a>
            <a href="/" className="logo_link_text">
              <h3 className="name">Seun Fashina</h3>
            </a>
          </span>
          <ul className="nav-links">
            <li>
              <a href="/#projects"> Projects</a>
            </li>
            <li>
              <a href="/#skills"> Skills</a>
            </li>
            <li>
              <a href="/#contact"> Contact me</a>
            </li>
          </ul>
          <Switch
            onChange={props.toggleTheme}
            checked={props.theme === "light"}
          />
          <h2 className="bar" onClick={toggleMenu}>
            &#9782;
          </h2>
        </div>
      </div>
    </nav>
  );
}


