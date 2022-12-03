import React, { useState } from "react";
import "./HomePage.css"
import "../App.css"

export default function HomePage() {

    return(
        <div>
            <div class="nav_bar">
                <h2>VAMM Housing</h2>
                <a>Home</a>
                <a>About</a>
            </div>
            <div class="main_content">
                <ul>
                    <li>Listing 1</li>
                    <li>Listing 2</li>
                    <li>Listing 3</li>
                    <li>Listing 4</li>
                </ul>
            </div>
        </div>
    );
}