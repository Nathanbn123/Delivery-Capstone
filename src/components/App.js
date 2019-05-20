import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "react-google-maps";

class Map extends React.Component {
    








render() {
  return (

  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
   >
 <Marker
   position={{ lat: 45.397, lng: -75.8490 }}
  />
  </GoogleMap>

    )
  }
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
