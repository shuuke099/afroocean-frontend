"use client";

import { ReactNode } from "react";

type Column<T> = {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (row: T) => ReactNode;
};

export default function DataTable<T>({
  columns,
  data,
  empty,
}: {
  columns: Column<T>[];
  data: T[];
  empty?: ReactNode;
}) {
  if (!data?.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-gray-500">
        {empty ?? "No data yet."}
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            {columns.map((c) => (
              <th
                key={String(c.key)}
                className={`px-4 py-3 font-semibold text-secondary ${
                  c.className ?? ""
                }`}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((c) => (
                <td
                  key={String(c.key)}
                  className={`px-4 py-3 ${c.className ?? ""}`}
                >
                  {c.render ? c.render(row) : (row as any)[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
