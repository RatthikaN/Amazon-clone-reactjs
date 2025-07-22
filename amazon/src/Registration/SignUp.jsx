import React, { useState } from "react";
import amazon_logo from "../assets/amazon_logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import "./SignUp.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      setName("");
      setEmail("");
      setPassword("");

      toast.success("Your account has been created", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
    } catch (error) {
        // console.log(error.code, error.message)

      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="signup-wrapper">
      <Link to="/" className="signup-logo-container">
        <img src={amazon_logo} alt="Amazon Logo" className="signup-logo" />
      </Link>

      <div className="signup-card">
        <h2 className="signup-title">Create account</h2>

        <div className="signup-field">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
          />
        </div>

        <div className="signup-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="signup-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
        </div>

        <p className="signup-password-note">
          Passwords must be at least 6 characters.
        </p>

        <button onClick={signUp} className="signup-button">
          Create your Amazon account
        </button>

        <p className="signup-terms">
          By creating an account or logging in, you agree to Amazon's{" "}
          <span className="signup-link">Conditions of Use</span> and{" "}
          <span className="signup-link">Privacy Policy</span>.
        </p>

        <hr className="signup-divider" />

        <div className="signup-footer">
          <span>Already have an account?</span>
          <Link to="/signin">
            <span className="signin-link">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
