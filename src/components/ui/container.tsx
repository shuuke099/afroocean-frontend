// components/ui/Container.tsx
import { cn } from "@/lib/utils"; // optional utility for combining classes

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[90%] max-w-[1440px] mx-auto overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
