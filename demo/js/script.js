function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
		var html = feature.properties.Name + "<br>" + feature.properties.Caption +
		'<a href="' + feature.properties.URL + '"><img src="'+ feature.properties.Thumb_URL + '"></a';
        layer.bindPopup(html);
    }
}

var map = L.map('map').setView([36.978682, -86.426348], 12);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	geojsonFeature = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "Name": "Welcome to Bowling Green", "Caption": "Bowling Green is a city in and the county seat of Warren County, Kentucky, United States. As of 2014, its population of 62,479 made it the third most-populous city in the state after Louisville and Lexington. Founded by pioneers in 1798, Bowling Green was the provisional capital of Confederate Kentucky during the American Civil War. Today it is the home of numerous manufacturers, including General Motors and Fruit of the Loom. The Bowling Green Assembly Plant has been the source of all Chevrolet Corvettes built since 1981. Bowling Green is also home to the state's second-largest public university, Western Kentucky University.", "Icon_color": "B", "Long": -86.444400, "Lat": 36.981700, "URL": "https:\/\/upload.wikimedia.org\/wikipedia\/commons\/5\/52\/Shops_along_Fountain_Square_in_Bowling_Green,_Kentucky_2008.JPG", "Thumb_URL": "BG.jpg" }, "geometry": { "type": "Point", "coordinates": [ -86.4444, 36.9817 ] } },
{ "type": "Feature", "properties": { "Name": "Western Kentucky University", "Caption": "As a leading American university with international reach, WKU is engaged in internationally acclaimed, student-and-learning-centered academic programs. The WKU experience occurs on several unique campus environments and through an overarching spirit which attracts an intellectually exciting and diverse family of the nation's best students. WKU provides students of all backgrounds with rigorous academic programs in education, the liberal arts and sciences, the health sciences, and business, with emphasis at the baccalaureate and masters levels, complemented by relevant associate and doctoral level programs. WKU recognizes that its mission continues to evolve in response to regional, national, and global changes, and the need for lifelong learning.", "Icon_color": "B", "Long": -86.451600, "Lat": 36.987500, "URL": "http:\/\/people.wku.edu\/clinton.lewis\/WKUWallpapers\/wku_campus_standard.jpg", "Thumb_URL": "WKU.jpg" }, "geometry": { "type": "Point", "coordinates": [ -86.4516, 36.9875 ] } },
{ "type": "Feature", "properties": { "Name": "Lost River Cave", "Caption": "In 1986 the Cave entrance and the 25-acre wooded valley was donated to Western Kentucky University by its owners: WKU professor Dr. Raymond Cravens, WKU Physical Plant Administrator Owen Lawson and Mr. and Mrs. Leroy Highbaugh. The donation served as the springboard for the restoration and preservation of Lost River Cave and the surrounding natural environment.", "Icon_color": "B", "Long": -86.471700, "Lat": 36.952800, "URL": "http:\/\/media-cdn.tripadvisor.com\/media\/photo-s\/01\/cc\/8d\/45\/lost-river-cave-entrance.jpg", "Thumb_URL": "LRC.jpg" }, "geometry": { "type": "Point", "coordinates": [ -86.4717, 36.9528 ] } },
{ "type": "Feature", "properties": { "Name": "National Corvette Museum", "Caption": "The National Corvette Museum showcases the Chevrolet Corvette, an American sports car that has been in production since 1953. It is located in Bowling Green, Kentucky, off Interstate 65's Exit 28. It was constructed in 1994, and opened to the public in September of that year. The museum is located only a quarter mile from the Bowling Green Assembly Plant, where Corvettes have been made since 1981. Public tours of the assembly plant are available. In addition, Chevrolet allows Corvette buyers to take delivery of their new vehicles at the museum, with a VIP tour of the plant and museum included for the buyer and up to three guests.", "Icon_color": "B", "Long": -86.375000, "Lat": 37.004200, "URL": "http:\/\/www.corvetteforum.com\/wp-content\/uploads\/2015\/12\/alh-sinkhole-at-national-corvette-museum-outside.jpg", "Thumb_URL": "NCM.jpg" }, "geometry": { "type": "Point", "coordinates": [ -86.375, 37.0042 ] } }
]
}


L.geoJson(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);
