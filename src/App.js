import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { NotFound } from "./pages/Error404";
import { ScrollToTop } from "react-router-scroll-to-top";
import RootLayout from "./layouts/RootLayout";
import ThemeContextProvider from "./contexts/ThemeContext";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ScrollToTop>
          <ThemeContextProvider>
            <RootLayout />
          </ThemeContextProvider>
        </ScrollToTop>
      }
      errorElement={<ErrorPage/>}
    >
      <Route index element={<Home />} />
      <Route path="projects/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
