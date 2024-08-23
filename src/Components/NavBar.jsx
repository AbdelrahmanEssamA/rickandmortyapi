import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./_styles.css";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1 className="logo">Rick and Morty Gallery</h1>
      <ul className="nav-links">
        <li>
          <a href="/characters">Characters</a>
        </li>
        <button onClick={toggleTheme}>
          {isDarkMode ? "Set to Light" : "Set to Dark"}
        </button>
      </ul>
    </nav>
  );
};
export default NavBar;
