import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import DrawerComponent from "./DrawerComponent";

const NavBar = (props) => {
  const {
    episodeFilter,
    setEpisodeFilter,
    locationFilter,
    setLocationFilter,
    onSignOut,
  } = props;

  return (
    <div className="sidebar-nav">
      <DrawerComponent
        episodeFilter={episodeFilter}
        setEpisodeFilter={setEpisodeFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        onSignOut={onSignOut}
      />
    </div>
  );
};

export default NavBar;
