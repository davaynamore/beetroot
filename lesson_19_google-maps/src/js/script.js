const navForm = document.getElementById('navigator');
const addressFrom = document.getElementById('addressFrom');
const addressTo = document.getElementById('addressTo');
const drivingMode = document.getElementById('drivingMode');

navForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const start = addressFrom.value;
	const end = addressTo.value;
	const mode = drivingMode.value;
	start && end ? calcRoute(start, end, mode) : start ? findPoint(start) :  end ? findPoint(end) : alert('Enter address');
});

let map;
let directionsService;
let directionsDisplay;

function initMap() {
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	const krem = {lat: 49.062785, lng: 33.4156805};
	map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: krem});
	directionsDisplay.setMap(map);
}

function findPoint(address) {
	const geocoder = new google.maps.Geocoder();
	const infowindow = new google.maps.InfoWindow;
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == 'OK') {
			map.zoom = 12;
			map.setCenter(results[0].geometry.location);
			const marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
			infowindow.setContent(results[0].formatted_address);
			infowindow.open(map, marker);
		} else {
			console.log('Geocode was not successful for the following reason: ' + status);
		}
	});
}


function calcRoute(start, end, drivingMode) {
	var request = {
		origin: start,
		destination: end,
		travelMode: drivingMode
	};
	directionsService.route(request, function(result, status) {
		if (status == 'OK') {
			directionsDisplay.setDirections(result);
		}
	});
}