import React, { useEffect, useState } from "react";
import Character from "../components/CharCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  // console.log(characters)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data["results"]);
      });
  }, []);

  const CharacterDataList = characters.map((character) => (
    <Character
      key={character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      origin={character.origin}
      location={character.location}
      image={character.image}
      episode={character.episode}
    />
  ));

  return (
  <div className="container">
    <div className="row">{CharacterDataList}</div></div>
  );
};

export default CharacterList;
