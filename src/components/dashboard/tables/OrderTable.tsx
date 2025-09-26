"use client";

import Image from "next/image";

type Inquiry = {
  id: string;
  product: string;
  image: string;
  price: string;
  buyer: string;
  date: string;
  clicks: number; // ✅ New field
};

const inquiries: Inquiry[] = [
  {
    id: "#I-1001",
    product: "Wireless Headphones",
    image: "https://picsum.photos/80?random=1",
    price: "$120",
    buyer: "Robert Fox (WhatsApp)",
    date: "2025-09-15",
    clicks: 5,
  },
  {
    id: "#I-1002",
    product: "Smartwatch",
    image: "https://picsum.photos/80?random=2",
    price: "$199",
    buyer: "Jenny Wilson (WhatsApp)",
    date: "2025-09-16",
    clicks: 8,
  },
  {
    id: "#I-1003",
    product: "Gaming Mouse",
    image: "https://picsum.photos/80?random=3",
    price: "$59",
    buyer: "Courtney Henry (WhatsApp)",
    date: "2025-09-17",
    clicks: 3,
  },
];

export default function InquiriesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Inquiry ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Product
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Price
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Buyer
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              Date
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
              WhatsApp Clicks
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {inquiries.map((inquiry) => (
            <tr
              key={inquiry.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {inquiry.id}
              </td>
              <td className="px-4 py-3 flex items-center gap-3">
                <Image
                  src={inquiry.image}
                  alt={inquiry.product}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {inquiry.product}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {inquiry.price}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {inquiry.buyer}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {inquiry.date}
              </td>
              <td className="px-4 py-3 text-sm font-semibold text-gray-700 text-center">
                {inquiry.clicks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
