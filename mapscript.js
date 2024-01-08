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

var options = {
  maxZoom: 24,
  tolerance: 100,
  debug: 0,
  style: (properties) => {
    if (properties.toilet_betegnelse = "Toilet med handicapadgang") {
      return  {fillColor:"#1EB3F0",color:"##007F00"
  

    };
    } else {
      return  {fillColor:"#007F00",color:"##007F00 "};
    }
  }
};
//1 - Ringkøbing-Skjern

var vtLayer = L.geoJson.vt(dataRing, options).addTo(map);


var vtLayer2 = L.geoJson.vt(dataKK, options).addTo(map);

//1 - Ringkøbing-Skjern

//L.geoJSON(myGeoJSON_ringkøbing).addTo(map);

//2 - København

// L.geoJSON(toiletter_kbh).addTo(map);
