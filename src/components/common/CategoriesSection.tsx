import InfoCard from "./InfoCard";

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

interface CategoriesSectionProps {
  title: string;         // Section heading
  categories: Category[]; // List of categories
}

export default function CategoriesSection({
  title,
  categories,
}: CategoriesSectionProps) {
  return (
    <section className="px-6 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <InfoCard
            key={i}
            icon={cat.icon}
            title={cat.title}
            description={cat.description}
            href={cat.href}
            buttonText={cat.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
