import React from "react";

import styled from "styled-components";

const Box = styled.div`
  border: 2px solid black;
  margin: 20px;

`;

function Card(props) {
  console.log("Props", props.character);

  return (
    
      <Box>  
      <h1>Name: {props.character.name}</h1>
      
      <h3>Height: {props.character.height}</h3>
      <h3>Mass: {props.character.mass}</h3>
      
      
      <h3>Gender: {props.character.gender}</h3>
      <h3>Skin Color: {props.character.skin_color}</h3>
      <h3>Eye Color: {props.character.eye_color}</h3>
    </Box>
    
  );
}

export default Card;
