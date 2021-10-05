import React, { useEffect, useState } from "react";
import EpisodeButton from "./EpisodeButton";

const Episodes = (props) => {
  const { episodeFilter, setEpisodeFilter } = props;
  const [episodes, setEpisodes] = useState([]);
  const [episodesInfo, setEpisodesInfo] = useState([]);
  const [episodesURLs, setEpisodesURLs] = useState([]);

  const episodePageURL = "https://rickandmortyapi.com/api/episode";

  // console.log(episodes)

  useEffect(() => {
    fetch(episodePageURL)
      .then((response) => response.json())
      .then((data) => {
        setEpisodesInfo(data["info"]);
      });
  }, []);

  useEffect(() => {
    console.log(episodeFilter);
  }, [episodeFilter]);

  useEffect(() => {
    setEpisodesURLs([]);
    for (let i = 1; i <= episodesInfo.pages; i++) {
      let episodePages = `${episodePageURL}?page=${i}`;
      setEpisodesURLs((episodesURLs) => [...episodesURLs, episodePages]);
    }
  }, [episodesInfo]);

  

  useEffect(() => {
    let requestEpisodes = episodesURLs.map((epUrl) => fetch(epUrl));
    Promise.all(requestEpisodes)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        let episodesArray = [];
        data.map((ep) => {
          return episodesArray = episodesArray.concat(ep["results"]);
          // console.log(charactersArray.length);
        });
        setEpisodes(episodesArray);
      });
  }, [episodesURLs]);

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
    />
  ));

  // console.log(episodeFilter)

  return (
    <>
      {EpisodeList}
    </>
  );
};

export default Episodes;
