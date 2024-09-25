import React from "react";
// import "./css/nav.css";

export default function Nav() {
  return (
    <>
      <a href="/" className="grotesque dark" id="nav-title">
        GreenTrail
      </a>

      {/* NAV MENU */}
      <nav className="inter dark">
        <i className="fa-solid fa-bars hidden fade-in" id="hamburger-menu"></i>
        <i className="fa-solid fa-x hidden" id="close-menu"></i>
        <div id="nav-links">
          <a href="/locations">Locations</a>
          {/* TODO display elements per logged in/not logged in state */}
          {/* #if loggedIn */}
          {/* TODO /add route */}
          {/* <a href="/add">Add</a> */}
          {/* TODO login route */}
          {/* <a href="/" id="logout">
            Logout
          </a> */}
          {/* JAVASCRIPT */}
          {/* TODO logout Script */}
          {/* <script src="/js/logout.js"></script> */}
          {/* {{else}} */}
          {/* TODO login route */}
          <a href="/login" id="login">
            Login
          </a>
          {/* {{/if}} */}
        </div>
      </nav>

      {/* HAMBURGER MENU */}
      {/* <div className="hidden fade-in-quick light inter" id="nav-display">
        <div id="nav-display-inner">
          <a href="/locations" className="fade-in">
            Locations
          </a> */}
      {/* TODO display conditional on being logged in */}
      {/* {{#if loggedIn}}
      <a href="/add" className="fade-in">Add</a>
      <a href="/" className="fade-in" id="logout">Logout</a>
    {{else}} */}
      <a href="/login" className="fade-in" id="login">
        Login
      </a>
      {/* {{/if}} */}
      {/* </div>
      </div> */}

      {/* JAVASCRIPT */}
      <script src="/js/hamburger-menu.js"></script>
    </>
  );
}
