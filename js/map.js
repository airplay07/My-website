
let map = L.map('apMap').setView([51.23009, 4.41616], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

//  rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

//  rechthoek met de rode AP-kleur (#e60005)
L.rectangle(bounds, {
  color: '#e60005',
  weight: 2,
  opacity: 0.8,
  fill: true,
  fillColor: '#e60005',
  fillOpacity: 0.2
}).addTo(map);

//  marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup('<strong>AP-Hogeschool</strong><br>Ellermanstraat 33');
apMarker.openPopup();

let map = L.map('apMap').setView([51.23009, 4.41616], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

//  rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

//  rechthoek met de rode AP-kleur (#e60005)
L.rectangle(bounds, {
  color: '#e60005',
  weight: 2,
  opacity: 0.8,
  fill: true,
  fillColor: '#e60005',
  fillOpacity: 0.2
}).addTo(map);

//  marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup('<strong>AP-Hogeschool</strong><br>Ellermanstraat 33');
apMarker.openPopup();