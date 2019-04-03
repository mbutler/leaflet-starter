const map = L.map('map', {
    center: [0, 0],
    zoom: 3,
    minZoom: 3,
    maxZoom: 12
})

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markercolor = {
    radius: 8,
    fillColor: "#00AEEF",
    color: "#3978BF",
    weight: 1,
    opacity: 0.5,
    fillOpacity: 0.5
}

let mainlayer = new L.geoJson(letters, {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, markercolor)
    }
}).addTo(map)


let sliderControl = L.control.sliderControl({
    position: "topright",
    layer: mainlayer, 
    timeAttribute: "epoch",
    isEpoch: true,
    range: true
})
map.addControl(sliderControl)
sliderControl.startSlider()

function onEachFeature(feature, layer) {
    let letter = feature.properties.text
    let prop = feature.properties
    let popup = `<h3> ${prop['Sender']} to ${prop['Recipient']} on ${prop['time']} </h3><br> ${letter}`
    feature.layer = layer
    layer.bindPopup(popup, {
        maxWidth: "auto"
    })   
}