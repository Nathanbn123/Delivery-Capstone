import React, { Component } from 'react';
import Landing from './Landing';
// import SimpleMap from './SimpleMap';
import AddressStore from './AddressStore'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
  };


  onMarkerClick(props, marker, e) {
     this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true

     });
   }
   onClose(props) {
     if (this.state.showingInfoWindow) {
       this.setState({
         showingInfoWindow: false,
         activeMarker: null
       });
     }
   };


  render() {
    return (
      <div>
      <Landing />
      <AddressStore />
        <Map
         google={this.props.google}
         zoom={14}
         style={mapStyles}
         initialCenter={{ lat: 42.0963462, lng: -70.9686115 }}
         >
          <Marker
            onClick={this.onMarkerClick}
            name={'Kenyatta International Convention Centre'}

            ></Marker>
       </Map>

    </div>
     );
   }
 }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsLAIBIJ_9YXNgv8mhHSws4tMT7c10gU4'
})(MapContainer);
