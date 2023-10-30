import "./Map.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";
import LocationIcon from "../assets/icon-location.svg";

function Map({ lat, long }) {
  const iconLocation = new L.Icon({
    iconUrl: LocationIcon,
    iconRetinaUrl: LocationIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 45),
  });
  return (
    <MapContainer
      center={[lat, long]}
      zoom={13}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]} icon={iconLocation}></Marker>
    </MapContainer>
  );
}

Map.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number,
};

export default Map;
