"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Sparkles, Shield, Heart, Baby, CheckCircle } from "lucide-react";

interface GlassServiceCardProps {
  service: {
    name: string;
    description: string;
    iconName: string;
    slug: string;
    duration: string;
    image: string;
  };
  index: number;
}

const iconMap = {
  Sparkles: Sparkles,
  Shield: Shield,
  Heart: Heart,
  Calendar: Calendar,
  Baby: Baby,
  CheckCircle: CheckCircle,
};

export function GlassServiceCard({ service, index }: GlassServiceCardProps) {
  const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Sparkles;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitbackdropFilter: "blur(12px)",
    border: "1px solid rgba(197, 160, 89, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="relative rounded-2xl overflow-hidden group"
      style={glassStyle}
    >
      {/* Image with parallax effect on hover */}
      <div className="relative h-52 w-full overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059]/40 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        {/* Icon with glass effect */}
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#A68A46] flex items-center justify-center mb-4 shadow-lg"
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <IconComponent className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#C5A059] transition-colors">
          {service.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3 text-[#C5A059]" />
            <span>{service.duration}</span>
          </div>
        </div>

        <Link href={`/services/${service.slug}`}>
          <motion.div 
            className="inline-flex items-center gap-2 text-[#C5A059] font-semibold text-sm group-hover:gap-3 transition-all"
            whileHover={{ x: 5 }}
          >
            Learn more <ChevronRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(197, 160, 89, 0.2), transparent 70%)"
        }}
      />
    </motion.div>
  );
}

