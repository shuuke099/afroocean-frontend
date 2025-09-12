import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const readyProducts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: `Bulk Deal ${i + 1}`,
  desc: "Ships fast, low MOQ",
  price: `$${(25 + i * 2).toFixed(2)}`,
  image: `https://picsum.photos/seed/ready${i}/240/180`,
}));

export default function ReadyToOrder() {
  return (
    <section className="bg-blue-50 py-10 px-4 mt-10 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🚚 Ready to Order
          </h2>
          <Button variant="link" className="text-blue-700 font-semibold">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {readyProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-3">
                <div className="relative w-full h-28 rounded overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500">{product.desc}</p>
                  <p className="text-sm text-blue-600 font-bold">
                    {product.price}
                  </p>
                  <Button className="mt-2 w-full text-xs">Start Order</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
