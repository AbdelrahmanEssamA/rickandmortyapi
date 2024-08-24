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

//TODO: fix the bug

// useState saves data -> and gives us the ability to change it
// <Parent component>
// -> define counter state
// -> function to increment counter
// -> function to decrement counter
//   <ChildComponent counter={state} decrement={decrement} increment{increment} />
//  <ChildComponent2 counter={state} decrement={decrement} increment{increment}/>
//  <innerChildComponent counter={props.state} decrement={decrement} increment{increment}/>
// <childComponent3 counter ={state} decrement={decrement} increment{increment}/>
// </Parent component>

//const childComponent = (props) => {
//  return (
//    <div>
//      <p>{props.counter}</p>
//    </div>
//  );

// states + functions
// provider
// any component that is a child of the provider can access the state and functions
