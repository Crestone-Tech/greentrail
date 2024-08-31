import React from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import GitHubLink from "./components/GitHubLink";
import DarkNav from "./components/DarkNav";

function App() {
  return (
    <>
      <DarkNav />
      <main>
        <Outlet />
      </main>
      <footer id="contact">
        <GitHubLink />
      </footer>
    </>
  );
}

export default App;
