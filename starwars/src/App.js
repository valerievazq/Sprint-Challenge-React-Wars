import React from "react";
import "./App.css";
import Character from "./components/Character.js";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">
        <i class="fab fa-galactic-republic"></i>Star Wars Characters 
        <i class="fas fa-jedi"></i>
      </h1>

      <div>
        <Character />
      </div>
    </div>
  );
};

export default App;
