import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  TrafficLayer,
} from "react-google-maps";
import PropTypes from 'prop-types';

function LiteralMap(props) {
  console.log(this.props)
  //     const waypoints = this.props.places.map(p =>({
  //         location: {lat: p.latitude, lng:p.longitude},
  //         stopover: true
  //     }))
  //     const origin = waypoints.shift().location;
  //     const destination = waypoints.pop().location;
  //
  //     const directionsService = new google.maps.DirectionsService();
  //     directionsService.route(
  //       {
  //         origin: origin,
  //         destination: destination,
  //         travelMode: google.maps.TravelMode.DRIVING,
  //         waypoints: waypoints
  //       },
  //       (result, status) => {
  //         if (status === google.maps.DirectionsStatus.OK) {
  //           this.setState({
  //             directions: result
  //           });
  //         } else {
  //           this.setState({ error: result });
  //         }
  //       }
  //     );
  //

return (

<GoogleMap
  defaultZoom={7}
  defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
>

<Marker
 position={{ lat: -34.397, lng: 150.644 }}
 defaultClickable={true}
/>



<TrafficLayer autoUpdate />
</GoogleMap>

  )
}


const MapWrapped = withScriptjs(withGoogleMap(LiteralMap));
export default function ActualMap() {
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
