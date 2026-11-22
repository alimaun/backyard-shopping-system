
import { useEffect, useState } from "react";

import MapView from "./components/MapView";
import { fetchShops } from "./services/shopService";
import type { Shop } from "./types/shop";

import "./App.css";

function App() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchShops()
      .then((data) => {
        setShops(data.filter((shop) => shop.is_active));
      })
      .catch((err: unknown) => {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Backyard Shopping System</h1>

      <p>Discover local shops around St. John's.</p>

      {loading && <p>Loading shops...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <h3>Available shops: {shops.length}</h3>
          <MapView shops={shops} />
        </>
      )}
    </div>
  );
}

export default App;
