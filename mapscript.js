setTimeout(function () {
  window.dispatchEvent(new Event("resize"));
}, 1000);

//Standard view for map

var map = L.map("map").setView([55.9450, 8.5638], 13);

//Implementing layers

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Asking user for location
map.locate({ setView: true, maxZoom: 16 });

//Data from areas



//1 - Ringkøbing-Skjern

//Implementation of geoJSON

//test

function createCustomIcon (feature, latlng) {
  let myIcon = L.icon({
    iconUrl: 'disabled-toilet-handicap-svg.png',
    shadowUrl: 'disabled-toilet-handicap-svg.png',
    iconSize:     [25, 25], // width and height of the image in pixels
    shadowSize:   [35, 20], // width, height of optional shadow image
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  return L.marker(latlng, { icon: myIcon })
}

// create an options object that specifies which function will called on each feature
let myLayerOptions = {
  pointToLayer: createCustomIcon
}

// create the GeoJSON layer
L.geoJSON(dataRing, myLayerOptions).addTo(map)

//fiseof



L.geoJson(dataKK).addTo(map);

//1 - Ringkøbing-Skjern

//L.geoJSON(myGeoJSON_ringkøbing).addTo(map);

//2 - København

// L.geoJSON(toiletter_kbh).addTo(map);
