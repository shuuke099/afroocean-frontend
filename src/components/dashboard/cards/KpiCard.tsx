import { cn } from "@/lib/utils/utils";
import Sparkline from "../charts/Sparkline";

type KpiCardProps = {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: React.ReactNode;
  data: number[];
};

export default function KpiCard({
  title,
  value,
  change,
  positive = true,
  icon,
  data,
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
        {value}
      </div>
      <div className="h-12">
        <Sparkline data={data} color={positive ? "#22c55e" : "#ef4444"} />
      </div>
    </div>
  );
}
