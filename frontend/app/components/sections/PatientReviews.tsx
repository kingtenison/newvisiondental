"use client"
import Script from "next/script"
import { motion } from "framer-motion"
import Link from "next/link"
import { Star, ArrowRight, Calendar } from "lucide-react"

export default function PatientReviews() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#e7e7e7]">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e7e7e7] via-gray-200/30 to-[#e7e7e7]" />
      
      {/* Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#D4AF37] animate-pulse" />
            Verified Feedback
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#D4AF37] animate-pulse" />
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6"
          >
            Patient
            <motion.span 
              className="block text-golden-shine mt-1 sm:mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Experiences
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Elfsight Widget Container */}
        <motion.div
          className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl shadow-black/5 p-3 sm:p-4 md:p-6 lg:p-10"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{
            boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.1)',
            borderColor: 'rgba(212, 175, 55, 0.2)',
          }}
        >
          <motion.div 
            className="elfsight-app-ba1e36f5-ddf2-4ade-9133-86fde51b25f1" 
            data-elfsight-app-lazy
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
        </motion.div>

        {/* Book Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-10 sm:mt-12 md:mt-14"
        >
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold overflow-hidden btn-golden-shine shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-shadow duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Book Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* External Script Loading */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" 
        async 
      />
    </section>
  )
}
