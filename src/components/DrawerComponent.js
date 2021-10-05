import {
  AppBar,
  Card,
  CardMedia,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
  TableFooter,
} from "@mui/material";
import { useState } from "react";
import Episodes from "./EpisodeList";
import Locations from "./LocationList";

const DrawerComponent = (props) => {
  // const {window} = props;
  const {
    episodeFilter,
    setEpisodeFilter,
    locationFilter,
    setLocationFilter,
    onSignOut,
  } = props;

  const [openEpisodes, setOpenEpisodes] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);

  const handleClickEpisodes = () => {
    setOpenEpisodes(!openEpisodes);
  };

  const handleClickLocations = () => {
    setOpenLocations(!openLocations);
  };

  return (
    <>
      <Toolbar position="fixed">
        <CardMedia
          component="img"
          height="140"
          image="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
          alt="rickandmorty"
          className="sidebar-img"
        />
      </Toolbar>
      <Divider />
      <List className="sidebar-scroll">
        <ListItemButton onClick={handleClickEpisodes}>
          <ListItemText primary="Episodes" className="filter-title"/>
        </ListItemButton>
        {openEpisodes && (
          <Episodes
            episodeFilter={episodeFilter}
            setEpisodeFilter={setEpisodeFilter}
          />
        )}
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={handleClickLocations}>
          <ListItemText primary="Residence" className="filter-title"/>
        </ListItemButton>
        {openLocations && (
          <Locations
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
          />
        )}
      </List>
      <Divider />
      <div className="signout-container">
        <ListItemButton onClick={onSignOut} className="signout-btn">
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </div>
    </>
  );
};

export default DrawerComponent;
