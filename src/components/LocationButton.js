import React from "react";

const LocationButton = (props) => {
  const { name, isPressed, locationFilter, setLocationFilter, residents } =
    props;

  const addLocationFilter = (residents) => {
    if (residents.length === 0) {
      // setLocationFilter([]);
      alert("There are no residents in this location.");
    }
    setLocationFilter(residents);
  };

  const handleOnClick = () => {
    // console.log(residents)
    // console.log(locationFilter)
    if (locationFilter === residents) {
      setLocationFilter([]);
      // addLocationFilter(residents)
    } else {
      addLocationFilter(residents)
    }
  };

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      // onClick={() => setLocationFilter(residents)}
      onClick={handleOnClick}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default LocationButton;
