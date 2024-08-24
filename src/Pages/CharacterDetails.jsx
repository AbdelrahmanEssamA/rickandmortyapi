import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterByID } from "../api/charactersFetcher";
import { ThemeContext } from "../Components/ThemeProvider";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await fetchCharacterByID(id);
        setCharacter(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCharacter();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  const { name, image, status, species, gender, origin } = character;

  return (
    <div className={isDarkMode ? "darkCharacterDetails" : "characterDetails"}>
      <h1>{name}</h1>
      <div className="flexContainer">
        <img src={image} alt={name} />
        <div className="info">
          <p>
            <strong>Species:</strong> {species}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Origin:</strong> {origin.name}
          </p>
          <div className="status">
            <p className={status}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
