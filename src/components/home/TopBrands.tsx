import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const topBrands = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: `Brand ${i + 1}`,
  logo: `https://picsum.photos/seed/brandlogo${i}/80`,
  banner: `https://picsum.photos/seed/brandbanner${i}/300/100`,
}));

export default function TopBrands() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🏢 Top Supplier Brands
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topBrands.map((brand) => (
          <Card key={brand.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {brand.name}
                </h3>
              </div>
              <div className="relative w-full h-[100px] rounded overflow-hidden">
                <Image
                  src={brand.banner}
                  alt={`${brand.name} banner`}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
