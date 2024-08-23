import React, { useContext } from "react";
import "./_styles.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
const CharacterCard = (props) => {
  const navigate = useNavigate();
  const { name, id, image } = props.data;
  const { isDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    navigate(`/characters/${id}`);
  };

  return (
    <div
      className={isDarkMode ? "darkCard" : "characterCard"}
      onClick={handleClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default CharacterCard;
