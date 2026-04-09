"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  slug: string;
  image: string;
}

export function LocationCard({ 
  name, 
  address, 
  phone, 
  hours, 
  slug, 
  image
}: LocationCardProps) {
  
  const [imageError, setImageError] = useState(false);
  
  const cardVariants = {
    hover: { 
      y: -4,
      transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative rounded-xl overflow-hidden shadow-md group h-[320px] sm:h-[340px] md:h-[360px] transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(193,18,31,0.3)] hover:shadow-xl"
    >
      {/* Background Image - no scale on hover */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content - Bottom Left */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-1.5 drop-shadow-lg line-clamp-1">{name}</h3>
        
        <div className="space-y-1 mb-3">
          <p className="flex items-start gap-1.5 text-xs sm:text-sm text-white/90">
            <MapPin size={12} className="mt-0.5 flex-shrink-0 text-red-400" />
            <span className="drop-shadow line-clamp-2 text-xs">{address}</span>
          </p>
          
          <a 
            href={`tel:${phone}`} 
            className="flex items-center gap-1.5 text-xs sm:text-sm text-white/90 hover:text-red-400 transition-colors w-fit"
          >
            <Phone size={12} className="flex-shrink-0 text-red-400" />
            <span className="drop-shadow">{phone}</span>
          </a>
          
          <p className="flex items-start gap-1.5 text-xs sm:text-sm text-white/90">
            <Clock size={12} className="mt-0.5 flex-shrink-0 text-red-400" />
            <span className="drop-shadow text-[11px] sm:text-xs leading-tight line-clamp-2">{hours}</span>
          </p>
        </div>
        
        <Link href={`/locations/${slug}`}>
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-full text-xs font-medium shadow-md hover:bg-red-700 transition-colors"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Directions
            <ChevronRight size={12} />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
