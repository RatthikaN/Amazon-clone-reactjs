import React, { useState } from "react";
import amazon_logo from "../assets/amazon_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { toast } from "react-toastify";
import "./SignIn.css";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign in successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });

      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      toast.error("No account exists, please create one first!");
    }
  };

  return (
    <div className="signin-wrapper">
      <Link to="/" className="signin-logo-container">
        <img src={amazon_logo} alt="Amazon Logo" className="signin-logo" />
      </Link>

      <div className="signin-card">
        <h2 className="signin-title">Sign in</h2>

        <div className="signin-field">
          <label>Email or mobile number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="signin-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button onClick={signIn} className="signin-button">
          Sign in
        </button>

        <p className="signin-terms">
          By continuing, you agree to Amazon's{" "}
          <span className="signin-link">Conditions of Use</span> and{" "}
          <span className="signin-link">Privacy Notice</span>.
        </p>

        <div className="signin-bottom">
          <p>New to Amazon?</p>
          <Link to="/signup">
            <div className="signin-create-button">Create your Amazon account</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
