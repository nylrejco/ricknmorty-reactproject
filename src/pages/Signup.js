import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();

  let history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      history.push("/home");
      // const uid = user.uid;
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
        // const user = userCredential.user;
        history.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
      });
  };

  return (
    <div className="container container-input">
      <div className="container my-5" id="form-container">
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
              <button type="submit" className="btn btn-block" id="btn-form">
                Sign Up
              </button>
              <a href="/" className="btn btn-block" id="form-link">
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
