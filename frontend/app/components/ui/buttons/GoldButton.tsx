"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface GoldButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function GoldButton({ 
  children, 
  onClick, 
  href,
  size = "md",
  icon,
  className = "",
  fullWidth = false
}: GoldButtonProps) {
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = `btn-gold ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const ButtonContent = () => (
    <motion.div 
      className="flex items-center justify-center gap-2"
      whileHover={{ x: icon ? 3 : 0 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {icon && <span className="w-5 h-5 icon-gold">{icon}</span>}
      <span>{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
}
