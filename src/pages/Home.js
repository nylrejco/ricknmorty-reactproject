import React, { useState } from "react";
import CharacterList from "../components/CharList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavBar from "../components/NavBar";
import Hamburger from "hamburger-react";

const Home = () => {
  const [episodeFilter, setEpisodeFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      window.location.replace("/");
      // const uid = user.uid;
      // console.log(uid)
      // ...
    }
  });

  const showNavBar = () => {
    document.querySelector(".nav-sidebar").classList.toggle("show");
  }

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

  return (
    <div className="layout">
      <div className="nav-layout">
        <div className="nav-sidebar">
          <NavBar
            episodeFilter={episodeFilter}
            setEpisodeFilter={setEpisodeFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            onSignOut={onSignOut}
            className="nav-sidebar"
          />
        </div>
      </div>
      <div>
        <div className="header">
          <div className="toggle-btn" onClick={showNavBar}>
            <Hamburger className="toggle-btn" />
          </div>
          <h2>Home Page</h2>
        </div>
        <CharacterList
          episodeFilter={episodeFilter}
          setEpisodeFilter={setEpisodeFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
        />
      </div>
    </div>
  );
};

export default Home;
