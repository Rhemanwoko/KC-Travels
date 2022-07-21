/*function initMap() {
    let options = {
        zoom: 8,
        center: {lat: 9.0820, lng: -8.6753}
    }

    let map = new google.maps.Map(document.getElementById('map'), options);

    let marker = new google.maps.Marker({
        position:{lat: 6.5244, lng: -3.3792},
        map: map
    });
}*/

// Initialize and add the map
function initMap() {
    // The location of Lagos
    const lagos = { lat: 6.5244, lng: -3.3792};
    // The map, centered at Lagos
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: lagos,
    });
    // The marker, positioned at Lagos
    const marker = new google.maps.Marker({
      position: lagos,
      map: map,
    });
  }
  
  window.initMap = initMap;