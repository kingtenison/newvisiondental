"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Camera } from "lucide-react";
import Link from "next/link";

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image_url: string;
  is_before_after: boolean;
}

const spanClasses = ["col-span-2 row-span-2", "", "row-span-2", "", "col-span-2", "", "row-span-2", "", "col-span-2"];

export default function GalleryClient({ images, categories }: { images: GalleryImage[]; categories: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[35vh] flex flex-col overflow-hidden">
        {/* Full Width 4x2 Image Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative h-full w-full">
              <Image
                src="/images/gallery/dental bacccccc.png"
                alt="Dental background"
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
        
        {/* Wine Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0814]/95 via-[#5C0F22]/70 to-[#7A1A2E]/30" />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 flex-1 flex items-center justify-center py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
              <Camera className="w-4 h-4" /> Smile Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
              <span className="text-white">Our</span>
              <span className="block text-golden-shine mt-1">Smile Gallery</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              See the amazing transformations we have created for our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full bg-[#e7e7e7] pt-10 pb-4">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#D4AF37] text-[#1a0a10] shadow-lg shadow-[#D4AF37]/25"
                    : "bg-white text-[#5C0F22] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full pt-6 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-[#D4AF37]/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#5C0F22] mb-2">No Images Yet</h3>
              <p className="text-gray-500">Gallery images will appear here once uploaded.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 animate-[fadeIn_0.5s_ease-out] ${spanClasses[index % spanClasses.length]}`}
                  style={{ animationDelay: `${index * 40}ms`, animationFillMode: "both" }}
                  onClick={() => {
                    setSelectedImage(image);
                    setCurrentIndex(index);
                  }}
                >
                  <Image
                    src={image.image_url}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 8 ? "eager" : "lazy"}
                    unoptimized={image.image_url?.includes('cloudinary') || image.image_url?.includes('supabase')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  {image.is_before_after && (
                    <span className="absolute top-3 left-3 bg-[#D4AF37] text-[#1a0a10] text-[10px] font-bold px-2.5 py-1 rounded-full z-20 uppercase tracking-wider">
                      Before & After
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#5C0F22] text-[10px] font-semibold px-2.5 py-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <h3 className="text-white font-semibold text-sm md:text-base">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-[#D4AF37] transition-colors z-10" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#D4AF37] transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
                setCurrentIndex(newIndex);
                setSelectedImage(filteredImages[newIndex]);
              }}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#D4AF37] transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
                setSelectedImage(filteredImages[newIndex]);
              }}
            >
              <ChevronRight size={48} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-4xl max-h-[80vh] w-full bg-[#1a0a10] rounded-2xl border border-[#D4AF37]/20 overflow-hidden"
            >
              <div className="p-10 text-center">
                <div className="w-24 h-24 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                  <Camera className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-[#D4AF37] text-sm font-medium mb-4">{selectedImage.category}</p>
                {selectedImage.is_before_after && (
                  <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
                    Before & After
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">Ready to Transform Your Smile?</h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">Book a consultation today and start your journey to a beautiful smile.</p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold btn-golden-shine shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Book Your Consultation
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
