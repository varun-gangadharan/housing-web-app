import React, { useState } from "react";
import "./HomePage.css"
import "../App.css"
import Listing from "./Listing";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  

export default function HomePage() {

    return(
        <div>
            <div className="nav_bar">
                <h2>VAMM</h2>
                <Link to="sign-in">Sign In</Link>
            </div>
            <div className="main_content">
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