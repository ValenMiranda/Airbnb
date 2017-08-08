/*var mapOptions = {
	center: new google.maps.LatLng(37.7831, -122.4039),
	zoom:12,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};


var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
var acOptions = {
	types: 
}

var markerOptions = {
	position: new google.maps.LatLng(37.7831, -122.4039)
};

var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var infoWindowOptions = {
	content:'hola'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click', function(e){
	infoWindow.open(map, marker);
});*/
 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.3601, lng: -71.0589},
          zoom: 8
        });

        google.maps.event.addListener(map, 'click',
        	function(event){
        		addMarker({coords:event.lasLng});
        	});

        var marker = new google.maps.Marker({
      	position: { lat: 42.4668, lng: -70.9495},
      	map:map,
      	icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });
var infoWindow = new google.maps.InfoWindow({
	content:'<p>hola</p>'
});

marker.addListener('click', function(){
	infoWindow.open(map, marker);
});
      }


      var markers = [
      {
      	coords:{lat:42.4668, lng:-709495},
      	iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      	content:'<p>hola</p>'
      },

      {
      	coords:{lat:42.8584, lng:-70.9300},
      	content:'<p>holi</p>'
      },
      {
      	coords:{lat:42.7762, lng:-71.0773}
      }
      ];

      addMarker({
      	coords:{lat:42.4668, lng:-70.9495},
      	iconImage:'https://developers.gogle.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
      
      addMarker({coords:{lat:42.8584, lng:-70.9300}});
      addMarker({coords:{lat:42.7762, lng:-71.0773}});

    /*function addMarker(props) {
    	var marker = new google.maps.Marker({
    		position:props.coords,
    		map:map,
    		//icon:'https://developers.google'
    	});
    	if 
    }*/

      addMarker({coords:{lat: 42.8584, lng: -70.9300}});
      addMarker({coords:{lat: 42.7762, lng: -71.0773}});

      function addMarker(props){
      	var marker = new google.maps.Marker({
      		position:props.coords,
            map: map,
      	});

      	if (props.iconImage){
      		marker.setICon(props.iconImage);
      	}

      	if (props.content){
      		var infoWindow = new google.maps.InfoWindow({
      			content:props.content
      		});
      	}
      }