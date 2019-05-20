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
  constructor(props) {
   super(props);

  this.state = {
    directions: null,
  }

}


componentDidMount() {

  const places = [
    {latitude: 25.8103146,longitude: -80.1751609},
    {latitude: 27.9947147,longitude: -82.5943645},
    {latitude: 28.4813018,longitude: -81.4387899},
    //...
  ]

    const waypoints = places.map(p =>({
        location: {lat: p.latitude, lng:p.longitude},
        stopover: true
    }))
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;



    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: waypoints
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          this.setState({ error: result });
        }
      }
    );
  }





render() {
  return (

  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
 >

 <DirectionsRenderer
   directions={this.state.directions}
   />
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
