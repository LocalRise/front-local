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
                    if (response) {
                        // console.log(response)
                        if (response.rows[0].elements[0].status == "OK") {
                            var dist = response.rows[0].elements[0].distance.value / 1000
                            this.props.setDistance(dist)

                            this.props.setDistToFixed1(dist.toFixed(1))
                            // ไม่เกิน 5 kg 15 บาท ถ้าเกิน kg ละ 5 บาท
                            if (dist > 5) {
                                // this.props.setServiceChargeDistance(parseInt((15 + (Math.ceil(dist) - 5) * 5).toFixed(0)))
                                this.props.setServiceChargeDistance(parseInt((Math.ceil(dist) - 5) * 5))
                            } else {
                                this.props.setServiceChargeDistance(parseInt(0))
                            }

                            // console.log(dst/1000)
                        }
                    }
                }
            )
        }
        // console.log(this.props)
        serviceDistance(this.props.merchantLocation, this.props.customerLocation);
        return <div>Hello in distance</div>
    }
}

export default GoogleApiWrapper({
    apiKey: (API_KEY),
})(GetDistance);