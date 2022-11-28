// Input your mapboxgl access key
mapboxgl.accessToken =
      'YOUR KEY HERE';

    // Create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});
    // Add two markers to the map and set respective colors (red for line 1, blue for line 9)
let marker = new mapboxgl.Marker({color: '#FF0000'}).setLngLat([-71.092761, 42.357575]).addTo(map);
let marker2 = new mapboxgl.Marker({color: '#0000FF'}).setLngLat([-71.092761, 42.357575]).addTo(map);

async function run(){
    // get bus data    
	const locations = await Promise.all([
    fetch('https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip').then((Response) => Response.json()),
    fetch('https://api-v3.mbta.com/vehicles?filter[route]=9&include=trip').then((Response) => Response.json())
  ]);
	console.log(new Date());
  // log coordinates (long, lat) of line 1 to console
	console.log('Line 1:' + locations[0].data[0].attributes.longitude + ', ' + locations[0].data[0].attributes.latitude);
  // log coordinates (long, lat) of line 9 to console
  console.log('Line 9:' + locations[1].data[0].attributes.longitude + ', ' + locations[1].data[0].attributes.latitude);
  // update marker for line 1
  marker.setLngLat([locations[0].data[0].attributes.longitude, locations[0].data[0].attributes.latitude])
  // update marker for line 9
  marker2.setLngLat([locations[1].data[0].attributes.longitude, locations[1].data[0].attributes.latitude])  
	// timer
	setTimeout(run, 15000);
}

run();
// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}