type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  quantity: number;
  revenue: string;
  status: "Available" | "Not Available";
};

export default function ProductCard({
  image,
  name,
  price,
  quantity,
  revenue,
  status,
}: ProductCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-md object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {quantity} pcs · {price}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-900 dark:text-white">{revenue}</p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            status === "Available"
              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
