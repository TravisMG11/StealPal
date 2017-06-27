export class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }
  updateMarkers(restaurants) {
    console.log('update');
    const restaurantsObj = {};
    restaurants.forEach(restaurant => restaurantsObj[restaurant.id] = restaurant);
    restaurants.filter(restaurant => !this.markers[restaurant.id]).forEach(newRestaurant => this.createMarker(newRestaurant));

    Object.keys(this.markers)
      .filter(restaurantId => !restaurantsObj[restaurantId])
      .forEach((restaurantId) => this.removeMarker(this.markers[restaurantId]));
  }

  createMarker(restaurant) {
    const lat = restaurant.latitude
    const position = new google.maps.LatLng(restaurant.latitude, restaurant.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      restaurantId: restaurant.id
    });

    // marker.addListener('click', () => this.handleClick(restaurant));
    // this.markers[marker.restaurantId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.restaurantId].setMap(null);
    delete this.markers[marker.restaurantId];
  }


}

export default MarkerManager;
