$( document ).ready(function() {
    console.log( "ready!" );
});

require(["esri/Map", "esri/views/MapView", "dojo/domReady!"], function(Map, MapView) {
  
    var myMap = new Map({
        basemap: "dark-gray"
    });

    var view = new MapView({
        map: myMap,
        container: "viewDiv", 
        center: [-117.194896, 34.057275 ],
        zoom: 13
    });

    view.on("drag", function(evt){
        // prevents panning with the mouse drag event
        evt.stopPropagation();
    });
});
