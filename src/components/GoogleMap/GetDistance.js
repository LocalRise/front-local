import React, { useEffect, useState, Component } from "react"
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

const API_KEY = "AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ";

const defaultLampange = { lat: 18.288966, lng: 99.491665 }
const defaultCenter = { lat: 13.736717, lng: 100.523186 }

// `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latOrg},${lngOrg}&destinations=${latDtn},${lngDtn}&key=${API_KEY}`

class GetDistance extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("eiei", this.props.test)
        this.props.test("5555")
        console.log("ei 2", this.props.test)

    }

    render() {
        const { google } = this.props
        const service = new google.maps.DistanceMatrixService();
        const serviceDistance = (org, dest) => {
            service.getDistanceMatrix(
                {
                    origins: [org],
                    destinations: [dest],
                    travelMode: "DRIVING"
                },
                (response, status) => {
                    var dst = response.rows[0].elements[0].distance.value
                    console.log("response", dst);
                    console.log("status", status);
                }
            )
        }
        serviceDistance(defaultCenter, defaultLampange);
        return <div>Hlloe in distance</div>
    }
}

export default GoogleApiWrapper({
    apiKey: (API_KEY),
})(GetDistance);