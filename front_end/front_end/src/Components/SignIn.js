import '../App.css';
import React, { Component, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Signin.css';
import { Redirect } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { login } from '../api';

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  return(
      <div className="login">
          <h1>VAMM Housing</h1>
          <div className="nav_bar">
                <Link to="home-page">Home</Link>
                <Link to="sign-up">Sign Up</Link>
            </div>
          <h2>Sign in now!</h2>
          <div>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
              <button onClick={() => login(email,password).then((v) => setStatus((v.body == {}) ? "Login unsuccessful" : "Logged in successfully"))}>Sign In!</button>
              <p>{status}</p>
          </div>
      </div>
  );
}


