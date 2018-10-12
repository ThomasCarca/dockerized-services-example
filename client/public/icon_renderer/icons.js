import L from 'leaflet';

const marker_green = new L.Icon({
  iconUrl: require('../icons/marker_green.png'),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -50],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const marker_red = new L.Icon({
  iconUrl: require('../icons/marker_red.png'),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -50],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const marker_lightblue = new L.Icon({
  iconUrl: require('../icons/marker_lightblue.png'),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -50],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const marker_purple = new L.Icon({
  iconUrl: require('../icons/marker_purple.png'),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -50],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});



export {
  marker_green,
  marker_red,
  marker_lightblue,
  marker_purple
};