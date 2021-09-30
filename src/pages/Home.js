import React from "react";
import CharacterList from "../components/CharList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const Home = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      window.location.replace("/login");
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

  return (
    <div>
      <h2>Home Page</h2>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onSignOut}
      >
        Sign Out
      </button>
      <div><CharacterList /></div>
    </div>
  );
};

export default Home;
