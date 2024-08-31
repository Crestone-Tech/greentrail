import React, { useEffect } from "react";
import './homepage.css';
export default function Homepage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./js/home.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <video autoPlay muted loop id="homepage-video">
        <source
          src="/images/background.mp4"
          type="video/mp4"
          alt="Loop of travel destinations"
        />
      </video>

      <div>
        <h1 className="page-title grotesque light fade-in" id="homepage-title">
          GreenTrail
        </h1>
        <h2
          className="page-subtitle inter light fade-in"
          id="homepage-subtitle"
        >
          Travel respectfully.
        </h2>
      </div>
    </div>
  );
}
