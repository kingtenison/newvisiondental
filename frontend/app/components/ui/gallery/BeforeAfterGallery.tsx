"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterPair {
  before: string;
  after: string;
  title: string;
  description?: string;
}

interface BeforeAfterGalleryProps {
  pairs: BeforeAfterPair[];
}

export function BeforeAfterGallery({ pairs }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pairs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pairs.length - 1 ? 0 : prev + 1));
  };

  const currentPair = pairs[currentIndex];

  return (
    <div className="space-y-8">
      {/* Before/After Slider */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
        {/* After Image */}
        <div className="absolute inset-0">
          <Image
            src={currentPair.after}
            alt={`After - ${currentPair.title}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Before Image with Slider */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={currentPair.before}
            alt={`Before - ${currentPair.title}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-[#C1121F]" />
            <ChevronRight className="w-4 h-4 text-[#2E7D32]" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          After
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <motion.button
          onClick={handlePrevious}
          className="p-3 rounded-full bg-[#C1121F] text-white hover:bg-[#B91C1C] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">{currentPair.title}</h3>
          {currentPair.description && (
            <p className="text-gray-600">{currentPair.description}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            {currentIndex + 1} / {pairs.length}
          </p>
        </div>

        <motion.button
          onClick={handleNext}
          className="p-3 rounded-full bg-[#2E7D32] text-white hover:bg-[#166534] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center">
        {pairs.map((pair, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-[#C1121F]' : 'opacity-50'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={pair.after}
              alt={pair.title}
              fill
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
