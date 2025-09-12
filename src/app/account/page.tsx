"use client";

import Link from "next/link";
import { MessageSquare, Package, Star, Ticket, CreditCard, MapPin, Headphones, Settings } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sign-in Section */}
      <div className="text-center py-6 border-b mt-2">
        <h2 className="text-lg font-semibold text-primary-light">Sign in for the best experience</h2>
        <div className="flex justify-center gap-8 mt-6 text-sm">
  {/* Free Shipping */}
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-2">
      <span className="text-green-600 font-bold text-lg">✔</span>
    </div>
    <p className="font-medium text-gray-800">No import charges</p>
    <p className="text-xs text-gray-500">For local warehouse items</p>
  </div>

  {/* Free Returns */}
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-2">
      <span className="text-orange-500 font-bold text-lg">↺</span>
    </div>
    <p className="font-medium text-gray-800">Free returns</p>
    <p className="text-xs text-gray-500">Up to 90 days</p>
  </div>
</div>

    

<div className="mt-4 flex gap-4 justify-center">
  <Link
    href="/signIn"
    className="bg-[#ffa200] text-white px-6 py-2 rounded-full font-medium hover:bg-[#e59400] transition"
  >
    Sign In
  </Link>

  <Link
    href="/register"
    className="bg-white border border-[#ffa200] text-[#ffa200] px-6 py-2 rounded-full font-medium hover:bg-[#fff5e6] transition"
  >
    Register
  </Link>
</div>

      </div>

    
    </div>
  );
}
