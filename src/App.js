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
        <a href="https://github.com/TLintott/weather-app-react" target="_blank" rel="noopener noreferrer">Github</a> and hosted on <a href="https://ornate-sorbet-1cc62d.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a> 
      </footer>
    </div>
  );
}
