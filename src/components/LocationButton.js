import { Divider, ListItem, ListItemText } from "@mui/material";
import React from "react";

const LocationButton = (props) => {
  const { name, isPressed, locationFilter, setLocationFilter, residents } =
    props;

  const addLocationFilter = (residents) => {
    if (residents.length === 0) {
      alert("There are no residents in this location.");
    }
    setLocationFilter(residents);
  };

  const handleOnClick = () => {
    if (locationFilter === residents) {
      setLocationFilter([]);
    } else {
      addLocationFilter(residents);
    }
  };

  return (
    <>
      <Divider />
      <ListItem
        button
        aria-pressed={isPressed}
        onClick={handleOnClick}
        className={`select-${isPressed}`}
      >
        <ListItemText secondary={name} />
      </ListItem>
    </>
  );
};

export default LocationButton;
