export default function Badge({
  color = "gray",
  children,
}: {
  color?: "green" | "yellow" | "red" | "blue" | "gray";
  children: React.ReactNode;
}) {
  const map = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-gray-100 text-gray-700",
  }[color];

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${map}`}
    >
      {children}
    </span>
  );
}
