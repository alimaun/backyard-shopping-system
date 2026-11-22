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

// Restaurant locations
const restaurants = [
  {
    name: "St. John's Fish Exchange Kitchen & Wet Bar",
    address: "351 Water Street, St. John's",
    position: [47.5599, -52.7112] as [number, number],
  },
  {
    name: "Terre Restaurant",
    address: "125 Water Street, St. John's",
    position: [47.5630, -52.7075] as [number, number],
  },
  {
    name: "Piatto Pizzeria + Enoteca",
    address: "377 Duckworth Street, St. John's",
    position: [47.5627, -52.7112] as [number, number],
  },
  {
    name: "The Adelaide Oyster House",
    address: "334 Water Street, St. John's",
    position: [47.5605, -52.7094] as [number, number],
  },
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
        {/* OpenStreetMap Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Dynamic Shop Markers */}
        {shops.map((shop) => (
          <CircleMarker
            key={shop.id}
            center={[shop.latitude, shop.longitude]}
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

        {/* Backyard Shopping System Marker */}
        <CircleMarker
          center={ST_JOHNS_CENTER}
          radius={9}
          pathOptions={{
            color: "#ffffff",
            fillColor: "#2563eb",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <strong>Backyard Shopping System</strong>
            <br />
            St. John's, Newfoundland
          </Popup>
        </CircleMarker>

        {/* Restaurant Markers */}
        {restaurants.map((restaurant, index) => (
          <CircleMarker
            key={`restaurant-${index}`}
            center={restaurant.position}
            radius={10}
            pathOptions={{
              color: "#ffffff",
              fillColor: "#e11d48",
              fillOpacity: 1,
            }}
          >
            <Popup>
              <strong>{restaurant.name}</strong>
              <br />
              {restaurant.address}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;