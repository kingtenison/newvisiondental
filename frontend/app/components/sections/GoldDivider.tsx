"use client"
import { motion } from "framer-motion"

export default function GoldDivider() {
  return (
    <div className="relative py-8 bg-[#F2F4F8] overflow-hidden">
      <motion.div 
        className="h-px w-full bg-gradient-to-r from-transparent via-[#E8B830]/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      {/* Center Diamond */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E8B830] rotate-45 shadow-lg shadow-[#E8B830]/30"
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
      />
    </div>
  )
}
