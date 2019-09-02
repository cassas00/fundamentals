
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

let map = null;

function myMap() {
  let mapProp = {
    center: new google.maps.LatLng(51.6833, -3.2333),
    zoom: 9,
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  let marker = new google.maps.Marker({
    position: mapProp.center,
    icon: "../resources/images/HTML5_logo_40px.png",
    animation: google.maps.Animation.DROP
  });

  marker.setMap(map);

  let infowindow = new google.maps.InfoWindow({
    content: "Click Me!"
  });

  infowindow.open(map, marker);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker, "click", function() {
    let pos = map.getZoom();
    map.setZoom(13);
    map.setCenter(marker.getPosition());
    window.setTimeout(function() {
      map.setZoom(pos);
    }, 3000);
  });
}

function setRoadmap() {
  map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
}

function setSatellite() {
  map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
}

function setHybrid() {
  map.setMapTypeId(google.maps.MapTypeId.HYBRID);
}

function setTerrain() {
  map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
}
