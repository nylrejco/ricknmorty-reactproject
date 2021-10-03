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

const NavBar = (props) => {
  const {
    episodeFilter,
    setEpisodeFilter,
    locationFilter,
    setLocationFilter,
    onSignOut,
  } = props;

  return (
    // <Navbar sticky="left" bg="light" expand="lg" className="Navbar-main">
    //   <Container>
    //     <Navbar.Brand href="/home">Rick and Morty Characters</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {/* <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link> */}
    //         <NavDropdown title="Episodes" id="basic-nav-dropdown">
    //           {/* <NavDropdown.Item href="#action/3.1"> */}
    //           <Episodes
    //             episodeFilter={episodeFilter}
    //             setEpisodeFilter={setEpisodeFilter}
    //           />
    //           {/* <button type="button" className="btn toggle-btn">
    //               <span>Value</span>
    //             </button>
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item> */}
    //         </NavDropdown>
    //         <NavDropdown title="Location" id="basic-nav-dropdown">
    //           <Locations
    //             locationFilter={locationFilter}
    //             setLocationFilter={setLocationFilter}
    //           />
    //         </NavDropdown>
    //         <button
    //           type="button"
    //           className="btn btn-block btn-primary"
    //           onClick={onSignOut}
    //         >
    //           Sign Out
    //         </button>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <ProSidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Episode">
            <Episodes
              episodeFilter={episodeFilter}
              setEpisodeFilter={setEpisodeFilter}
            />
          </SubMenu>
          <SubMenu title="Residence">
            <Locations
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
            />
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default NavBar;
