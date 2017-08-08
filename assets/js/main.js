/*JS PARA MAQUETA JSON ANTONIA */
$(document).ready(function() {
	res.forEach(function(e){
		console.log(e);
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
			//Condición para mostrar la cantidad de estrellas
			if(puntuacion != 5){
				$(".estrellas").append("<i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i>")
			}
			//console.log(img);
			//console.log(precio);
			//console.log(usd);
			//console.log(imgUser);
			//console.log(tipoPieza);
			//console.log(cantHuesped);
			//console.log(puntuacion);
			//console.log(descripcion);
			console.log(id);
			$(".contenedor").append("<li><div class='img-lugar' id='"+id+"'><img src='"+img+"' alt=''></div><div class='precio'><p class='usd'>"+usd+"</p><p class='precio-txt'>"+precio+"</p><p class='mes-txt'>Por mes</p></div><div class='imgUser'><img src='"+imgUser+"' alt=''></div><div class='descripcion'><p class='descripcion-txt'>"+descripcion+"</div><div class='txt-bajada'><p>"+tipoPieza+"·"+cantHuesped+" huéspedes "+"</p></div><div class='estrellas'></div></li>");
		});
	});
	
});

/* FIN JS PARA MAQUETA JSON ANTONIA */