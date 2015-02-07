var marketsBerlin = (function() {

	var map,
		markerArray,
		marketData;

	function getMarkets(day, time) {
		//delete markers from before
		deleteMarkers();
		// get the data
			$.each(marketData, function(index, value) {
				//split days into array
				var arrayDays = value.Tage.split(' ');
					
				//loop through days
				for (var i = 0; i < arrayDays.length; i++) {

					if (arrayDays[i] === day) {

						//check for the time
						if (time >= value.ZeitenOn && time <= value.ZeitenOff) {	
							geo = value.Geolocations
							var marker = L.marker(L.latLng(geo)).addTo(map);
							marker.bindPopup("<h2>" + value.Name + "</h2>" + "<br/>" + value.Ort + "<br/>" + value.ZeitenOn + " - " + value.ZeitenOff + "<br/>" 
								+ "<br/>" + value.Betreiber + "<br/>" + value.Telefonnummer + "<br/>" + "<a href=\"mailto:" + value.EMail + "\">" + value.EMail + "<a/>" + "<br/>" + 
								"<a href=\"" + "http://" + value.Internetadresse + "\">" + value.Internetadresse + "</a>"); 

							markerArray.push(marker);
						}
					}
				}
			});
	}


	function deleteMarkers() {
		$.each(markerArray, function(i, marker) {
		    map.removeLayer(marker);
		})  
	}

	function initDateAndTime() {
		var d = new Date(),
			day = d.getDay(),
			time = d.getHours();
		if (day > 0) {
			day--;
		} else {
			day = 6;
		}
		document.getElementById("weekdays").selectedIndex = day;

		if( time < 8 || time > 22) {
			time = 0;
		} else {
			time -= 8;
		}

		document.getElementById("time").selectedIndex = time;
	}

	var mB ={};

	mB.init = function() {
		map = L.map( 'map', {
		    center: [52.510, 13.5],
		    minZoom: 11,
		    zoom: 10
		});

		markerArray = [];

		$.getJSON( "./data/berlin-markets.json", function(data) {
			marketData = data;
		});

		L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		    subdomains: ['otile1','otile2','otile3','otile4']
		}).addTo( map );

		initDateAndTime();
	}

	mB.setMap = function() {
		var days = document.getElementById("weekdays");
		var times = document.getElementById("time");
		var day = days.options[days.selectedIndex].value;
		var time = times.options[times.selectedIndex].text;

		getMarkets(day, time);
	};

	return mB;
}());