import { Divider, ListItem, ListItemText } from "@mui/material";
import { Divide } from "hamburger-react";
import React from "react";

const EpisodeButton = (props) => {
  const { classes } = props;

  const { name, isPressed, episodeFilter, setEpisodeFilter, url } = props;

  const addEpisodeFilter = (url) => {
    const newEpisode = url;
    setEpisodeFilter([...episodeFilter, newEpisode]);
  };

  const handleOnClick = () => {
    if (episodeFilter.includes(url)) {
      // var urlIndex = episodeFilter.indexOf(url)
      setEpisodeFilter(episodeFilter.filter((episode) => episode !== url));
    } else {
      addEpisodeFilter(url);
    }
  };

  return (
    // <button
    //   type="button"
    //   className="btn toggle-btn"
    //   aria-pressed={isPressed}
    //   // onClick={() => setEpisodeFilter(url)}
    //   onClick={handleOnClick}
    // >
    //   <p>{name}</p>
    // </button>
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
