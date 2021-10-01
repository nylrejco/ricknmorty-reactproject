import React, { useEffect, useState } from "react";
import LocationButton from "./LocationButton";

const Locations = (props) => {
  const { locationFilter, setLocationFilter } = props;
  const [locations, setLocations] = useState([]);
  // console.log(episodes)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data["results"]);
      });
  }, []);

  useEffect(() => {
    console.log(locationFilter);
  }, [locationFilter]);

  // const LocationResidents = locations.map((location) => (
  //   console.log(location.residents)
  // ))

  //console.log(LocationResidents)

  const LocationList = locations.map((location) => (
    <LocationButton
      key={location.name}
      name={location.name}
      residents={location.residents}
      // isPressed={location.name === filter}
      locationFilter={locationFilter}
      setLocationFilter={setLocationFilter}
    />
  ));

  return (
    <div className="container">
      <div className="row">{LocationList}</div>
    </div>
  );
};

export default Locations;
