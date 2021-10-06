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
        });
        setLocations(locationsArray);
      });
  }, [locationsURLs]);

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
    <div className="filter-text" >
      {LocationList}
    </div>
  );
};

export default Locations;
