"use client";

import SellerCard from "../cards/SellerCard";

export default function BestSellersSection() {
  const sellers = [
    {
      name: "Robert",
      avatar: "/avatars/robert.png", // add avatar
      category: "Kitchen, Pets",
      purchases: 73,
      total: "$1,000",
      status: "Active", // add status
    },
    {
      name: "Calvin",
      avatar: "/avatars/calvin.png",
      category: "Health, Grocery",
      purchases: 66,
      total: "$4,000",
      status: "Top Seller",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Best Shop Sellers
      </h2>
      <div className="space-y-4">
        {sellers.map((seller, i) => (
          <SellerCard key={i} {...seller} />
        ))}
      </div>
    </section>
  );
}
