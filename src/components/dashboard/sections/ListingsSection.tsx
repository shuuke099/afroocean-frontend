"use client";

const dummyListings = [
  {
    id: 1,
    title: "Luxury Apartment in NYC",
    price: "$2,500/mo",
    status: "Active",
  },
  { id: 2, title: "2020 Toyota Camry", price: "$18,000", status: "Pending" },
  { id: 3, title: "3-Bed Family House", price: "$250,000", status: "Sold" },
];

export default function ListingsSection() {
  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        My Listings
      </h2>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyListings.map((listing) => (
            <tr
              key={listing.id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <td className="p-3">{listing.title}</td>
              <td className="p-3">{listing.price}</td>
              <td className="p-3">{listing.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
