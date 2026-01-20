import { useShipments } from "../../hooks/useShipments";

export default function ShipmentsList() {
  const { data, loading, error } = useShipments();

  if (loading) return <p className='p-6'>Loading shipments...</p>;
  if (error) return <p className='p-6 text-red-500'>{error}</p>;
  if (!data.length) return <p className='p-6'>No shipments available</p>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-4'>Shipments</h1>

      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-left border-b'>
            <th>ID</th>
            <th>Status</th>
            <th>Warehouse</th>
            <th>Compliance</th>
            <th>Last Updated</th>
          </tr>
        </thead>

        <tbody>
          {data.map((shipment) => (
            <tr
              key={shipment.id}
              className='border-b hover:bg-gray-50 cursor-pointer'>
              <td>{shipment.id}</td>
              <td>{shipment.status}</td>
              <td>{shipment.warehouse}</td>
              <td>{shipment.complianceStatus}</td>
              <td>{shipment.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
