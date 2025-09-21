"use client";

type Product = {
  name: string;
  id: string;
  price: string;
  qty: number;
  sale: string;
  revenue: string;
  status: "Available" | "Not Available";
};

const products: Product[] = [
  {
    name: "Soft Fluffy Cats",
    id: "#327",
    price: "$11.70",
    qty: 28,
    sale: "On Sale",
    revenue: "$328.85",
    status: "Not Available",
  },
  {
    name: "Taste of the Wild Formula Finder",
    id: "#380",
    price: "$8.99",
    qty: 10,
    sale: "On Sale",
    revenue: "$105.55",
    status: "Not Available",
  },
  {
    name: "Wellness Natural Food",
    id: "#126",
    price: "$5.22",
    qty: 578,
    sale: "--",
    revenue: "$202.87",
    status: "Not Available",
  },
  {
    name: "Dog Food Rachael Ray",
    id: "#582",
    price: "$14.81",
    qty: 36,
    sale: "--",
    revenue: "$475.22",
    status: "Available",
  },
  {
    name: "Best Buddy Bits Treats",
    id: "#293",
    price: "$6.48",
    qty: 84,
    sale: "--",
    revenue: "$219.78",
    status: "Not Available",
  },
];

export default function ProductTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Product ID</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Sale</th>
            <th className="px-4 py-2">Revenue</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={i}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2">{p.price}</td>
              <td className="px-4 py-2">{p.qty}</td>
              <td className="px-4 py-2">{p.sale}</td>
              <td className="px-4 py-2">{p.revenue}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    p.status === "Available"
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                  }`}
                >
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
