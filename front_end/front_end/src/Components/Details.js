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
          
      </div>
  );
  }
