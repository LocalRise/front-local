import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


const API_KEY = "AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ";

const defaultZoom = 7
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
            if(this.props.posit){
                this.props.setCustomerLocation(this.props.posit)
            }
            const refs = {};
            this.setState({
                position: null,
                onMarkerMounted: ref => {
                    refs.marker = ref;
                },

                onPositionChanged: () => {
                    const position = refs.marker.getPosition();
                    let strPst = position.toString()
                    strPst = strPst.substr(1, strPst.length - 2);
                    const arrPst = strPst.split(",").map(val => parseFloat(val));
                    this.props.setCustomerLocation({ lat: arrPst[0], lng: arrPst[1] })
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

export default MapComponent