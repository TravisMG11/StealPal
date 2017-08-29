import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 40.745272, lng: -73.993962 },
  zoom: 16
};

class RestaurantMap extends React.Component {


  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.restaurants);
    this.registerListeners();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
       };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(restaurant) {
    // this.props.history.push(``);
  }

  handleClick(coords) {
    this.props.history.push({
      // pathname: 'restaurantes/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
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
