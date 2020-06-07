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

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ&v=3.exp&libraries=geometry,drawing,places",
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
        defaultZoom={13}
        defaultCenter={{ lat: 18.288966, lng: 99.491665 }}
    >
        {props.isMarkerShown && (
            <Marker
                position={{
                    lat: props.lat,
                    lng: props.lng
                }}
                draggable={true}
                ref={props.onMarkerMounted}
                onPositionChanged={props.onPositionChanged}
            />
        )}
        {console.log("props ", props.lat, props.lng)}
    </GoogleMap>
));

class MyParentComponentWrapper extends React.PureComponent {
    state = {
        isMarkerShown: false
    };

    render() {
        return !this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled ? (
            <div>
                <MyMapComponent isMarkerShown={true} lat={18.288966} lng={99.491665} />
            </div>
        ) : this.props.coords ? (
            <div>
                <MyMapComponent isMarkerShown={true} lat={this.props.coords.latitude} lng={this.props.coords.longitude} />
            </div>
        ) : (
            <div class="relative w-full max-w-screen-xl mx-4" style={{ height: `400px` }}>
                <MyMapComponent isMarkerShown={false} />
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
})(MyParentComponentWrapper);
