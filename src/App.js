import React from "react";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { createContext } from "react";
import RootLayout from "./layouts/RootLayout";
import ThemeContextProvider from "./contexts/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ThemeContextProvider>
          <RootLayout />
        </ThemeContextProvider>
      }
    >
      <Route index element={<Home />} />
      <Route path="projects/:id" element={<Details />} />
    </Route>
  )
);


function App() {
  
  return (
    <RouterProvider router={router}/>
  )

};

export default App;  




