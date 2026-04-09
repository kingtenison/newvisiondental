"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function Parallax({ 
  children, 
  offset = 50, 
  speed = 0.5,
  direction = "up",
  className = "" 
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    switch(direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      default:
        return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    }
  };

  const y = getTransform();

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
