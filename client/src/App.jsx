import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./css/styles.css";
import "./css/effects.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
