"use client";

import Image from "next/image";

type Order = {
  id: string;
  product: string;
  image: string;
  price: string;
  quantity: number;
  customer: string;
  date: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
};

const orders: Order[] = [
  {
    id: "#1023",
    product: "Wireless Headphones",
    image: "https://picsum.photos/80?random=1",
    price: "$120",
    quantity: 2,
    customer: "Robert Fox",
    date: "2025-09-15",
    status: "Shipped",
  },
  {
    id: "#1024",
    product: "Smartwatch",
    image: "https://picsum.photos/80?random=2",
    price: "$199",
    quantity: 1,
    customer: "Jenny Wilson",
    date: "2025-09-16",
    status: "Delivered",
  },
  {
    id: "#1025",
    product: "Gaming Mouse",
    image: "https://picsum.photos/80?random=3",
    price: "$59",
    quantity: 3,
    customer: "Courtney Henry",
    date: "2025-09-17",
    status: "Pending",
  },
];

export default function OrdersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Order ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Product
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Price
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Quantity
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Customer
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Date
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {order.id}
              </td>
              <td className="px-4 py-3 flex items-center gap-3">
                <Image
                  src={order.image}
                  alt={order.product}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {order.product}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {order.price}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {order.quantity}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {order.customer}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {order.date}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
