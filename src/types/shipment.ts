export interface Shipment {
  id: string;
  status: "ACTIVE" | "INACTIVE" | "COMPLETED";
  warehouse: string;
  complianceStatus: "APPROVED" | "PENDING";
  lastUpdated: string;
}
