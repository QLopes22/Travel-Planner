import React from 'react';
import './map.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps?api";

const map = () => {
    const coordinates = { lat: 0, lng: 0}

    const {} = useLoadScript({
        googleMapsApiKey: "AIzaSyDze3L_R5CxezkzsfeiwOefgoiWf3eJsFQ",
    });

    return (
        <div id="map"></div>
    )
}

function Map() {
    return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName></GoogleMap>;
}

export default map;