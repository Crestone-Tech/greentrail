import React, { useEffect } from "react";
import "./login.css";

export default function Login() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./js/login.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="login-page">
      <div className="page-subtitle grotesque">
        <button id="sign-in-button">Sign in</button>{" "}
        {/*TODO text color does not change on hover over buttons */}
        <button id="sign-up-button">Sign up</button>
      </div>

      <div className="inter" id="signup-signin-box">
        <section className="borders" id="sign-in">
          <p>Email:</p>
          <p className="hidden signin-alert" id="signin-email-alert">
            Please enter your email
          </p>
          <input
            type="text"
            className="borders"
            id="sign-in-email"
            name="sign-in-email"
          />
          <p>Password:</p>
          <p className="hidden signin-alert" id="signin-password-alert">
            Please enter your password
          </p>
          <input
            type="password"
            className="borders"
            id="sign-in-password"
            name="sign-in-password"
          />
          <p className="hidden signin-alert-important" id="signin-alert">
            Sorry, the email or password you entered does not match any existing
            account. Please try again!
          </p>
          <button id="go-sign-in">Sign in</button>
        </section>

        <section className="borders" id="sign-up">
          <p>First name:</p>
          <p className="hidden signin-alert" id="signup-first-alert">
            Please enter your first name
          </p>
          <input
            type="text"
            className="borders"
            id="sign-up-first"
            name="sign-up-first"
          />
          <p>Last name:</p>
          <p className="hidden signin-alert" id="signup-last-alert">
            Please enter your last name
          </p>
          <input
            type="text"
            className="borders"
            id="sign-up-last"
            name="sign-up-last"
          />
          <p>Email:</p>
          <p className="hidden signin-alert" id="signup-email-alert">
            Please enter a valid email
          </p>
          <input
            type="text"
            className="borders"
            id="sign-up-email"
            name="sign-up-email"
          />
          <p>Password:</p>
          <p className="hidden signin-alert" id="signup-password-alert">
            Please enter a password longer than 6 characters
          </p>
          <input
            type="password"
            className="borders"
            id="sign-up-password"
            name="sign-up-password"
          />
          <button id="go-sign-up">Sign Up</button>
          <p className="hidden signin-alert-important" id="signin-alert">
            Sorry, we were unable to create your account. Please try again.
          </p>
        </section>

        <section className="borders" id="google-auth">
          <a href="/auth/google">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </a>
        </section>
      </div>
    </div>
  );
}
