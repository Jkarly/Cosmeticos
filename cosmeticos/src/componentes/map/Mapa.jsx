import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = () => (
  <LoadScript googleMapsApiKey="AIzaSyCAEZ3QarDItDlnAk8jF8avoLdqyLQ8fEY">
    <GoogleMap
      id="my-map"
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={{ lat: 37.7749, lng: -122.4194 }} // Coordenadas de ejemplo
      zoom={12}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  </LoadScript>
);

export default Mapa;
