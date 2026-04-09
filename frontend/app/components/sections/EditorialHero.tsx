"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ArrowRight, ChevronDown, Play } from "lucide-react"

const swipeWords = [
  "One of the Best",
  "Ghana's Leading",
  "Accra's Premier",
  "A Top-Rated",
]

const swipeVariants = {
  enter: { y: 60, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -60, opacity: 0 },
}

const SwipeText = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % swipeWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className} style={{ display: "inline-block", position: "relative", overflow: "hidden", verticalAlign: "bottom" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={swipeWords[index]}
          variants={swipeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block"
        >
          {swipeWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function EditorialHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-image.jpg"
          alt="New Vision Dental Premium Care"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        {/* Bottom fade to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0510] to-transparent" />
      </div>

      {/* Main Content - Left Aligned */}
      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-12">
        <div className="text-left max-w-4xl">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-3 sm:mb-4">
              <span className="text-white block mb-1 sm:mb-2">
                <SwipeText 
                  className="block"
                />
              </span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="block text-golden-shine font-extrabold"
              >
                Dental Clinic
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="block text-white"
              >
                in Ghana
              </motion.span>
            </h1>
            
            {/* Animated Underline */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] rounded-full"
            />
          </motion.div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10 font-light"
          >
            Expert dentists, transparent pricing, and uncompromising comfort. 
            Experience world-class dental care in a luxury environment.
          </motion.p>

          {/* CTA Buttons - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold overflow-hidden btn-golden-shine shadow-2xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Book Your Visit
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:border-[#D4AF37]/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#D4AF37]" />
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6"
          >
            {[
              { value: "2.5K+", label: "Happy Patients" },
              { value: "4.9", label: "Rating", showStar: true },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: "rgba(212,175,55,0.3)" }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {stat.value}
                  {stat.showStar && <Star className="inline w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] fill-[#D4AF37] ml-1" />}
                </p>
                <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
