import Characters from "./Pages/Charachters";
import CharacterDetails from "./Pages/CharacterDetails";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "./Components/ThemeProvider";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
