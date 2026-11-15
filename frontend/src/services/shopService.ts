
import type { Shop } from "../types/shop";

const API_BASE_URL = "http://127.0.0.1:8000";

export async function fetchShops(): Promise<Shop[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/shops`
  );

  if (!response.ok) {
    throw new Error("Unable to load shop locations");
  }

  return response.json();
}
