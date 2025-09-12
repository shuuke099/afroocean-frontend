"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const discountData = [
  { label: "10% OFF", over: "$69" },
  { label: "15% OFF", over: "$109" },
  { label: "20% OFF", over: "$189" },
];

export default function HerroBanner() {
  return (
    <div className="space-y-6">
      {/* Discount Banners */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-[#fff4e6] p-4 rounded-xl flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-2 text-center">
            {discountData.map((item, i) => (
              <div key={i} className="bg-white p-2 rounded shadow">
                <p className="text-sm font-bold text-[#ff5722]">{item.label}</p>
                <p className="text-xs text-muted-foreground">
                  OVER {item.over}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button className="bg-[#ffa200] w-full text-white text-sm">
              Use Code: US24J2
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#fff0f6] to-[#ffe4ec] p-4 rounded-xl">
          <p className="text-sm text-[#d63384] font-semibold mb-2">
            SHEIN CLUB
          </p>
          <p className="text-xs">
            Extra 5% OFF on 100k+ items! Unlock savings!
          </p>
          <Button variant="ghost" className="text-[#ffa200] mt-2 text-xs px-0">
            Join Now →
          </Button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="w-full h-[220px] sm:h-[320px] relative rounded-xl overflow-hidden">
        <Image
          src="https://picsum.photos/seed/festivalbanner/1200/400"
          fill
          alt="Festival Banner"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
          <p className="text-2xl font-extrabold tracking-wide">FESTIVAL SZN</p>
          <p className="text-sm">Amp up your style with the hottest hits</p>
          <Button className="mt-2 text-xs bg-white text-[#ffa200] font-semibold">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
