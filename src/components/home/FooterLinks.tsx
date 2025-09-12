import Link from "next/link";

const footerSections = [
  {
    title: "Buyer Services",
    links: [
      "Request for Quotation",
      "Find Products",
      "Sourcing Solutions",
      "Buyer FAQs",
    ],
  },
  {
    title: "Supplier Tools",
    links: [
      "Sell on OceanMarket",
      "Manage Products",
      "Supplier Login",
      "Pricing & Fees",
    ],
  },
  {
    title: "Company Info",
    links: ["About Us", "Contact", "Careers", "Media Center"],
  },
  {
    title: "Support",
    links: ["Help Center", "Returns", "Terms of Service", "Privacy Policy"],
  },
];

export default function FooterLinks() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-semibold mb-4 text-white">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} OceanMarket. All rights reserved.
      </div>
    </footer>
  );
}
