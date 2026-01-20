import api from "./axios";
import type { Shipment } from "../types/shipment";

export const getShipments = async (tenantId: string): Promise<Shipment[]> => {
  const { data } = await api.get(`/api/v1/tenants/${tenantId}/shipments`);
  return data;
};
