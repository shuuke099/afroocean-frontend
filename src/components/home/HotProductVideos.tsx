import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const hotProducts = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `Hot Product ${i + 1}`,
  price: `$${(10 + i * 3).toFixed(2)} - $${(15 + i * 3).toFixed(2)}`,
  moq: `${5 + i} pcs`,
  video: i % 2 === 0,
  image: `https://picsum.photos/seed/hot${i}/220/160`,
  videoUrl: i % 2 === 0 ? "https://www.w3schools.com/html/mov_bbb.mp4" : null,
}));

export default function HotProductVideos() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          🔥 Hot Product Videos
        </h2>
        <Link
          href="/products/hot"
          className="text-sm text-blue-600 hover:underline"
        >
          View More
        </Link>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-8 pb-2">
          {hotProducts.map((product) => (
            <Card
              key={product.id}
              className="w-[220px] border-none shadow-none rounded-none"
            >
              <CardContent className="py-3">
                <div className="relative w-full h-36 rounded overflow-hidden">
                  {product.videoUrl ? (
                    <video
                      src={product.videoUrl}
                      controls
                      muted
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  {product.video && (
                    <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                      🎥 Video
                    </Badge>
                  )}
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                  <p className="text-xs text-gray-500">MOQ: {product.moq}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
