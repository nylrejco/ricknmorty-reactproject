import { Divider, ListItem, ListItemText } from "@mui/material";
import React from "react";

const EpisodeButton = (props) => {
  const { name, isPressed, episodeFilter, setEpisodeFilter, url } = props;

  const addEpisodeFilter = (url) => {
    const newEpisode = url;
    setEpisodeFilter([...episodeFilter, newEpisode]);
  };

  const handleOnClick = () => {
    if (episodeFilter.includes(url)) {
      setEpisodeFilter(episodeFilter.filter((episode) => episode !== url));
    } else {
      addEpisodeFilter(url);
    }
  };

  return (
    <>
      <Divider />
      <ListItem
        button
        aria-pressed={isPressed}
        onClick={handleOnClick}
        selected={episodeFilter.includes(url)}
        className={`select-${episodeFilter.includes(url)}`}
      >
        <ListItemText secondary={name}/>
      </ListItem>
    </>
  );
};

export default EpisodeButton;
