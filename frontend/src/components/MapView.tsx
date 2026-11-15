
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import type { Shop } from "../types/shop";

interface MapViewProps {
  shops: Shop[];
}

const ST_JOHNS_CENTER: [number, number] = [
  47.5615,
  -52.7126,
];

function MapView({ shops }: MapViewProps) {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={ST_JOHNS_CENTER}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {shops.map((shop) => (
          <CircleMarker
            key={shop.id}
            center={[
              shop.latitude,
              shop.longitude,
            ]}
            radius={9}
            pathOptions={{
              color: "#ffffff",
              fillColor: "#2563eb",
              fillOpacity: 1,
            }}
          >
            <Popup>
              <strong>{shop.name}</strong>
              <br />
              Category: {shop.category}
              <br />
              {shop.description}
              <br />
              {shop.address}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
