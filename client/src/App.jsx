import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <footer id="contact">
        <a
          href="https://github.com/crestonesoftware/greentrail"
          target="_blank"
        >
          <i className="fa fa-github light"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
