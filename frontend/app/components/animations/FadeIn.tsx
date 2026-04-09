"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  duration = 0.4,
  className = "",
  ...props
}: FadeInProps) {
  const getDirectionOffset = () => {
    switch(direction) {
      case "up": return { y: 20 };
      case "down": return { y: -20 };
      case "left": return { x: 20 };
      case "right": return { x: -20 };
      default: return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={{ willChange: "transform, opacity" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
