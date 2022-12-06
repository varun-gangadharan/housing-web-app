import React, { useState } from "react";
import "./HomePage.css"
import "../App.css"
import Listing from "./Listing";

export default function HomePage() {

    return(
        <div>
            <div class="nav_bar">
                <h2>VAMM Housing</h2>
                <a>Sign In</a>
                <a>About</a>
            </div>
            <div class="main_content">
                <input type="text" placeholder="Search"></input>
                <button>Go</button>
                <ul>
                    <li><Listing></Listing></li>
                    <li><Listing></Listing></li>
                    <li><Listing></Listing></li>
                    <li><Listing></Listing></li>
                </ul>
            </div>
        </div>
    );
}