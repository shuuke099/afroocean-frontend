"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/ui/productGallery";
import ScheduleTourForm from "@/components/real-state/ScheduleTourForm";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/container";

export default function PropertyDetail({ property }: { property: any }) {
  const [showTour, setShowTour] = useState(false);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* LEFT SIDE – Gallery + Details */}
      <div className="lg:col-span-2 space-y-6">
        <ProductGallery />

        <div>
          <h1 className="text-2xl font-bold text-primary">{property.title}</h1>
          <p className="text-accent text-xl font-semibold">{property.price}</p>
          <p className="text-gray-600">
            {property.beds} bds | {property.baths} ba |{" "}
            {property.sqft.toLocaleString()} sqft
          </p>
          <p className="text-gray-500">{property.address}</p>

          {/* Description */}
          <h2 className="text-lg font-semibold text-primary mt-3">
            Property Overview
          </h2>

          {property.description && (
            <p className="mt-1 text-sm text-neutral">{property.description}</p>
          )}

          {/* Contact */}
          {property.contact && (
            <p className="mt-2 text-sm text-gray-700">
              Contact:{" "}
              <a
                href={`tel:${property.contact}`}
                className="text-primary font-semibold"
              >
                {property.contact}
              </a>
            </p>
          )}
        </div>

        {/* Map */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-secondary">
            Location
          </h2>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.address
            )}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* DESKTOP RIGHT SIDE – Always visible */}
      <div className="hidden lg:block border rounded-lg p-4 shadow-sm space-y-4 bg-white">
        <h2 className="text-lg font-semibold text-secondary">
          Schedule a Tour
        </h2>
        <ScheduleTourForm />
      </div>

      {/* MOBILE ONLY – Sticky Bottom */}
      <div className="fixed bottom-14 left-0 w-full bg-white border-t p-3 flex gap-2 z-50 lg:hidden">
        <Button
          className="flex-1 bg-primary text-white"
          onClick={() => setShowTour(true)}
        >
          Schedule Tour
        </Button>
      </div>

      {/* MOBILE MODAL */}

      <AnimatePresence>
        {showTour && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-md bg-white p-4 rounded-lg space-y-4 max-h-[80vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-secondary">
                    Schedule a Tour
                  </h2>
                  <button
                    onClick={() => setShowTour(false)}
                    className="text-gray-500 text-xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Reuse the same form */}
                <ScheduleTourForm onSubmit={() => setShowTour(false)} />
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
