import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const MapGoogle = ({ height, defaultCenter, marker, onClick }) => {
  const containerStyle = {
    width: '100%',
    height: `${height}px`,
  };

  // eslint-disable-next-line no-unused-vars
  const [defaultCenterPosition, setDefaultCenterPosition] = useState(
    (marker && { lat: marker.lat, lng: marker.lng }) || defaultCenter,
  );

  const mapRef = useRef(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCDxRvYulY_3uucQau-rk8sgkk_qLr6jyg',
  });

  if (loadError) {
    return <div>No se pudo cargar el mapa.</div>;
  }

  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <GoogleMap
      id="map"
      mapContainerStyle={containerStyle}
      center={defaultCenterPosition}
      zoom={14}
      onLoad={onMapLoad}
      onClick={onClick}
    >
      {marker && (
        <Marker onDragEnd={onClick} draggable position={{ lat: marker.lat, lng: marker.lng }} />
      )}
    </GoogleMap>
  );
};
MapGoogle.propTypes = {
  height: PropTypes.number.isRequired,
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  marker: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default MapGoogle;
