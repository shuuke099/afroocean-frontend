import Link from "next/link";
import { ReactNode } from "react";

type InfoCardProps = {
  icon: string | ReactNode; // string URL or JSX element
  title: string;
  description?: string;     // made optional
  buttonText?: string;
  href?: string;
  hoverable?: boolean;      // new optional prop
};

export default function InfoCard({
  icon,
  title,
  description,
  buttonText,
  href,
  hoverable = true,
}: InfoCardProps) {
  return (
    <article
      className={`bg-gray-50 rounded-xl shadow-sm p-6 text-center flex flex-col items-center space-y-3 ${
        hoverable ? "hover:shadow-md transition" : ""
      }`}
    >
      {/* Icon */}
      {typeof icon === "string" ? (
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      ) : (
        icon
      )}

      {/* Title */}
      <h3 className="text-lg font-bold text-secondary">{title}</h3>

      {/* Description (optional) */}
      {description && <p className="text-sm text-gray-600">{description}</p>}

      {/* Button (optional) */}
      {buttonText && href && (
        <Link
          href={href}
          className="mt-auto inline-block px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
        >
          {buttonText}
        </Link>
      )}
    </article>
  );
}
