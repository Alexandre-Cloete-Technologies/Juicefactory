"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const juices = [
  {
    name: "Orange",
    description:
      "Hand-picked citrus sunshine in a fresh pressed pure bursting juice.",
    image: "/orange-juice.png",
  },
  {
    name: "Wildberry",
    description:
      "Antioxidant-rich blend of wild berries and organic greens for your daily kick.",
    image: "/wildberry-juice.png",
  },
  {
    name: "Lemon",
    description:
      "Extra hydration boost, ginger, and benefits of natural energy bliss.",
    image: "/lemon-juice.png",
  },
  {
    name: "Strawberry",
    description:
      "A vibrant mix of strawberries, blueberries, and blackberries.",
    image: "/strawberry-juice.png",
  },
];

export function JuicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(juices.length - 1, prev + 1));
  };

  return (
    <section className="py-16 bg-white" id="menu">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Juices
          </h2>
          <p className="text-green-600 font-medium">
            All available in COOPER, FL 21 and 16 FLZ
          </p>
        </div>

        {/* Products Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {juices.map((juice, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow border-none overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={juice.image}
                    alt={juice.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {juice.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {juice.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous juice"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= juices.length - 1}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next juice"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
