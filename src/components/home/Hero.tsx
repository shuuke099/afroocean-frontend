"use client";

import Image from "next/image";
import Container from "../ui/container";

export default function Hero() {
  return (
    <Container>
      <div className="relative w-full h-[150px] sm:h-[400px] overflow-hidden rounded-xl">
        <Image
          src="https://picsum.photos/seed/furniturebanner/1600/500"
          fill
          alt="Furniture Promo"
          className="object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="font-semibold text-xl sm:text-3xl">Stylish Furniture</p>
          <p className="text-sm sm:text-lg">Up to 70% Off</p>
          <p className="text-xs sm:text-sm">
            Modern, Minimalist, and Comfortable
          </p>
        </div>
      </div>
    </Container>
  );
}
