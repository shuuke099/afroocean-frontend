"use client";

export default function TopCountriesSection() {
  const countries = [
    { name: "USA", sales: "$12,000", trend: "+2.3%", positive: true },
    { name: "Germany", sales: "$8,700", trend: "-1.1%", positive: false },
    { name: "France", sales: "$7,200", trend: "+0.9%", positive: true },
    { name: "India", sales: "$6,500", trend: "+3.4%", positive: true },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Top Countries by Sales
      </h2>
      <ul className="space-y-3">
        {countries.map((c, i) => (
          <li
            key={i}
            className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300"
          >
            <span>{c.name}</span>
            <span>{c.sales}</span>
            <span className={c.positive ? "text-green-500" : "text-red-500"}>
              {c.trend}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
