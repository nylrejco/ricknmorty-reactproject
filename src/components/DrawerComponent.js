import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openEpisodes, setOpenEpisodes] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  const handleClickEpisodes = () => {
    setOpenEpisodes(!openEpisodes);
  };

  const handleClickLocations = () => {
    setOpenLocations(!openLocations);
  };

  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton onClick={handleClickEpisodes}>
          <ListItemText primary="Episodes" />
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
          <ListItemText primary="Residence" />
        </ListItemButton>
        {openLocations && (
          <Locations
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          />
        )}
      </List>
    </>
  );
};

export default DrawerComponent;
