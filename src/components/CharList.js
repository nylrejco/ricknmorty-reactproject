import React, { useEffect, useState } from "react";
import Character from "../components/CharCard";

const CharacterList = (props) => {
  const { episodeFilter, setEpisodeFilter, locationFilter, setLocationFilter } =
    props;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data["results"]);
      });
  }, []);

  // console.log(characters);

  const CharacterDataList = characters
    // .filter((character) => character.episode.includes(episodeFilter))
    .map((character) => {
      const CharacterCards = () => {
        return (
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
        );
      };
      // console.log(locationFilter)

      const CharacterOnEpisode = episodeFilter.every((episode) =>
        character.episode.includes(episode)
      );

      // const characterURL = `"https://rickandmortyapi.com/api/character/${character.id}"`

      // console.log(characterURL)

      const ResidentOnLocation = locationFilter.includes(character.url)
      // console.log(ResidentOnLocation)

      const emptyEpisodeFilter = episodeFilter.length === 0
      const emptyLocationFilter = locationFilter.length === 0

      if (emptyEpisodeFilter && emptyLocationFilter ) {
        return CharacterCards();
      } else if (CharacterOnEpisode && emptyLocationFilter) {
        return CharacterCards();
      } else if (ResidentOnLocation && emptyEpisodeFilter) {
        return CharacterCards();
      } else if (ResidentOnLocation && CharacterOnEpisode) {
        return CharacterCards();
      } else return;
    });

  return (
    <div className="container">
      <div className="row">{CharacterDataList}</div>
    </div>
  );
};

export default CharacterList;
