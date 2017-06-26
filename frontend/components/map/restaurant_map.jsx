import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 40.783908, lng: -74.0078687 },
  zoom: 16
};

class RestaurantMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  render() {
    return (
      <div className="map-box">
        <div className="map" ref="map">

        </div>
      </div>
    );
  }
}

export default withRouter(RestaurantMap);
