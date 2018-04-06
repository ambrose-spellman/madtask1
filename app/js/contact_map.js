var contacts_map = L.map('contacts_map').setView([42.8758521,74.5968151], 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FrdXJhaGFydW5vIiwiYSI6ImNqZDFnejd3NDM3dG8yd281aTVyZzI2OWkifQ.-LprSmaJIW_L4YhuXgtQtw'
}).addTo(contacts_map)
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [60, 80],
        iconAnchor:   [32, 54],
        popupAnchor:  [-3, -76]
    }
});
var bigkey = new LeafIcon({iconUrl: 'images/contact-icon.png'});
L.marker([42.8762106,74.5977056], {icon: bigkey}).addTo(contacts_map).bindPopup("Мы находимся здесь.Добро пожаловать");

contacts_map.scrollWheelZoom.disable();
this.contacts_map.on('click', () => { this.contacts_map.scrollWheelZoom.enable();});
this.contacts_map.on('mouseout', () => { this.contacts_map.scrollWheelZoom.disable();});