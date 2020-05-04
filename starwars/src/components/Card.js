import React from "react";
import styled from "styled-components";

//Styled component for the cards
const Box = styled.div`
  border: 3px solid darkslategray;
  border-radius: 10px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.685);
`;

function Card(props) {
  console.log("Props", props.character);
// Information to be displayed on the character cards
  return (
    <div className="CharacterCard">
      <Box>
        <div>
          <h1>Name: {props.character.name}</h1>
          <p>Height: {props.character.height}</p>
          <p>Mass: {props.character.mass}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Skin Color: {props.character.skin_color}</p>
          <p>Eye Color: {props.character.eye_color}</p>
        </div>
      </Box>
    </div>
  );
}

export default Card;
