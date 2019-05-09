import React, { Component } from 'react';
import Landing from './Landing';
// import SimpleMap from './SimpleMap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Landing/>
        <h1>hoi</h1>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsLAIBIJ_9YXNgv8mhHSws4tMT7c10gU4'
})(MapContainer);
