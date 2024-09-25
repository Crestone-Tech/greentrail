import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/locations",
        // TODO route to Locations when Locations page is converted to React
        element: <Homepage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // TODO how to avoid errors from scripts being run twice in StrictMode?
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
