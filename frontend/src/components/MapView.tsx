
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

const MapView = () => {
  const position: [number, number] = [
    47.5615,
    -52.7126
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CircleMarker
          center={position}
          radius={9}
          pathOptions={{
            color: "#ffffff",
            fillColor: "#2563eb",
            fillOpacity: 1
          }}
        >
          <Popup>
            Backyard Shopping System
            <br />
            St. John's, Newfoundland
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
};

export default MapView;
