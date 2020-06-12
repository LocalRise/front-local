import React, { useEffect, useState, Component } from "react"
import { geolocated } from "react-geolocated";
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import MapComponent from "./MapComponent"
import LoadingMap from "./LoadingMap"

const API_KEY = "AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ";

const defaultLampange = { lat: 18.288966, lng: 99.491665 }
const defaultCenter = { lat: 13.736717, lng: 100.523186 }


class GetDistance extends Component {
  componentDidMount() {
    const { google } = this.props
    const service = new google.maps.DistanceMatrixService();
    function calDistance(origins, destinations) {
      service.getDistanceMatrix(
        {
          origins: [origins],
          destinations: [destinations],
          travelMode: "DRIVING"
        },
        (response, status) => {
          var distance = response.rows[0].elements[0].distance.value
          console.log("response", distance);
          console.log("status", status);
        }
      )
    }
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY),
  LoadingContainer: LoadingMap
})(GetDistance)