
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

  const restaurants = [
    {
      name: "St. John's Fish Exchange Kitchen & Wet Bar",
      address: "351 Water Street, St. John's",
      position: [47.5599, -52.7112] as [number, number]
    },
    {
      name: "Terre Restaurant",
      address: "125 Water Street, St. John's",
      position: [47.5630, -52.7075] as [number, number]
    },
    {
      name: "Piatto Pizzeria + Enoteca",
      address: "377 Duckworth Street, St. John's",
      position: [47.5627, -52.7112] as [number, number]
    },
    {
      name: "The Adelaide Oyster House",
      address: "334 Water Street, St. John's",
      position: [47.5605, -52.7094] as [number, number]
    }
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Original Backyard Shopping System marker */}
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

        {/* Four restaurant markers */}
        {restaurants.map((restaurant, index) => (
          <CircleMarker
            key={index}
            center={restaurant.position}
            radius={10}
            pathOptions={{
              color: "#ffffff",
              fillColor: "#e11d48",
              fillOpacity: 1
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
};

export default MapView;
