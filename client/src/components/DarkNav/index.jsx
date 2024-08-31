import React from "react";


export default function DarkNav() {
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
          {/* TODO show/hide when logged in or not */}
          {/* #if loggedIn */}
          {/* TODO /add route */}
          <a href="/add">Add</a>
          {/* TODO login route */}
          <a href="/" id="logout">
            Logout
          </a>
          {/* JAVASCRIPT */}
          {/* TODO logout Script */}
          <script src="/js/logout.js"></script>
          {/* {{else}} */}
          {/* TODO login route */}
          <a href="/login" id="login">
            Login
          </a>
          {/* {{/if}} */}
        </div>
      </nav>

      
    </>
  );
}
