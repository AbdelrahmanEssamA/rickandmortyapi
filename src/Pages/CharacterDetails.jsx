import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterByID } from "../api/charactersFetcher";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    <div className="characterDetails">
      <h1>{name}</h1>
      <div className="flexContainer">
        <img src={image} alt={character.name} />
        <div className="info">
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
          <div className="status">
            <p className={status}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetails;
