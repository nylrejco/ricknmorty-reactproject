import React from "react";

const EpisodeButton = (props) => {
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
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      // onClick={() => setEpisodeFilter(url)}
      onClick={handleOnClick}
    >
      <span>{name}</span>
    </button>
  );
};

export default EpisodeButton;
