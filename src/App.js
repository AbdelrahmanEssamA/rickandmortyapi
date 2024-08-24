import React, { useContext, useEffect } from "react";
import Characters from "./Pages/Charachters";
import CharacterDetails from "./Pages/CharacterDetails";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import { ThemeContext } from "./Components/ThemeProvider";

function App() {
  //get the body and if isDarkMode is true add .dark-mode class to the body
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
