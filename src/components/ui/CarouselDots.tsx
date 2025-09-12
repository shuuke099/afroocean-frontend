"use client";

import { useCallback, useEffect, useState } from "react";

// Hook to track selected slide and dot behavior
export function useDotButton(emblaApi: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

// Dot button UI
export function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`h-2 w-2 rounded-full ${
        selected ? "bg-primary" : "bg-muted-foreground/40"
      } transition`}
      onClick={onClick}
      aria-label="Scroll to slide"
    />
  );
}
