import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  /*

  ref is a react thing, lets you get a direct reference to an element:
  eg. this.refs.map --> directs you to the div

  */

  render() {
    return <div ref="map" />
  }
}

export default GoogleMap;
