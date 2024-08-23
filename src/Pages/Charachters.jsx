import React, { useEffect, useState, useContext } from "react";
import { fetchCharacters } from "../api/charactersFetcher";
import CharacterCard from "../Components/CharacterCard";
import "./_styles.css";
import { ThemeContext } from "../Components/ThemeProvider";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters(currentPage);
        setCharacters(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, [currentPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const filterCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  if (characters.length === 0) {
    return <p>There are no characters</p>;
  }

  return (
    <div className={isDarkMode && "darkContainer"}>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          className="searchBar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filterCharacters.length === 0 && (
        <p className="notFound">No characters found</p>
      )}
      <div className="charactersContainer">
        {filterCharacters.map((Character) => (
          <CharacterCard key={Character.id} data={Character} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage}>Previous</button>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Characters;
