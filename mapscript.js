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


//1 - Ringkøbing-Skjern

L.geoJson(dataRing).addTo(map);


L.geoJson(dataKK, options).addTo(map);

//1 - Ringkøbing-Skjern

//L.geoJSON(myGeoJSON_ringkøbing).addTo(map);

//2 - København

// L.geoJSON(toiletter_kbh).addTo(map);
