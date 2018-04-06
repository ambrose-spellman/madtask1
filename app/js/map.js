var mymap = L.map('map').setView([42.8456315,74.5829166,14], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FrdXJhaGFydW5vIiwiYSI6ImNqZDFnejd3NDM3dG8yd281aTVyZzI2OWkifQ.-LprSmaJIW_L4YhuXgtQtw'
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [40, 50],
        iconAnchor:   [22, 44],
        popupAnchor:  [-3, -76]
    }
});
var bankIcon = new LeafIcon({iconUrl: 'images/bank-icon.png'}),
    cafeIcon = new LeafIcon({iconUrl: 'images/cafe-icon.png'}),
    universityIcon = new LeafIcon({iconUrl: 'images/university-icon.png'});
    objectIcon = new LeafIcon({iconUrl: 'images/object-logo.png'});

L.marker([42.8431467,74.5871148,21], {icon: bankIcon}).addTo(mymap).bindPopup("I am a green leaf.");
L.marker([42.8457264,74.5860076,17], {icon: cafeIcon}).addTo(mymap).bindPopup("I am a red leaf.");
L.marker([42.8523075,74.5846637,16], {icon: universityIcon}).addTo(mymap).bindPopup("I am an orange leaf.");
L.marker([42.8472332,74.5855517,17], {icon: objectIcon}).addTo(mymap).bindPopup("I am an orange leaf.");


// *****contact map

