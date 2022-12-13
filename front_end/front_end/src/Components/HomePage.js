import React, { useEffect, useState } from "react";
import "./HomePage.css"
import "../App.css"
import Listing from "./Listing";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

import { getListings, signup } from "../api";

export default function HomePage() {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        getListings().then((e) => {
            setListings(e);
        });
    });

    return(
        <div>
            <div className="nav_bar">
                <h2>VAMM</h2>
                <Link to="sign-in">Sign In</Link>
                <Link to="sign-up">Sign Up</Link>
            </div>
            <div className="main_content">
                <input type="text" placeholder="Search"></input>
                <button>Go</button>
                <ul>
                    {listings.map((listing, i) => 
                    <Listing price={listing.price}
                             location={listing.location}
                             bedrooms={listing.bedrooms}
                             bathrooms={listing.bathrooms}
                             squareFootage={listing.squareFootage}
                             company={listing.company}
                             picture={listing.picture}></Listing>)}                </ul>
            </div>
        </div>
    );
}