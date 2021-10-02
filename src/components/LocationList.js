import React, { useEffect, useState } from "react";
import LocationButton from "./LocationButton";

const Locations = (props) => {
  const { locationFilter, setLocationFilter } = props;
  const [locations, setLocations] = useState([]);
  const [locationsInfo, setLocationsInfo] = useState([]);
  const [locationsURLs, setLocationsURLs] = useState([]);

  const locationPageURL = "https://rickandmortyapi.com/api/location";

  useEffect(() => {
    fetch(locationPageURL)
      .then((response) => response.json())
      .then((data) => {
        setLocationsInfo(data["info"]);
      });
  }, []);

  useEffect(() => {
    console.log(locationFilter);
  }, [locationFilter]);

  useEffect(() => {
    setLocationsURLs([]);
    for (let i = 1; i <= locationsInfo.pages; i++) {
      let locationPages = `${locationPageURL}?page=${i}`;
      setLocationsURLs((locationsURLs) => [...locationsURLs, locationPages]);
    }
  }, [locationsInfo]);

  useEffect(() => {
    let requestLocations = locationsURLs.map((locUrl) => fetch(locUrl));
    Promise.all(requestLocations)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        let locationsArray = [];
        data.map((loc) => {
          return locationsArray = locationsArray.concat(loc["results"]);
          // console.log(charactersArray.length);
        });
        setLocations(locationsArray);
      });
  }, [locationsURLs]);

  // const LocationResidents = locations.map((location) => (
  //   console.log(location.residents)
  // ))

  //console.log(LocationResidents)

  const LocationList = locations.map((location) => (
    <LocationButton
      key={location.name}
      name={location.name}
      residents={location.residents}
      isPressed={locationFilter === location.residents}
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
