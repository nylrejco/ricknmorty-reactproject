import React, { useState } from "react";
import CharacterList from "../components/CharList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavBar from "../components/NavBar";
// import Hamburger from "hamburger-react";
import { Box, createTheme } from "@mui/system";
import {
  AppBar,
  Avatar,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { grey, green } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import darkScrollbar from "@mui/material/darkScrollbar";
import { ThemeProvider } from "@emotion/react";
import rickAndMortyText from "../img/rick-and-morty-text.png"

const drawerWidth = 250;

const Home = (props) => {
  const [episodeFilter, setEpisodeFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("unknown")
  const { window } = props;
  const auth = getAuth();

  let history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      history.push("/");
      // const uid = user.uid;
      // console.log(user)
      // ...
    } else {
      setUserEmail(user.email);
    }
  });

  const showNavBar = () => {
    document.querySelector(".nav-sidebar").classList.toggle("show");
  };

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // window.replace.location("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
      });
  };

  // const addEpisodeFilter = (url) => {
  //   const newEpisode = {url};
  //   setEpisodeFilter([...episodeFilter, newEpisode])
  // }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "rgb(60, 62, 68)",
        }}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="rick-n-morty-text">
            Rick and Morty Characters
          </div>
          <div className="avatar-user">
            <Avatar sx={{ bgcolor: green[900] }}>{userEmail[0].toUpperCase()}</Avatar>
          </div>
          <div className="user-email">{userEmail}</div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="filters"
        className="sidebar-box"
      >
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(60, 62, 68)",
              color: "#eeeeee",
            },
          }}
          className="sidebar-drawer"
        >
          <NavBar
            episodeFilter={episodeFilter}
            setEpisodeFilter={setEpisodeFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            onSignOut={onSignOut}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(60, 62, 68)",
              color: "#eeeeee",
            },
          }}
          open
          className="sidebar-drawer"
        >
          <NavBar
            episodeFilter={episodeFilter}
            setEpisodeFilter={setEpisodeFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            onSignOut={onSignOut}
          />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: grey[900] }}>
        <Toolbar />
        <CharacterList
          episodeFilter={episodeFilter}
          setEpisodeFilter={setEpisodeFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
        />
      </Box>
    </Box>
  );
};

export default Home;
