import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const analystProducts = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  name: `Analyst Pick ${i + 1}`,
  category: "Trending Tech",
  image: `https://picsum.photos/seed/analyst${i}/300/200`,
  price: `$${(40 + i * 5).toFixed(2)}`,
}));

export default function AnalystsChoice() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        🔍 Analyst’s Choice
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">
        {analystProducts.map((product) => (
          <Card key={product.id} className="border-none shadow-none">
            <CardContent className="px-2">
              <div className="relative w-full h-40 rounded overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs">
                  {product.category}
                </Badge>
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Starting at {product.price}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
