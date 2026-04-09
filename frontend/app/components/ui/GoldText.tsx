"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GoldTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  shimmer?: boolean;
  animated?: boolean;
}

export function GoldText({ 
  children, 
  as: Component = "span", 
  className = "", 
  shimmer = true,
  animated = true 
}: GoldTextProps) {
  const goldClass = shimmer ? "gold-text-shimmer" : "gold-text";
  
  const content = (
    <Component className={`${goldClass} ${className}`}>
      {children}
    </Component>
  );
  
  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }
  
  return content;
}
