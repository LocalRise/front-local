import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import ReactLoading from "react-loading";
import { geolocated } from "react-geolocated";
import Distance from "./Distance"

const API_KEY = "AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ";

export { API_KEY }

const defaultZoom = 5
const defaultCenter = { lat: 13.736717, lng: 100.523186 }
const defaultLampange = { lat: 18.288966, lng: 99.491665 }
const MapComponent = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    lifecycle({
        componentWillMount() {
            const refs = {};

            this.setState({
                position: null,
                onMarkerMounted: ref => {
                    refs.marker = ref;
                },

                onPositionChanged: () => {
                    const position = refs.marker.getPosition();
                    console.log(position.toString());
                }
            });
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        options={{ streetViewControl: false }}
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        zoom={props.zoom ? props.zoom : defaultZoom}
        center={props.posit ? props.posit : defaultCenter}
    >
        {props.isMarkerShown && (
            <Marker
                position={props.posit}
                draggable={true}
                ref={props.onMarkerMounted}
                onPositionChanged={props.onPositionChanged}
            />
        )}
    </GoogleMap>
));

class MapContainer extends React.PureComponent {
    state = {
        isMarkerShown: false
    };

    render() {
        return !this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled ? (
            <div className="rounded-lg overflow-hidden">
                <MapComponent isMarkerShown={true} posit={defaultLampange} zoom={12} />
            </div>
        ) : this.props.coords ? (
            <div className="rounded-lg overflow-hidden">
                <MapComponent isMarkerShown={true} posit={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }} zoom={16} />
            </div>
        ) : (
                    <div class="relative w-full max-w-screen-xl rounded-lg overflow-hidden" style={{ height: `400px` }}>
                        <MapComponent isMarkerShown={false} />
                        <div class="absolute inset-0 flex items-center justify-center bg-black w-full max-w-screen-xl bg-opacity-25" style={{ height: `400px` }}></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <ReactLoading type={"spin"} color="#009BFF" className="" />
                        </div>
                    </div>
                );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true
    },
    userDecisionTimeout: 5000
})(MapContainer);
