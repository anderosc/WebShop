import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import shopsLocations from "../../data/shops.json";
import location from "../../assets/location.png";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from "../../components/ChangeView";
import { useState } from "react";

const defaultIcon = L.icon({
  iconUrl: location,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor : [12, 41],
  popupAnchor: [2, -40]
})
L.Marker.prototype.options.icon = defaultIcon;

function Shops() {
  const [center, setCenter] = useState([59.43393013780767, 24.744218397460667]);
  const [zoom, setZoom] = useState(10);

  const setCenterAndZoom = (lat, long,  zoom) =>{
    setCenter([lat, long]);
    setZoom(zoom);
    // ---- >
  }

  return (
    <div>
      <button onClick={() => setCenterAndZoom(58.43393013780767, 24.744218397460667, 7)}>All</button>
      {/* onclick sees peab ilmumavaid selle linna poed */}
      <button onClick={() => setCenterAndZoom(59.43393013780767, 24.744218397460667, 12)}>Tallinn</button>
      <button onClick={() => setCenterAndZoom(58.43393013780767, 26.724, 10)}>Tartu</button> <br />


      {/* Kui valitakse tallinn, siis näidatakse ainult tallinna poode */}
      {shopsLocations.map(shop => <button key={shop.name} onClick={()=>setCenterAndZoom(shop.lat, shop.long, 13)}>{shop.name}</button>)}

      <MapContainer style={{height : "500px"}} center={[59.43393013780767, 24.744218397460667]} zoom={10} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shopsLocations.map(shop =>
          <Marker key={shop} position={[shop.lat, shop.long]}>
            <Popup>
              {shop.name} <br />
              <a target="_blank" href={shop.href}>
              {shop.address}
              </a>
            </Popup>
          </Marker>
        )}

      </MapContainer>
    </div>
  )
}

export default Shops