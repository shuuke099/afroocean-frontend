"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type LineChartProps = {
  labels: string[];
  values: number[];
  label?: string;
  color?: string;
};

export default function LineChart({
  labels,
  values,
  label = "Trend",
  color = "#6366f1",
}: LineChartProps) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label,
            data: values,
            borderColor: color,
            backgroundColor: color + "33",
            fill: true,
            tension: 0.4,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { ticks: { stepSize: 20 } },
        },
      }}
    />
  );
}
