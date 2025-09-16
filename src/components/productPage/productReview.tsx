"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ali M.",
    country: "🇸🇴",
    rating: 5,
    date: "April 2025",
    text: "Very affordable and it came quickly. Quality better than expected!",
  },
  {
    name: "Nadia K.",
    country: "🇰🇪",
    rating: 4,
    date: "March 2025",
    text: "Nice design and true to size. Will order again.",
  },
  {
    name: "Hamza B.",
    country: "🇺🇬",
    rating: 5,
    date: "February 2025",
    text: "Shiny and light — great gift idea!",
  },
];

const tags = [
  "Affordable",
  "Satisfactory",
  "Good Fit",
  "Under $6",
  "Fast Delivery",
];

export default function ProductReviews() {
  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>

      {/* Star Rating Summary */}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < 5 ? "#facc15" : "#e5e7eb"}
              strokeWidth={0}
            />
          ))}
        </div>
        <span className="text-gray-700 font-medium">4.7 / 5</span>
        <span className="text-gray-400">(67 reviews)</span>
      </div>
      {/* Review Tags */}

      {/* Verified Reviews List */}
      <div className="mt-6 space-y-4 text-sm">
        {reviews.map((review, i) => (
          <div key={i} className="border border-gray-200 p-4 rounded">
            <div className="flex items-center justify-between">
              <div className="font-semibold">
                {review.name} {review.country}
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    fill={j < review.rating ? "#facc15" : "#e5e7eb"}
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-400 mb-2">{review.date}</div>
            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
