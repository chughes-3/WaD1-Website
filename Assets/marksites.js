
	// Global variables
	var data = [
	{ name: "Vancouver Main Library", open: "Opens Feb 1st 2012, Mon 10am-6pm<br />Wed 2pm-6pm, Sat 11am-3pm", lat:"45.629975", lng:"-122.661538", url: "#MainLib" },
	{ name: "Marshall Community Center", open: "Opens Feb 2nd 2012, <br />Tues, Thurs Noon-4pm", lat:"45.633516", lng:"-122.661581", url: "#Marshall" },
	{ name: "Cascade Park Community Library", open: "Opens Feb 1st 2012, <br />Tues, Wed Noon-4pm", lat:"45.626119", lng:"-122.534895", url: "#Cascade" },
	//{ name: "Camas Public Library", open: "Sorry, not open this year <br />", lat:"45.586999", lng:"-122.402158", url: "#Camas" },
	{ name: "First Baptist Church", open: "Opens Feb 1st 2012, <br />Mon, Wed Noon-4pm", lat:"45.642180", lng:"-122.669134", url: "#FBC" },
	//{ name: "Glenwood Place Senior Living", open: "Closed in 2012, <br />&nbsp;", lat:"45.663202", lng:"-122.589526", url: "#Glenwood" },
	{ name: "Battle Ground Community Library", open: "Opens Feb 1st 2012, <br />Wed 3pm-7pm, Fri 1pm-5pm", lat:"45.786495", lng:"-122.550173", url: "#BattleGround" },
	{ name: "Three Creeks Community Library", open: "Opens Feb 1st 2012, <br />Tues-Wed 1pm-5pm, Thur 3-7pm", lat:"45.721282", lng:"-122.665615", url: "#ThreeCreeks" },
	//{ name: "Lower Columbia CAP", open: "Opens Feb 1st 2011, <br />Tues, Thurs 9am-3pm", lat: "46.140021", lng: "-122.932237", url: "#McCell" },
	//{ name: "Longview Public Library", open: "Opens Feb 5th 2011, <br />Fri-Sat 12:30-4:30pm", lat:"46.139820", lng:"-122.937655", url: "#Longlib" },
	//{ name: "Fibre Credit Union", open: "Opens Feb 1st 2011, <br />Tues 3:30-6:30pm", lat:"46.128333", lng:"-122.937613", url: "#Fibre" }
	{ name: "Fisher's Landing Assisted Living", open: "Opens Feb 1st 2012, <br />Wed and Thurs 10:00-2:00pm", lat:"45.606832", lng:"-122.496529", url: "#FishersLanding" }

	];

	var map;
	var points = [];
	var gmarkers = [];
	var count =0;

	function addMouseoverevent(marker) { // Add a mouseover listener to the markers

		GEvent.addListener(marker, "mouseover", function() {
		marker.openInfoWindowHtml(marker.content);
		});
	return marker;
	}
	
	
	function addclickevent(marker) { // Add a click listener to the markers

		GEvent.addListener(marker, 'click', function() {
		document.location.href = marker.url;
		});
	return marker;
	}


	function centervc()	{	//recenters map 
		map
        map.setCenter(new GLatLng(45.6862, -122.5462), 11);
		return
		}

	function centerlong()	{	//recenters map longview
		map
        map.setCenter(new GLatLng(46.137739, -122.940102), 14);
		return
		}



    function loadmap() {
		if (GBrowserIsCompatible()) {
			map = new GMap2(document.getElementById("map_canvas"));
			map.setCenter(new GLatLng(45.6862, -122.5462), 11);
			map.addControl(new GLargeMapControl());

			for(var i = 0; i < data.length; i++) {
				points[i] = new GLatLng(parseFloat(data[i].lat), parseFloat(data[i].lng));
				gmarkers[i] = new GMarker(points[i]);

				// Store data attributes as property of gmarkers
				var html ="<div class='infowindow'>" +
				"<strong>"+ data[i].name + "<\/strong><p>" +
				data[i].open + "<\/p><\/div>";
				gmarkers[i].content = html;
				addMouseoverevent(gmarkers[i]);
				gmarkers[i].url = data[i].url
				addclickevent(gmarkers[i]);
				map.addOverlay(gmarkers[i]);
				}
 
		}
		// Javascript alert for older browsers where Google Maps isn't supported
		else {
      alert("Sorry, the Google Maps API is not compatible with this browser");
		}
	}


