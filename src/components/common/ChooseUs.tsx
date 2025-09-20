import InfoCard from "./InfoCard";

interface Reason {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ChooseUsProps {
  title: string; // Section heading (e.g. "Why Choose AfroOcean Real Estate")
  reasons: Reason[]; // List of reasons/features
  bgImage: string; // Background image
}

export default function ChooseUs({ title, reasons, bgImage }: ChooseUsProps) {
  return (
    <section
      className="relative px-6 py-16 text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <InfoCard
              key={i}
              icon={reason.icon}
              title={reason.title}
              description={reason.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
