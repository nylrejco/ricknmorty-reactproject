import React, { useState } from "react";
import CharacterList from "../components/CharList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavBar from "../components/NavBar";

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
    <div>
      <div>
        <NavBar
          episodeFilter={episodeFilter}
          setEpisodeFilter={setEpisodeFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
        />
      </div>
      <h2>Home Page</h2>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onSignOut}
      >
        Sign Out
      </button>
      <div>
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
