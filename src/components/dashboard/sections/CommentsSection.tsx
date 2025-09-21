"use client";

export default function CommentsSection() {
  const comments = [
    { name: "Kathryn Murphy", text: "Amazing service!", rating: 5 },
    { name: "Leslie Alexander", text: "Products delivered fast.", rating: 4 },
    { name: "Devon Lane", text: "Good quality but shipping late.", rating: 3 },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Latest Comments
      </h2>
      <ul className="space-y-4">
        {comments.map((c, i) => (
          <li key={i} className="text-sm">
            <p className="font-medium text-gray-900 dark:text-white">
              {c.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{c.text}</p>
            <p className="text-yellow-500">{"★".repeat(c.rating)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
