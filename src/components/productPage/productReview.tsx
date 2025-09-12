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

      {/* True to Size Fit Bar */}
      <div className="mt-4 text-xs text-gray-600 w-[20%]">
        <p className="mb-1">Fit Feedback</p>
        <div className="flex flex-col  gap-4">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span>Too Small</span>
              <span>12%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-red-400 h-2 rounded"
                style={{ width: "12%" }}
              ></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span>True to Size</span>
              <span>78%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: "78%" }}
              ></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span>Too Large</span>
              <span>10%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-yellow-500 h-2 rounded"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Tags */}
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#ffe082] text-[#333] px-2 py-[2px] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

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
