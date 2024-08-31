import React from "react";
import { useState } from "react";
import "./App.css";
import GitHubLink from "./components/GitHubLink";
import DarkNav from "./components/DarkNav";

function App() {
  return (
    <>
      <DarkNav />
      <footer id="contact">
        <GitHubLink />
      </footer>
    </>
  );
}

export default App;
