import React, { useState } from "react";

const Character = (props) => {
  const { id, name, status, species, location, image, episode } = props;
  const [firstAppearannce, setfirstAppearannce] = useState("");
  const [firstAppearannceURL, setfirstAppearannceURL] = useState("");

  fetch(episode[0])
    .then((response) => response.json())
    .then((data) => {
      setfirstAppearannce(`${data.episode} : ${data.name}`);
      setfirstAppearannceURL(data.url);
    });

  return (
    <div className="card-container">
      <div className="image-holder">
        <img src={image} alt={`${id} : ${name}`} />
      </div>
      <div className="card-contents">
        <div className="card-character">
          <h5 className="character-name">{name}</h5>
          <span className="character-status">
            <span className="status-dot" id={status}></span>
            <span className="character-text">{`${status} - ${species}`}</span>
          </span>
        </div>
        <div className="card-details">
          <span className="details-text">Last known location: </span>
          <a href={location.url} className="details-link">
            {location.name}
          </a>
        </div>
        <div className="card-details">
          <span className="details-text">First seen in: </span>
          <a href={firstAppearannceURL} className="details-link">
            {firstAppearannce}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Character;
