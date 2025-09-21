"use client";

import { Bell, Search, User } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {/* Search */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg flex-1 max-w-md">
        <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder-gray-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 ml-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            2
          </span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <span className="hidden sm:block text-sm font-medium">
            Admin User
          </span>
        </div>
      </div>
    </header>
  );
}
