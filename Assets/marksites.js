
	// Global variables
	var data = [
	{ name: "Vancouver Main Library", open: "Opens Feb 3rd 2010, Wed 4-8pm<br />Fri 10am-2pm, Sat 10am-4pm", lat:"45.629975", lng:"-122.661538", url: "#MainLib" },
	{ name: "Marshall Community Center", open: "Opens Feb 2cnd 2010, <br />Tues, Thurs 12-4pm", lat:"45.633516", lng:"-122.661581", url: "#Marshall" },
	{ name: "Cascade Park Community Library", open: "Opens Feb 2cnd 2010, <br />Tues, Wed 12pm-4pm", lat:"45.626119", lng:"-122.534895", url: "#Cascade" },
	{ name: "Camas Public Library", open: "Opens Feb 2cnd 2010, <br />Tues 3-6pm, Thur 2-5pm", lat:"45.586999", lng:"-122.402158", url: "#Camas" },
	{ name: "First Baptist Church", open: "Opens Feb 3rd 2010, <br />Wed-Fri 11am-3pm", lat:"45.642180", lng:"-122.669134", url: "#FBC" },
	{ name: "Glenwood Place Senior Living", open: "Opens Feb 1st 2010, <br />Mon, Tues 10am-6pm", lat:"45.663202", lng:"-122.589526", url: "#Glenwood" },
	{ name: "Battle Ground Community Library", open: "Opens Feb 3rd 2010, <br />Wed 3-7pm, Fri 1-5pm", lat:"45.786495", lng:"-122.550173", url: "#BattleGround" },
	{ name: "Three Creeks Community Library", open: "Opens Feb 2cnd 2010, <br />Tues-Wed 1pm-5pm, Thur 3-7pm", lat:"45.721282", lng:"-122.665615", url: "#ThreeCreeks" },
	{ name: "McClelland Center", open: "Opens Feb 2cnd 2010, <br />Tues, Thurs 9am-3pm", lat:"46.129255", lng:"-122.932463", url: "#McCell" },
	{ name: "Longview Public Library", open: "Opens Feb 5th 2010, <br />Fri-Sat 12:30-4:30pm", lat:"46.139820", lng:"-122.937655", url: "#Longlib" },
	{ name: "Fibre Credit Union", open: "Opens Feb 2cnd 2010, <br />Tues 3:30-6:30pm", lat:"46.128333", lng:"-122.937613", url: "#Fibre" },
	{ name: "Monticello Middle School", open: "Opens Feb 4th 2010, <br />Thurs 3:30-7:00pm", lat:"46.138214", lng:"-122.957654", url: "#Monticello" },	
	{ name: "Community Housing Resource Center", open: "Opens Feb 2cnd 2010, <br />Tue-Thur 10-2pm By Appt Only", lat:"45.642030", lng:"-122.601242", url: "#CHRC" },
	{ name: "Cathlamet River Room", open: "Opens Wed Feb 10,17, Mar 10,17, Apr 7,14 1-3:30pm<br />Sat Feb 20, Mar 20 11:30am-3:30pm", lat:"46.186932", lng:"-123.355179", url: "#Cathlamet" }
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


