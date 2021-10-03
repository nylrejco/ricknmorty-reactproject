import React, { useEffect, useState } from "react";
import Character from "../components/CharCard";

const CharacterList = (props) => {
  const { episodeFilter, locationFilter } = props;
  const [characters, setCharacters] = useState([]);
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [charactersURLs, setCharactersURLs] = useState([]);

  const characterPageURL = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(characterPageURL)
      .then((response) => response.json())
      .then((data) => {
        // setCharacters(data["results"]);
        setCharactersInfo(data["info"]);
      });
  }, []);

  useEffect(() => {
    setCharactersURLs([]);
    for (let i = 1; i <= charactersInfo.pages; i++) {
      let characterPages = `${characterPageURL}?page=${i}`;
      setCharactersURLs((charactersURLs) => [
        ...charactersURLs,
        characterPages,
      ]);
    }
  }, [charactersInfo]);

  //console.log(charactersURLs);

  

  useEffect(() => {
    let requestCharacters = charactersURLs.map((charUrl) => fetch(charUrl));
    Promise.all(requestCharacters)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        let charactersArray = [];
        data.map((char) => {
          return charactersArray = charactersArray.concat(char["results"]);
          // console.log(charactersArray.length);
        });
        setCharacters(charactersArray);
      });
  }, [charactersURLs]);

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

      const ResidentOnLocation = locationFilter.includes(character.url);
      // console.log(ResidentOnLocation)

      const emptyEpisodeFilter = episodeFilter.length === 0;
      const emptyLocationFilter = locationFilter.length === 0;

      if (emptyEpisodeFilter && emptyLocationFilter) {
        return CharacterCards();
      } else if (CharacterOnEpisode && emptyLocationFilter) {
        return CharacterCards();
      } else if (ResidentOnLocation && emptyEpisodeFilter) {
        return CharacterCards();
      } else if (ResidentOnLocation && CharacterOnEpisode) {
        return CharacterCards();
      } else return null;
    });

  return (
    <div className="characters-container">
      {CharacterDataList}
    </div>
  );
};

export default CharacterList;
