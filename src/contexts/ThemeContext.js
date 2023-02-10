import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({ isDarkTheme: true });

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (!theme) {
      setTheme({ isDarkTheme: true });
      return;
    }
    setTheme(theme);
  }, []);

  const toggleTheme = () => {
    setTheme((currTheme) => {
      return {
        ...currTheme,
        isDarkTheme: !theme.isDarkTheme,
      };
    });
  };
  const handleThemeChanged = () => {
    toggleTheme();
    localStorage.setItem(
      "theme",
      JSON.stringify({
        isDarkTheme: !theme.isDarkTheme,
      })
    );
  };

  return (
    <ThemeContext.Provider
      value={{ ...theme, handleThemeChanged: handleThemeChanged }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
