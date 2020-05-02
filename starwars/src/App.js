import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character.js";
import styled from "styled-components";

const Info = styled.div`
display: flex;
flex-direction: column;
`;

const App = () => {

  return (
  
  <Info>
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
       
    </div></Info>
  );
}

export default App;
