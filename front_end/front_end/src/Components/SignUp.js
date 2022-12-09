import React, { useState } from "react";
import "./SignUp.css"
import "../App.css"

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="signup">
            <h1>VAMM Housing</h1>
            <h2>Sign up for an account now!</h2>
            <div>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name"></input>
                <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} placeholder="Second name"></input>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button>Sign Up!</button>
            </div>
        </div>
    );
}