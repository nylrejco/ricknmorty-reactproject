import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is not signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      window.location.replace("/");
      const uid = user.uid;
      // ...
    }
  });

  const onLogin = (e) => {
    e.preventDefault();

    // console.log(email, password)

    // console.log(auth)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        window.location.replace("/");
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div>

      <div className="container my-5">
        <h2 className="text-center my-5">Enter your credentials</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form id="login-form" onSubmit={(e) => onLogin(e)}>
              <input
                type="text"
                id="username"
                className="form-control mb-3"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                id="password"
                className="form-control mb-3"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button type="submit" className="btn btn-block btn-primary">
                Log In
              </button>
              <a href="/signup" className="btn btn-block text-primary">
                Not yet registered? Create a new account now!
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default LoginForm;
