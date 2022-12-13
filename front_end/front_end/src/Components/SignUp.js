import React, { useState } from "react";
import "./SignUp.css"
import "../App.css"
import { signup } from "../api";
import { Redirect } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    return(
        <div>
        <div className="nav_bar">
            <Link to="../">Home</Link>
            <Link to="../sign-in">Sign In</Link>
        </div>
        <div className="signup">
            <h1>VAMM Housing</h1>
            <h2>Sign up for an account now!</h2>
            <div>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name"></input>
                <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} placeholder="Second name"></input>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button onClick={() => signup(firstName,secondName,email,password).then((v) => setStatus(v.statusText))}>Sign Up!</button>
                <p>{status}</p>
            </div>
        </div>
        </div>
    );
}