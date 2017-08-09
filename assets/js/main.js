/*$(document).ready(function(){
    res.forEach(function(el){
    console.log(el);
    var baseDatos = el.search_results;
    console.log(baseDatos);
    baseDatos.forEach(function(e){
  var precios=e.pricing_quote.rate.amount;
  console.log(precios);
 if (precios <= example_id.input.val()){
$("#mapa").append('<span id="precios">'+ precios + '</span>');
  }
  
  })
  })

   var map;
      function initMap() {
        var myLatLng = {lat: 42.3601, lng: -71.0589};
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.3601, lng: -71.0589},
          zoom: 8
        });

var inputDestino=(document.getElementById('autocompletado'));//conectado input cami filtros
var autocompleteDestino = new google.maps.places.Autocomplete(inputDestino);
autocompleteDestino.bindTo('bounds', map);

        var marker = new google.maps.Marker({
          position: inputDestino,
          map: map,
          draggable: true,
    icon: image,
    label: {
      text: precios,
      color: 'black',
      fontSize: '15px',
      fontWeight: 'bold'
        }
})
      }

      });
 
      google.maps.event.addDomListener(window, "load", initMap); */
      $(document).ready(function(){
        res.forEach(function(el){
          console.log(el);
          var baseDatos = el.search_results;
          console.log(baseDatos);
          baseDatos.forEach(function(e){
            var precios=e.pricing_quote.rate.amount;
            console.log(precios);

            function initialize() {
              var map = new google.maps.Map(
                document.getElementById('map'), {
                  center: new google.maps.LatLng(41.385932, 2.178678),
                  zoom: 13,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                });
              var image = {
                url: 'http://www.homedepot.com/catalog/swatchImages/35/04/04a604de-8b52-4cd8-a394-6286f00b438d_35.jpg',
          // This marker is 35 pixels wide by 35 pixels high.
          size: new google.maps.Size(35, 35),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 35)
        };
        var clickMarker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          draggable: true,
          icon: image,
          label: {
            text: precios,
            color: 'black',
            fontSize: '15px',
            fontWeight: 'bold'
          }
        });
      }
    })
  })
});