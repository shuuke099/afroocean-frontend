"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type BarChartProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
};

export default function BarChart({ data }: BarChartProps) {
  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
            labels: { color: "#6b7280" }, // gray-500 for light, works in dark mode too
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#6b7280" },
          },
          y: {
            ticks: { stepSize: 5000, color: "#6b7280" },
          },
        },
      }}
    />
  );
}
