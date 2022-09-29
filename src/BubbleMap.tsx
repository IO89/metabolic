import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet';

let data = {
    city: [
        { "name": "Tokyo", "coordinates": [139.6917, 35.6895], "population": 37843000 },
        { "name": "Jakarta", "coordinates": [106.8650, -6.1751], "population": 30539000 },
        { "name": "Delhi", "coordinates": [77.1025, 28.7041], "population": 24998000 },
        { "name": "Seoul", "coordinates": [126.9780, 37.5665], "population": 23480000 },
        { "name": "Shanghai", "coordinates": [121.4737, 31.2304], "population": 23416000 },
        { "name": "Karachi", "coordinates": [67.0099, 24.8615], "population": 22123000 },
        { "name": "Beijing", "coordinates": [116.4074, 39.9042], "population": 21009000 },
        { "name": "Mumbai", "coordinates": [72.8777, 19.0760], "population": 17712000 },
        { "name": "Osaka", "coordinates": [135.5022, 34.6937], "population": 17444000 },
        { "name": "Moscow", "coordinates": [37.6173, 55.7558], "population": 16170000 },
        { "name": "Dhaka", "coordinates": [90.4125, 23.8103], "population": 15669000 },
        { "name": "Bangkok", "coordinates": [100.5018, 13.7563], "population": 14998000 },
        { "name": "Kolkata", "coordinates": [88.3639, 22.5726], "population": 14667000 },
        { "name": "Istanbul", "coordinates": [28.9784, 41.0082], "population": 13287000 },
    ],
    minLat: -6.1751,
    maxLat: 55.7558,
    minLong: 37.6173,
    maxLong: 139.6917
}


export const BubbleMap = ()=>{
    let centerLat = (data.minLat + data.maxLat) / 2;
    let distanceLat = data.maxLat - data.minLat;
    let bufferLat = distanceLat * 0.05;
    let centerLong = (data.minLong + data.maxLong) / 2;
    let distanceLong = data.maxLong - data.minLong;
    let bufferLong = distanceLong * 0.05;

    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Place here amount of users</h3>
        <MapContainer
         zoom={2}
         zoomControl={false}
         scrollWheelZoom={false}
          style={{ height: "480px", width: "100%" }}
          center={[centerLat, centerLong]}
          
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["name"] + ": " + "Number of users" + " " + city["population"]}</span>
                </Tooltip>
              </CircleMarker>)
          })
          }
        </MapContainer>
      </div>
    );
  }

