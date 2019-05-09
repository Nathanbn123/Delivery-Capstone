import React, { Component } from 'react';


class SimpleMap extends React.Component {

  ComponentDidMount() {
    this.renderMap;
  }

  renderMap() {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAsLAIBIJ_9YXNgv8mhHSws4tMT7c10gU4&callback=initMap');
    window.initMap = this.initMap;
  }

  initMap() {
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return (
      <div>
        <div id="map"></div>
        <p>henlo</p>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsLAIBIJ_9YXNgv8mhHSws4tMT7c10gU4&callback=initMap"></script>
        <style> {`
            #map {
              height: 100vh;
            }
      `}</style>
      </div>

    );
  }
}


function loadScript(url) {
  var index = window.document.getElementByTagNAme('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.deffer = true;
  index.parentNode.insertBefore(script, index);
}

export default SimpleMap;
