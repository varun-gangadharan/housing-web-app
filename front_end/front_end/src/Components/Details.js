import React, { useState, useEffect} from "react";
import "../App.css"
import './Details.css';
import Listing from "./Listing";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import { getListings} from "../api";

  export default function Details() {

    return(
      <div>
          <div className="nav_bar">
              <h2>VAMM</h2>
              <Link to="sign-in">Sign In</Link>
          </div>  
          <div>
            <h1>Apartment for Rent</h1>
            <p>
        This beautiful apartment is located in the heart of the city, with easy access to public transportation, shops, and restaurants.
            </p>
            <h3>Features</h3>
            <ul>
          <li>2 bedrooms</li>
          <li>1 bathroom</li>
          <li>Fully equipped kitchen</li>
          <li>Balcony with city views</li>
          <li>On-site laundry facilities</li>
            </ul>
            <h2>Details</h2>
          <p> Price: $1,500 per month
          Security deposit: $1,000
          Available: January 1st, 2023
          </p>
          <h3>Contact</h3>
      <p>
        Please contact us for more information or to schedule a showing.
      </p>
      <p>
        Phone: 555-555-5555
        Email: info@apartmentrental.com
      </p>
          </div>
          
      </div>
  );
  }
