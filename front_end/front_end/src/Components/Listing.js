import "../App.css"
import "./Listing.css"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

export default function Listing(props){
    return (
        <div className="listing">
            <h2>{props.location}</h2>
            <img src={props.picture}></img>
            <div className="listing_info">
                <ul>{props.price} per month</ul>
                <ul>{props.bedrooms} bed</ul>
                <ul>{props.bathrooms} bath</ul>
                <ul>{props.squareFootage} sqft.</ul>
                <ul>{props.company}</ul>
                <ul><a className="more_link"><Link to="details/1">See more..</Link></a></ul>
            </div>
        </div>
    );
}
