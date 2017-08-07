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
			console.log(img);
			console.log(precio);
			console.log(usd);
			console.log(imgUser);
			console.log(tipoPieza);
			console.log(cantHuesped);
			console.log(puntuacion);
			console.log(descripcion);
			$(".contenedor").append("<li><div class='img-lugar'><img src='"+img+"' alt=''></div><div class='precio'><p class='usd'>"+usd+"</p><p class='precio-txt'>"+precio+"</p></div><div class='imgUser'><img src='"+imgUser+"' alt=''></div><div class='descripcion'><p class='descripcion-txt'>"+descripcion+"</p></div><p class='tipoPieza'>"+tipoPieza+"</p><p class='huesped'>"+cantHuesped+"</p><div class='estrellas'>"+puntuacion+"</div></li>");
		})
	})
	
});