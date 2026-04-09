"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Sparkles, Shield, Heart, Calendar as CalendarIcon, Baby, CheckCircle } from "lucide-react";
import { AnimatedButton } from "@/app/components/ui/buttons/AnimatedButton";
import { useState } from "react";

interface AnimatedCardProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  badge?: string;
  badgeColor?: "primary" | "secondary";
  duration?: string;
  className?: string;
  onClick?: () => void;
  bookHref?: string;
  icon?: ReactNode;
}

export function AnimatedCard({ 
  children, 
  title, 
  description, 
  image,
  href,
  badge,
  badgeColor = "primary",
  duration,
  className = "",
  onClick,
  bookHref = "/book",
  icon
}: AnimatedCardProps) {
  
  const [imageError, setImageError] = useState(false);
  
  const cardVariants = {
    hover: { 
      y: -4,
      boxShadow: "0 20px 25px -5px rgba(193, 18, 31, 0.1), 0 10px 10px -5px rgba(193, 18, 31, 0.04)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const titleVariants = {
    hover: { color: "#C1121F" }
  };

  const CardContent = () => (
    <motion.div
      className={`bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-lg overflow-hidden group border border-gray-200 dark:border-[#333333] transition-all duration-300 hover:shadow-[0_0_15px_rgba(193,18,31,0.2)] ${className}`}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {image && !imageError && (
        <div className="relative h-48 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title || "Card image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              onError={() => setImageError(true)}
            />
          </div>
          {badge && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium z-10 ${
                badgeColor === "primary" 
                  ? "bg-[#FEE2E2] text-[#C1121F]" 
                  : "bg-[#E8F5E9] text-[#2E7D32]"
              }`}
            >
              {badge}
            </motion.span>
          )}
        </div>
      )}
      
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-red-100 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4">
            <div className="w-6 h-6 text-red-600">
              {icon}
            </div>
          </div>
        )}
        
        {title && (
          <motion.h3 
            className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
            variants={titleVariants}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        )}
        
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        )}
        
        {duration && (
          <motion.div 
            className="flex items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 bg-[#C1121F] rounded-full"></span>
            {duration}
          </motion.div>
        )}
        
        <div className="mt-6">
          <AnimatedButton 
            href={bookHref} 
            variant="primary" 
            size="sm"
            icon={<Calendar className="w-4 h-4" />}
          >
            Book Appointment
          </AnimatedButton>
        </div>
        
        {children}
      </div>
    </motion.div>
  );

  return <CardContent />;
}

// Service Card specific variant
export function ServiceCard({ service }: { service: any }) {
  // Map icon names to actual components
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "Sparkles": return <Sparkles className="w-6 h-6" />;
      case "Shield": return <Shield className="w-6 h-6" />;
      case "Heart": return <Heart className="w-6 h-6" />;
      case "Calendar": return <CalendarIcon className="w-6 h-6" />;
      case "Baby": return <Baby className="w-6 h-6" />;
      case "CheckCircle": return <CheckCircle className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <AnimatedCard
      title={service.name}
      description={service.description}
      image={service.image}
      badge={service.badge}
      duration={service.duration}
      bookHref="/book"
      icon={getIcon(service.iconName)}
    />
  );
}
