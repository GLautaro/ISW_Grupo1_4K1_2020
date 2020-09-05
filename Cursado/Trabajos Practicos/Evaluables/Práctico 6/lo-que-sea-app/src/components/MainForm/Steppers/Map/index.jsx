import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

const MapGoogle = (props) => {
  const containerStyle = {
    width: `100%`,
    height: `${props.height}px`,
  };

  const [defaultCenter, setDefaultCenter] = useState(props.defaultCenter);

  const mapRef = useRef(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCDxRvYulY_3uucQau-rk8sgkk_qLr6jyg">
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={14}
        onLoad={onMapLoad}
        onClick={props.onClick}
      >
        {props.marker && (
          <Marker
            onDragEnd={props.onClick}
            draggable
            position={{ lat: props.marker.lat, lng: props.marker.lng }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapGoogle;
