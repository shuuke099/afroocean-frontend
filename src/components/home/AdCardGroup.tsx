"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ads = [
  {
    title: "Get Verified",
    description: "Become a premium seller today",
    image: "https://picsum.photos/seed/seller/400/180",
    link: "/become-seller",
  },
  {
    title: "Official Brand Promo",
    description: "Save big with our partners",
    image: "https://picsum.photos/seed/brand/400/180",
    link: "/brands",
  },
  {
    title: "Secure Delivery",
    description: "Ship faster, safer, and smarter",
    image: "https://picsum.photos/seed/delivery/400/180",
    link: "/delivery-info",
  },
];

export default function AdCardGroup() {
  return (
    <div className="flex flex-col gap-2 h-full">
      {ads.map((ad, i) => (
        <Link key={i} href={ad.link} passHref>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group overflow-hidden rounded-xl relative shadow hover:shadow-md border border-muted bg-white"
          >
            <div className="relative  lg:h-[115px] w-full">
              <Image
                src={ad.image}
                alt={ad.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h4 className="text-sm font-semibold">{ad.title}</h4>
                <p className="text-xs text-muted">{ad.description}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
