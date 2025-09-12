import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-10 px-4 mt-12 rounded-xl text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">📩 Stay Updated</h2>
      <p className="text-sm text-gray-600 mb-4">
        Get weekly product insights, discounts and sourcing tips.
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1"
        />
        <Button type="submit" className="w-full sm:w-auto">
          Subscribe
        </Button>
      </form>
    </section>
  );
}
