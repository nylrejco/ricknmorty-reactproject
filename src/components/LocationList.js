import React, { useEffect, useState } from "react";
import LocationButton from "./LocationButton";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  // console.log(episodes)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data["results"]);
      });
  }, []);

  // console.log(locations)

  const LocationList = locations.map((location) => (
    <LocationButton
      key={location.name}
      name={location.name}
      // isPressed={location.name === filter}
      // setFilter={setFilter}
    />
  ));

  return (
    <div className="container">
      <div className="row">{LocationList}</div>
    </div>
  );
};

export default Locations;
