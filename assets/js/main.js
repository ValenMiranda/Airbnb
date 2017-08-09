
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


/*Aquí está el JS de la primera parte del filtro*/

$(document).ready(function() {

 	  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

    $('select').material_select();

    $("#example_id").ionRangeSlider({
    min: 150,
    max: 15000,
    from: 500,
    to: 150000,
    type: 'double',
    prefix: "$",
    grid: true,
    grid_num: 10
});
     

  });

/*Aquí termina el JS de la primera parte del filtro*/

//INICIO SLIDE//
    $(document).ready(function(){
      $('.carousel').carousel();
    });
        

//FIN SLIDE//

//INICIO SECCION FILTRO DOS//
$(document).ready(function(){ 
   $('#mostrar').on('click',function(){
      $('.filtrodos').toggle(500);
   });
});



//FIN SECCION FILTRO DOS//


/*JS PARA MAQUETA JSON ANTONIA */
$(document).ready(function() {
	//INICIO SECCION FILTRO DOS//

	   $('#mostrar').on('click',function(){
	      $('.filtrodos').toggle(500);
	   });
	//FIN SECCION FILTRO DOS//
	res.forEach(function(e){
		//console.log(e);
		var json = e.search_results;
		json.forEach(function(ele){
			console.log(ele);
			var img = ele.listing.thumbnail_url;
			var precio = ele.pricing_quote.rate.amount;
			var usd = ele.pricing_quote.rate.currency;
			var imgUser = ele.listing.user.picture_url;
			var tipoPieza = ele.listing.room_type;
			var cantHuesped = ele.listing.person_capacity;
			var puntuacion = ele.listing.star_rating;
			var descripcion = ele.listing.name;
			var id= ele.listing.id;
			var bano = ele.listing.bathrooms;
			var habit = ele.listing.bathrooms;
			var camas = ele.listing.beds;
			
			/*$(".contenedor").append("<li><div class='img-lugar' id='"+id+"'><img src='"+img+"' alt=''></div><a href='#nowhere' ><i class='fa fa-heart-o' aria-hidden='true'></i></a><div class='precio'><p class='usd'>"+usd+"</p><p class='precio-txt'>"+precio+"</p><p class='mes-txt'>Por mes</p></div><div class='imgUser'><img src='"+imgUser+"' alt=''></div><div class='descripcion'><p class='descripcion-txt'>"+descripcion+"</div><div class='txt-bajada'><p>"+tipoPieza+"·"+cantHuesped+" huéspedes "+"</p></div><div class='estrellas'></div></li>");*/
			$("#test1").on( 'change', function() {
			   if( $(this).is(':checked') ) {
			       $(".contenedor").append("<li><div class='img-lugar' id='"+id+"'><img src='"+img+"' alt=''></div><a href='#nowhere' ><i class='fa fa-heart-o' aria-hidden='true'></i></a><div class='precio'><p class='usd'>"+usd+"</p><p class='precio-txt'>"+precio+"</p><p class='mes-txt'>Por mes</p></div><div class='imgUser'><img src='"+imgUser+"' alt=''></div><div class='descripcion'><p class='descripcion-txt'>"+descripcion+"</div><div class='txt-bajada'><p>"+tipoPieza+"·"+cantHuesped+" huéspedes "+"</p></div><div class='estrellas'></div></li>");
			       $(".fa-heart-o").click(function(){
						$(this).css('color', 'tomato');
					});
					//Condición para mostrar la cantidad de estrellas
					if(puntuacion != 5){
						$(".estrellas").append("<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>")
					}
			       console.log("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
			   } else {
			       // Hacer algo si el checkbox ha sido deseleccionado
			       console.log("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
			   }
			});
			//Info que obtengo de los select
			
			$("#aplicarFiltros").click(function(){
			var habitselect = $("#habitaciones option:selected").val();
			var banioselect = $("#banios option:selected").val();
			var camasselect = $("#camas option:selected").val();
			console.log(habitselect);
			console.log(banioselect);
			console.log(camasselect);
				if(habit == habitselect){
					$(".contenedor").append("<li><div class='img-lugar' id='"+id+"'><img src='"+img+"' alt=''></div><a href='#nowhere' ><i class='fa fa-heart-o' aria-hidden='true'></i></a><div class='precio'><p class='usd'>"+usd+"</p><p class='precio-txt'>"+precio+"</p><p class='mes-txt'>Por mes</p></div><div class='imgUser'><img src='"+imgUser+"' alt=''></div><div class='descripcion'><p class='descripcion-txt'>"+descripcion+"</div><div class='txt-bajada'><p>"+tipoPieza+"·"+cantHuesped+" huéspedes "+"</p></div><div class='estrellas'></div></li>");

					$(".fa-heart-o").click(function(){
						$(this).css('color', 'tomato');
					});
					//Condición para mostrar la cantidad de estrellas
					if(puntuacion != 5){
						$(".estrellas").append("<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>")
					}
				}
			})
		});
	});

	
	
});

/* FIN JS PARA MAQUETA JSON ANTONIA */



