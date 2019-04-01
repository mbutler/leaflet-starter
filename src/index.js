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

let blueCircleMarkers = {
  radius: 8,
  fillColor: "#00AEEF",
  color: "#3978BF",
  weight: 1,
  opacity: 0.5,
  fillOpacity: 0.5
}
