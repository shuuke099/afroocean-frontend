import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import Container from "@/components/ui/container";
import ProductList from "@/components/home/ProductList";
import Link from "next/link";

export const metadata = {
  title: "MultiVendor Marketplace | Fast Deals, Trusted Sellers",
  description:
    "Shop and sell in Somalia, Kenya, Minnesota, and beyond. Discover trending products, verified sellers, and unbeatable deals.",
  keywords: [
    "multi-vendor marketplace",
    "Somali ecommerce",
    "East Africa online shopping",
    "Jumia alternative",
    "buy and sell online",
  ],
  openGraph: {
    title: "MultiVendor Marketplace",
    description:
      "Join the largest Somali-focused marketplace. Trusted sellers. Fast delivery.",
    siteName: "MultiVendor",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "MultiVendor homepage banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MultiVendor Marketplace",
    description: "Trusted sellers. Smart shopping. Join now.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <Hero />

      <Container>
        {/* Categories Section */}
        <section className="mt-6">
  <h2 className="text-lg font-bold text-primary-light mb-4">
    Popular Categories
  </h2>
  <CategoryGrid
  gridClasses="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-x-4 gap-y-6 text-center"
  limit={12}
  showMore={true}
  showMoreLink="/categories"
/>
  
</section>

        {/* Hot Products Section */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-primary-light mb-2">
            🔥 Hot Products
          </h2>
          <ProductList />
        </section>

        {/* Future Sections (uncomment when ready) */}
        {/*
        <div className="max-w-7xl mx-auto px-4 space-y-12 mt-10">
          <HotProductVideos />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnalystsChoice />
            <NewProducts />
          </div>

          <ReadyToOrder />
          <FeaturedCategories />
          <TopBrands />
          <Newsletter />
        </div>
        */}
      </Container>
    </>
  );
}
