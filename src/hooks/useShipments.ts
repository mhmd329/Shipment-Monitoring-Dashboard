import { useEffect, useState } from "react";
import { getShipments } from "../api/shipments.api";
import type { Shipment } from "../types/shipment";

export const useShipments = () => {
  const [data, setData] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tenantId = localStorage.getItem("tenantId");
    if (!tenantId) return;

    getShipments(tenantId)
      .then(setData)
      .catch(() => setError("Failed to load shipments"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
