import Sidebar from "../Dashboard/components/Sidebar";

export default function OrdersPage() {
  const orders = [
    {
      id: 1,
      item: "Grilled Chicken Salad",
      price: "$8.50",
      status: "Delivered",
      date: "Nov 1, 2025",
    },
    {
      id: 2,
      item: "Falafel Wrap",
      price: "$6.00",
      status: "In Progress",
      date: "Nov 2, 2025",
    },
    {
      id: 3,
      item: "Tomato Ball Soup",
      price: "$4.20",
      status: "Cancelled",
      date: "Oct 30, 2025",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-semibold mb-6">Your Orders</h1>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">{order.item}</td>
                  <td className="py-3 px-4">{order.price}</td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "In Progress"
                        ? "text-yellow-600"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="py-3 px-4 text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
