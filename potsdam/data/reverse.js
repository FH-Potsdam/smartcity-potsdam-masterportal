const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./isochrones-bike.geojson', 'utf8'));

const newdata = data;

newdata.features = newdata.features.sort((a, b) => {
  return b.properties.value - a.properties.value;
});

fs.writeFileSync('./isochrones-bike-sorted.geojson', JSON.stringify(newdata), 'utf8');