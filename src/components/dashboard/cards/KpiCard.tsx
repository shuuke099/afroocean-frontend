import { cn } from "@/lib/utils/utils";
import Sparkline from "../charts/Sparkline";

type KpiCardProps = {
  title: string;
  value: string | number;
  change: string;
  positive?: boolean;
  icon: React.ReactNode;
  data: number[];
  color?: string; // ✅ new: custom color override
  description?: string; // ✅ new: optional tooltip/extra context
};

// ✅ helper to format numbers with commas
function formatValue(val: string | number) {
  if (typeof val === "string" && val.startsWith("$")) {
    const num = Number(val.replace(/[^0-9.-]+/g, ""));
    return `$${new Intl.NumberFormat().format(num)}`;
  }
  if (typeof val === "number" || !isNaN(Number(val))) {
    return new Intl.NumberFormat().format(Number(val));
  }
  return val; // fallback
}

export default function KpiCard({
  title,
  value,
  change,
  positive = true,
  icon,
  data,
  color,
  description,
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-5 shadow-md border transition-colors",
        "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        <span
          className={cn(
            "text-sm font-semibold",
            positive ? "text-green-500" : "text-red-500"
          )}
        >
          {change}
        </span>
      </div>

      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {formatValue(value)}
      </div>

      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {description}
        </p>
      )}

      <div className="h-12">
        <Sparkline
          data={data}
          color={color || (positive ? "#22c55e" : "#ef4444")}
        />
      </div>
    </div>
  );
}
