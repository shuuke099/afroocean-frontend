import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const images = [
  "https://picsum.photos/id/10/800/800",
  "https://picsum.photos/id/20/800/800",
  "https://picsum.photos/id/30/800/800",
  "https://picsum.photos/id/40/800/800",
  "https://picsum.photos/id/50/800/800",
];

export default function ProductGallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="w-full max-w-[360px] h-[360px] mx-auto sm:mx-0">
        <Image
          src={images[photoIndex]}
          alt="Main product image"
          width={360}
          height={360}
          className="object-cover w-full h-full rounded transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen(true)}
          priority
        />
      </div>

      <div className="flex gap-2 overflow-x-auto px-1 sm:px-0">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`thumb-${i}`}
            width={56}
            height={56}
            onClick={() => setPhotoIndex(i)}
            className={`w-14 h-14 object-cover rounded cursor-pointer border ${
              photoIndex === i ? "border-[#ffa200]" : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}
