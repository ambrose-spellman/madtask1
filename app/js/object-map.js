var objectmap = L.map('objectmap').setView([42.8525803,74.5916992,13], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FrdXJhaGFydW5vIiwiYSI6ImNqZGFjcDNoZzU3dGQzM3M2ZnJ6N3NnMTIifQ.CtURh2UJDrFMKhpCkZlVIg'
}).addTo(objectmap);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [60, 78],
        iconAnchor:   [32, 54],
        popupAnchor:  [-3, -76]
    }
});
var greenIcon = new LeafIcon({iconUrl: 'images/object-logo.png'});
    redIcon = new LeafIcon({iconUrl: 'images/object-logo.png'});
    orangeIcon = new LeafIcon({iconUrl: 'images/object-logo.png'});

L.marker([42.8600303,74.6083043,16], {icon: greenIcon}).addTo(objectmap).bindPopup("I am a green leaf.");
L.marker([42.861063,74.5901603,17], {icon: redIcon}).addTo(objectmap).bindPopup("I am a red leaf.");
L.marker([42.83011,74.5956053,17], {icon: orangeIcon}).addTo(objectmap).bindPopup("I am an orange leaf.");

// function addMarker() {
//     L.marker(greenIcon,redIcon,orangeIcon)
//       .on('click', function() {
//         centerLeafletMapOnMarker(map, this);
//       })
//       .addTo(objectmap);
//   }
  
// // L.marker.on('click', function(e){
// //     map.setView([e.latlng.lat, e.latlng.lng], 12);
    
// // });
// function centerLeafletMapOnMarker(objectmap, marker) {
//     var latLngs = [ marker.getLatLng() ];
//     var markerBounds = L.latLngBounds(latLngs);
//     map.fitBounds(markerBounds);
//   }