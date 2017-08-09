

//INICIO SECCION FILTRO DOS//
$(document).ready(function(){ 
   $('#mostrar').on('click',function(){
      $('.filtrodos').toggle(500);
   });
});



//FIN SECCION FILTRO DOS//

/*JS PARA MAQUETA JSON ANTONIA */
$(document).ready(function() {
	res.forEach(function(e){
		//console.log(e);
		var json = e.search_results;
		json.forEach(function(ele){
			//console.log(ele);
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

