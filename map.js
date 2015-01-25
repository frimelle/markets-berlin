var map = L.map( 'map', {
    center: [52.510, 13.5],
    minZoom: 11,
    zoom: 10
});

L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );



//add something so the display of the marker depends on the date
var inputDate = new Date("1/25/2015");
var todaysDate = new Date();

if (inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {

	var marker = L.marker([52.4016530, 13.0621240]).addTo(map);

	marker.bindPopup("<b>Hello Charlie!</b><br>I am a popup."); // default open: .openPopup();

};

//gets called when button is clicked
function setMap() {
	var days = document.getElementById("weekdays");
	var times = document.getElementById("time");
	var day = days.options[days.selectedIndex].value;
	var time = times.options[times.selectedIndex].text;

	getMarkets(day, time);
}

function getMarkets(day, time) {
	// get the data
	$.getJSON( "./data/berlin-markets.json", function(data) {
		$.each(data, function(index) {

			if (/\s/.test(data[index].Tage)) {
			//split days into array
				var arrayDays = data[index].Tage.split(' ');
				
				//loop through days
				for (var i = 0; i < arrayDays.length; i++) {

					if (arrayDays[i] == day) {
						//alert(data[index].ZeitenOff);
						//check for the time
						if (time >= data[index].ZeitenOn && time <= date[index].ZeitenOff) {	
							alert("Yes");
						}
					}
				}
			}
		});
	})
}
