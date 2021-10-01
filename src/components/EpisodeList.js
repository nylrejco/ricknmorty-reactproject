import React, { useEffect, useState } from "react";
import EpisodeButton from "./EpisodeButton";

const Episodes = (props) => {
  const { episodeFilter, setEpisodeFilter, addEpisodeFilter } = props;
  const [episodes, setEpisodes] = useState([]);
  // console.log(episodes)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data["results"]);
      });
  }, []);

  useEffect(() => {
    console.log(episodeFilter);
  }, [episodeFilter]);

  // console.log(episodes)

  const EpisodeList = episodes.map((episode) => (
    <EpisodeButton
      key={episode.name}
      name={episode.name}
      id={episode.id}
      url={episode.url}
      isPressed={episodeFilter.includes(episode.url)}
      setEpisodeFilter={setEpisodeFilter}
      episodeFilter={episodeFilter}
      addEpisodeFilter={addEpisodeFilter}
    />
  ));

  // console.log(episodeFilter)

  return (
    <div className="container">
      <div className="row">{EpisodeList}</div>
    </div>
  );
};

export default Episodes;
