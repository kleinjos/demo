var map, interactivity, layer;

var url = 'http://api.tiles.mapbox.com/v3/occupy.color-cover,occupy.color-taker.jsonp';

wax.tilejson(url, function(tilejson) {
  map = new L.Map('map')
    .setView(new L.LatLng(39, -99), 4);

  tilejson.minzoom = 2;
  tilejson.maxzoom = 7;

  layer = new wax.leaf.connector(tilejson);
  map.addLayer(layer);

  interactivity = wax.leaf.interaction()
    .map(map)
    .tilejson(tilejson)
    .on(wax.tooltip().animate(true).parent(map._container).events());
});

wax.tilejson(url, function(tilejson) {
  map = new L.Map('map')
    .setView(new L.LatLng(39, -99), 4);

  tilejson.minzoom = 2;
  tilejson.maxzoom = 7;

  layer = new wax.leaf.connector(tilejson);
  map.addLayer(layer);

  interactivity = wax.leaf.interaction()
    .map(map)
    .tilejson(tilejson)
    .on(wax.tooltip().animate(true).parent(map._container).events());
});
