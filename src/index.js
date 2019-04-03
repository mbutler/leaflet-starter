import L from 'leaflet'

const map = L.map('map', {
    center: [0, 0],
    zoom: 3,
    minZoom: 3,
    maxZoom: 12
})

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 12
}).addTo(map)

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

//let marker = L.circleMarker(latlng, blueCircleMarkers).addTo(map)

function onEachFeature(feature, layer) {
    let letter = feature.properties.text
    let prop = feature.properties
    let popup = `<h3> ${prop['Sender']} to ${prop['Recipient']} on ${prop['time']} </h3><br> ${letter}`
    feature.layer = layer
    layer.bindPopup(popup, {
        maxWidth: "auto"
    })   
}