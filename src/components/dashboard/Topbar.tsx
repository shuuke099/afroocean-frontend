"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Topbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-neutral" />
          </button>

          <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5">
            <Search className="w-4 h-4 text-neutral mr-2" />
            <input
              placeholder="Search listings, orders, messages…"
              className="bg-transparent outline-none text-sm w-64"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded hover:bg-gray-100">
            <Bell className="w-5 h-5 text-neutral" />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] px-1.5 rounded-full">
              3
            </span>
          </button>
          <div className="flex items-center gap-2">
            <img
              src="/afroocean-logo-1.png"
              alt="User"
              className="h-7 w-7 rounded-full object-contain bg-gray-100"
            />
            <span className="hidden sm:inline text-sm text-secondary font-medium">
              You
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
