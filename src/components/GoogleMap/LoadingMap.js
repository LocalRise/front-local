import React, { useEffect, useState, Component } from "react"
import { geolocated } from "react-geolocated";
import { compose, withProps, lifecycle } from "recompose";
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import ReactLoading from "react-loading";
import MapComponent from "./MapComponent"


const LoadingMap = (props) => (
    <div class="relative w-full max-w-screen-xl rounded-lg overflow-hidden" style={{ height: `400px` }}>
        <MapComponent isMarkerShown={false} />
        <div class="absolute inset-0 flex items-center justify-center bg-black w-full max-w-screen-xl bg-opacity-25" style={{ height: `400px` }}></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <ReactLoading type={"spin"} color="#009BFF" className="" />
        </div>
    </div>
)

export default LoadingMap