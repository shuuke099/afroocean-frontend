"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type SparklineProps = {
  data: number[];
  color?: string;
};

export default function Sparkline({ data, color = "#22c55e" }: SparklineProps) {
  return (
    <Line
      data={{
        labels: data.map((_, i) => i.toString()),
        datasets: [
          {
            data,
            borderColor: color,
            backgroundColor: "transparent",
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      }}
    />
  );
}
