"use client";

const dummyDiscounts = [
  { id: 1, title: "Summer Sale", discount: "20%", date: "Aug 1 - Aug 15" },
  {
    id: 2,
    title: "Clearance Event",
    discount: "Up to 50%",
    date: "Sept 10 - Sept 20",
  },
];

export default function DiscountsSection() {
  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Discounts & Events
      </h2>
      <ul className="space-y-3">
        {dummyDiscounts.map((event) => (
          <li
            key={event.id}
            className="flex justify-between items-center p-3 rounded-md bg-gray-50 dark:bg-gray-800"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {event.title}
              </p>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
            <span className="font-semibold text-green-600">
              {event.discount}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
