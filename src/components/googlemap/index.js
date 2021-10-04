/* global google */
import React, { useEffect } from "react";

// import { Container, Grid } from '@material-ui/core';
import { Loader } from "@googlemaps/js-api-loader";
require('dotenv');



const GoogleMap = () => {
  
  useEffect(() => {


    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`,
      version: "weekly",
      libraries: ["places"]
    });
    loader.load().then(() => {
      const homeMarker = { lat: 47.02337814154326, lng: -122.92261575767108 }
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.036, lng: -122.898 },
      
        zoom: 13,
      });
      new google.maps.Marker({
        position: homeMarker,
        map: map,
      })
    })
    .catch(e => {
      console.log(e.message);
  });
}, []);
return (
  <>

    <div style={{ height: "450px" }} id="map"></div>
  </>
);
}

export default GoogleMap;