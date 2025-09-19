// src/components/real-estate/InfoCard.tsx
import Link from "next/link";
import { ReactNode } from "react";

type InfoCardProps = {
  icon: string | ReactNode; // string URL or JSX element
  title: string;
  description: string;
  buttonText?: string; // optional, for reuse in places that don’t need a button
  href?: string;
};

export default function InfoCard({
  icon,
  title,
  description,
  buttonText,
  href,
}: InfoCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-6 text-center flex flex-col items-center space-y-3 hover:shadow-md transition">
      {/* If icon is a string, render <img>, otherwise render JSX */}
      {typeof icon === "string" ? (
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      ) : (
        icon
      )}

      <h3 className="text-lg font-bold text-secondary">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>

      {buttonText && href && (
        <Link
          href={href}
          className="mt-auto inline-block px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
