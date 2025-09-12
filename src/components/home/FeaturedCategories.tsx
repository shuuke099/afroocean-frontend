import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const categories = [
  { name: "Used Laptops", image: "https://picsum.photos/seed/laptop/100" },
  {
    name: "Bluetooth Speaker",
    image: "https://picsum.photos/seed/speaker/100",
  },
  { name: "Watches", image: "https://picsum.photos/seed/watch/100" },
  { name: "CCTV Camera", image: "https://picsum.photos/seed/camera/100" },
  { name: "Footwear", image: "https://picsum.photos/seed/shoes/100" },
  { name: "Bags", image: "https://picsum.photos/seed/bag/100" },
];

export default function FeaturedCategories() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🎯 Featured Categories
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <Card className="flex flex-col items-center  py-4 border-none shadow-none">
              <div className="rounded-full overflow-hidden w-24 h-24">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <CardContent className="text-center text-sm font-medium text-gray-700">
                {cat.name}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
