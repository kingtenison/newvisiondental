"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "green" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  animated?: boolean;
}

export function AnimatedButton({ 
  children, 
  onClick, 
  href,
  variant = "primary", 
  size = "md",
  icon,
  className = "",
  fullWidth = false,
  animated = true
}: AnimatedButtonProps) {
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Updated variant classes with new colors
  const variantClasses = {
    primary: "bg-[#5C0F22] text-white hover:bg-[#7A1A2E] shadow-md hover:shadow-lg",
    secondary: "border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#5C0F22] hover:shadow-[0_0_12px_rgba(197,160,89,0.4)]",
    green: "bg-[#2E7D32] text-white hover:bg-[#166534] shadow-md hover:shadow-lg",
    outline: "border border-gray-300 hover:border-[#C5A059] hover:text-[#C5A059]"
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { 
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const iconVariants = {
    hover: { 
      x: 3,
      transition: { duration: 0.2 }
    }
  };

  const ButtonContent = () => (
    <motion.div 
      className="flex items-center justify-center gap-2"
      variants={icon ? { hover: iconVariants.hover } : {}}
    >
      {icon && (
        <motion.span 
          className="w-5 h-5"
          variants={iconVariants}
        >
          {icon}
        </motion.span>
      )}
      <span>{children}</span>
    </motion.div>
  );

  const buttonClasses = `${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} rounded-full font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 ${className}`;

  if (href) {
    return (
      <motion.div
        initial={animated ? { opacity: 0, y: 10 } : undefined}
        whileInView={animated ? "whileInView" : undefined}
        viewport={{ once: true, margin: "-30px" }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{ willChange: "transform, opacity" }}
      >
        <Link href={href} className={buttonClasses}>
          <ButtonContent />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      initial={animated ? { opacity: 0, y: 10 } : undefined}
      whileInView={animated ? "whileInView" : undefined}
      viewport={{ once: true, margin: "-30px" }}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      style={{ willChange: "transform, opacity" }}
    >
      <ButtonContent />
    </motion.button>
  );
}
