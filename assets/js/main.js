$(document).ready(function() {
	res.forEach(function(e){
		console.log(e);
		var json = e.search_results;
		json.forEach(function(ele){
			console.log(ele);
			var img = ele.listing.thumbnail_url;
			var precio = ele.pricing_quote.rate.amount;
			var usd = ele.pricing_quote.rate.currency;
			console.log(img);
			console.log(precio);
			console.log(usd);
			//$(".alojamiento").append("<div class='img-lugar'><img src='"+img+"'><div class='precio'><p class='precio'"+precio+"</p><div></div>");
		})
		//console.log(e.search_results);
	})
	
});