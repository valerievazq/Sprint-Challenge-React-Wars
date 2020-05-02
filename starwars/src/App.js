import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character.js";
import styled from "styled-components";




const App = () => {

  return (
  
  
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      <div>
      
      <Character />
      
      </div>
     
    </div>
  );
}

export default App;
