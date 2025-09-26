"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

type ProductGalleryProps = {
  images: string[];
};

const fallbackImages = [
  "https://picsum.photos/id/201/800/800",
  "https://picsum.photos/id/202/800/800",
  "https://picsum.photos/id/203/800/800",
  "https://picsum.photos/id/204/800/800",
];

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Ensure at least 4 images
  const displayImages =
    images.length >= 4 ? images : [...images, ...fallbackImages].slice(0, 4);

  return (
    <>
      {/* Main Image */}
      <div className="w-full max-w-[400px] h-[400px] mx-auto sm:mx-0">
        <Image
          src={displayImages[photoIndex]}
          alt="Main product image"
          width={400}
          height={400}
          className="object-cover w-full h-full rounded transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setOpen(true)}
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto mt-3">
        {displayImages.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`thumb-${i}`}
            width={64}
            height={64}
            onClick={() => setPhotoIndex(i)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border ${
              photoIndex === i ? "border-[#ffa200]" : "border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          slides={displayImages.map((url) => ({ src: url }))}
          plugins={[Thumbnails]}
        />
      )}
    </>
  );
}
