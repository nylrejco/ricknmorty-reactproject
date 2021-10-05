import React from "react";
// import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import Episodes from "../components/EpisodeList";
import Locations from "../components/LocationList";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
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
    // <ProSidebar>
    //   <SidebarHeader>Header</SidebarHeader>
    //   <SidebarContent>
    //     <Menu iconShape="square">
    //       <MenuItem>Dashboard</MenuItem>
    //       <SubMenu title="Episode">
    //         <Episodes
    //           episodeFilter={episodeFilter}
    //           setEpisodeFilter={setEpisodeFilter}
    //         />
    //       </SubMenu>
    //       <SubMenu title="Residence">
    //         <Locations
    //           locationFilter={locationFilter}
    //           setLocationFilter={setLocationFilter}
    //         />
    //       </SubMenu>
    //     </Menu>
    //   </SidebarContent>
    // </ProSidebar>
    <>
      <DrawerComponent
        episodeFilter={episodeFilter}
        setEpisodeFilter={setEpisodeFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />
    </>
  );
};

export default NavBar;
