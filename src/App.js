
import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather/>
      
      <footer>
      This project is created by Tracey Lintott and is open-sourced on {" "}
      <a href="https://github.com/TLintott/weather-app-react" target='blank'>Github</a>
    </footer>
    </div>
    </div>
  );
}


