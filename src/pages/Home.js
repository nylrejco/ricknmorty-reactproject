import React, { useState } from "react";
import CharacterList from "../components/CharList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavBar from "../components/NavBar";
// import Hamburger from "hamburger-react";
import { Box } from "@mui/system";
import {
  AppBar,
  Avatar,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { deepOrange } from "@mui/material/colors";
import { palette } from '@mui/system';

const drawerWidth = 240;

const Home = (props) => {
  const [episodeFilter, setEpisodeFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      window.location.replace("/");
      // const uid = user.uid;
      // console.log(user)
      // ...
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

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    // <div className="layout">
    //   <div className="nav-layout">
    //     <div className="nav-sidebar">
    //       <NavBar
    //         episodeFilter={episodeFilter}
    //         setEpisodeFilter={setEpisodeFilter}
    //         locationFilter={locationFilter}
    //         setLocationFilter={setLocationFilter}
    //         onSignOut={onSignOut}
    //         className="nav-sidebar"
    //       />
    //     </div>
    //   </div>
    //   <div className="card-layout">
    //     <div className="header">
    //       <div className="toggle-btn-show" onClick={showNavBar}>
    //         <Hamburger />
    //       </div>
    //       <h2>Home Page</h2>
    //     </div>
    //     <CharacterList
    //       episodeFilter={episodeFilter}
    //       setEpisodeFilter={setEpisodeFilter}
    //       locationFilter={locationFilter}
    //       setLocationFilter={setLocationFilter}
    //     />
    //   </div>
    // </div>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="filters"
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
            },
          }}
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
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="characters-box">
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
