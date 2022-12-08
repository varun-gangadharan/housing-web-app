import React, { useState } from "react";
import "../App.css"
import './Details.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

  class Details extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        listing: null, // will contain the details of the listing
      };
    }
  
    componentDidMount() {
      // fetch the details of the listing from the API
      const listingId = this.props.match.params.id;
      fetch(`/api/listings/${listingId}`)
        .then(res => res.json())
        .then(listing => {
          this.setState({ listing });
        });
    }
  
    handleBackClick = () => {
      // go back to the home page when the back button is clicked
      this.props.history.push('/');
    }
  
    render() {
      const { listing } = this.state;
  
      if (!listing) {
        // if the details of the listing are not yet available,
        // show a loading message
        return <div>Loading...</div>;
      }
  
      return (
        <div className="details-page">
          {/* display the image of the listing */}
          <img src={listing.imageUrl} alt="Listing" className="details-page__image" />
  
          {/* display the details of the listing */}
          <h1 className="details-page__title">{listing.title}</h1>
          <p className="details-page__description">{listing.description}</p>
          <p className="details-page__price">Price: {listing.price}</p>
  
          {/* back button */}
          <button onClick={this.handleBackClick} className="details-page__back-button">Back</button>
        </div>
      );
    }
  }
  
  export default Details;