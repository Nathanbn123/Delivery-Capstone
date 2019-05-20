// import React from 'react'
// import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
//
// export default class MapWithADirectionsRenderer extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyMapComponent
//           key='AIzaSyAsLAIBIJ_9YXNgv8mhHSws4tMT7c10gU4'
//           isMarkerShown
//           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//           loadingElement={<div style={{height: `100%`}}/>}
//           containerElement={<div style={{height: `400px`}}/>}
//           mapElement={<div style={{height: `50%`}}/>}
//           direction={this.props.direction}
//         />
//       </div>
//     )
//   }
// }
//
//
// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{lat: props.direction.lat, lng: props.direction.lng}}
//   >
//     {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
//   </GoogleMap>
// ));
