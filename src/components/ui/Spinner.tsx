"use client";

import React from "react";

interface SpinnerProps {
  size?: number; // size in px
  color?: string; // Tailwind color classes
  border?: string; // Tailwind border width
}

export default function Spinner({
  size = 32,
  color = "border-orange-500",
  border = "border-4",
}: SpinnerProps) {
  return (
    <div
      className={`rounded-full border-t-transparent animate-spin ${color} ${border}`}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
}
