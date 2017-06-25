import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const mapOptions = {
  center: { lat: 40.783908, lng: -74.0078687 },
  zoom: 16
};

class RestaurantMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return (
      <div className="map" ref="map">

      </div>
    );
  }
}

export default withRouter(RestaurantMap);
