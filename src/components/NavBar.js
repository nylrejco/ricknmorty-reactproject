import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import Episodes from "../components/EpisodeList";
import Locations from "../components/LocationList";

const NavBar = (props) => {
  const {
    episodeFilter,
    setEpisodeFilter,
    locationFilter,
    setLocationFilter,
  } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Rick and Morty Characters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Episodes" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1"> */}
              <Episodes
                episodeFilter={episodeFilter}
                setEpisodeFilter={setEpisodeFilter}
              />
              {/* <button type="button" className="btn toggle-btn">
                  <span>Value</span>
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Location" id="basic-nav-dropdown">
              <Locations
                locationFilter={locationFilter}
                setLocationFilter={setLocationFilter}
              />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
