import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import { createContext } from "react";

export const ThemeContext = createContext(null);


function App() {
    let [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
      setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
    };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div id={theme}>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects/:id" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;


            // <Route path="/" element={<Hero />} exact />
            // <Route path="/" element={<About />} exact />
            // <Route path="/" element={<Projects />} exact />
            // <Route path="/" element={<Skills />} exact />
            // <Route path="/" element={<Contact />} exact />
            // <Route path="pro/" element={<Details />} exact />
