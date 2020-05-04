import React from "react";
import styled from "styled-components";

//Styled component for the cards
const Box = styled.div`
  border: 3px solid darkslategray;
  border-radius: 10px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.685);
  font-family:  'Shadows Into Light', cursive;
`;

const StyledP = styled.p `
font-weight: bolder;
letter-spacing: 2px;
`;
function Card(props) {
  console.log("Props", props.character);
// Information to be displayed on the character cards
  return (
    <div className="CharacterCard">
      <Box>
        <div>
          <h1>{props.character.name}</h1>
          <StyledP>Height: {props.character.height}</StyledP>
          <StyledP>Mass: {props.character.mass}</StyledP>
          <StyledP>Gender: {props.character.gender}</StyledP>
          <StyledP>Skin Color: {props.character.skin_color}</StyledP>
          <StyledP>Eye Color: {props.character.eye_color}</StyledP>
        </div>
      </Box>
    </div>
  );
}

export default Card;
