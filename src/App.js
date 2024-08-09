import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

export const GlobalContext = createContext();

function App() {
  const [username, setUsername] = useState("User001");

  return (
    <div className="App">
      <Router>
        <GlobalContext.Provider value={{ username, setUsername }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
