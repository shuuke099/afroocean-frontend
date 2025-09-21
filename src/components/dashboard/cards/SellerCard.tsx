type SellerCardProps = {
  name: string;
  avatar: string; // image URL
  category: string;
  purchases: number;
  total: string;
  status: string;
};

export default function SellerCard({
  name,
  avatar,
  category,
  purchases,
  total,
  status,
}: SellerCardProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl shadow border bg-white dark:bg-gray-900 dark:border-gray-700">
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
          <p className="text-xs text-gray-400">{purchases} Purchases</p>
        </div>
      </div>

      {/* Right: Total + Status */}
      <div className="text-right">
        <p className="font-semibold text-gray-900 dark:text-white">{total}</p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            status === "Active"
              ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
              : status === "Inactive"
              ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              : "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
