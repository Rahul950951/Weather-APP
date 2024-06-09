import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/rahul-kumar-kapar-2a6191228/">
        Developed by Rahul Kumar Kapar
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
