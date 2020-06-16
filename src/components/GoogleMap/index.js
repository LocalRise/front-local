import React, { useEffect, useState, Component } from "react"
import { geolocated } from "react-geolocated";
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import MapComponent from "./MapComponent"
import LoadingMap from "./LoadingMap"

const API_KEY = "AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ";

const defaultLampange = { lat: 18.288966, lng: 99.491665 }
const defaultCenter = { lat: 13.736717, lng: 100.523186 }

// https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=18.288966,99.491665&destinations=18.282498,99.472319&key=AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return !this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled ? (
            <div className="rounded-lg overflow-hidden">
                <MapComponent
                    isMarkerShown={true}
                    posit={defaultLampange}
                    zoom={12}
                    setCustomerLocation={this.props.setCustomerLocation} />
            </div>
        ) : this.props.coords ? (
            <div className="rounded-lg overflow-hidden">
                <MapComponent
                    isMarkerShown={true}
                    posit={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
                    zoom={16}
                    setCustomerLocation={this.props.setCustomerLocation} />
            </div>
        ) : (<LoadingMap />);
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true
    },
    userDecisionTimeout: 13000
})(MapContainer);