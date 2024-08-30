import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import GitHubLink from "./components/GitHubLink";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <footer id="contact">

        <GitHubLink />
      </footer>
    </>
  );
}

export default App;
