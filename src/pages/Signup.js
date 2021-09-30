import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const onSignup = (e) => {
    e.preventDefault();

    console.log(email, password);

    const auth = getAuth();
    const passwordMatch = password === confirmPassword;

    if (!passwordMatch) {
      alert("Password does not match. Please enter again");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.replace("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
        // ..
      });
  };

  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center my-5">Create new account</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form id="signup-form" onSubmit={(e) => onSignup(e)}>
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
              <input
                type="password"
                id="confirm-password"
                className="form-control mb-3"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <button type="submit" className="btn btn-block btn-primary">
                Sign Up
              </button>
              <a href="/login" className="btn btn-block text-primary">
                Already registered? Log-in to your account now!
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
