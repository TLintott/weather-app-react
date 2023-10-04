import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        This project is created by Tracey Lintott and is open-sourced on{" "}
        <a href="https://github.com/TLintott/weather-app-react" target="_blank" rel="noopener noreferrer">Github</a>
      </footer>
    </div>
  );
}
