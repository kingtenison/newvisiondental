"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, ArrowRight, Clock, Phone, Sparkles, Calendar } from "lucide-react"

const branches = [
  { 
    name: "North Legon", 
    img: "/images/locations/north-legon-clinic.jpg", 
    slug: "dentist-north-legon",
    address: "Agbogba road, North Legon",
    phone: "0559497906"
  },
  { 
    name: "Ashaley Botwe", 
    img: "/images/locations/ashaley-botwe-clinic.jpg", 
    slug: "dentist-ashaley-botwe",
    address: "School Junction, Ashaley Botwe",
    phone: "0257091176"
  },
  { 
    name: "ACP Estate", 
    img: "/images/locations/acp-estate-clinic.jpg", 
    slug: "dentist-acp-estate",
    address: "ACP Estate Junction, Kwabenya",
    phone: "0545563839"
  },
]

const LocationCard = ({ location, index }: { location: typeof branches[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 + index * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    className="group"
  >
    <Link href={`/locations/${location.slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative overflow-hidden cursor-pointer rounded-xl"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}
      >
        {/* Shiny Wine Border */}
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            padding: '2px',
            background: 'linear-gradient(135deg, #722F37 0%, #D4AF37 25%, #722F37 50%, #D4AF37 75%, #722F37 100%)',
            backgroundSize: '300% 300%',
            animation: 'shimmerWine 4s ease infinite',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Full Image Background */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]">
          <Image
            src={location.img}
            alt={location.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Glassmorphism Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-5">
          {/* Glass Panel */}
          <div 
            className="relative p-5 sm:p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.35) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            {/* Location Badge */}
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-3"
              style={{
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,175,55,0.25)',
              }}
            >
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase">
                Clinic
              </span>
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight drop-shadow-sm">
              {location.name}
            </h3>

            {/* Address */}
            <p className="text-gray-700 text-sm mb-1.5 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#D4AF37] flex-shrink-0" />
              {location.address}
            </p>

            {/* Phone */}
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.location.href = `tel:+233${location.phone}`
              }}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-[#D4AF37] text-sm mb-4 transition-colors duration-300 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]/60" />
              {location.phone}
            </span>

            {/* Divider */}
            <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />

            {/* CTA */}
            <motion.div
              className="flex items-center justify-between"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-[#D4AF37] font-semibold text-sm tracking-wide">
                View Details
              </span>
              <div 
                className="w-8 h-8 flex items-center justify-center rounded-lg"
                style={{
                  background: 'rgba(212,175,55,0.15)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212,175,55,0.25)',
                }}
              >
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  </motion.div>
)

export default function OurLocations() {
  return (
    <section 
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #e7e7e7 0%, #e4e2de 50%, #e7e7e7 100%)' }}
    >
      {/* Subtle gold texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.5) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Network
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight"
          >
            Visit Our
          </motion.h2>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-golden-shine mb-5"
          >
            Closest Branch
          </motion.span>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
          >
            Visit any of our 3 convenient locations across Accra for premium dental care.
          </motion.p>
        </motion.div>
        
        {/* Location Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {branches.map((branch, i) => (
            <LocationCard key={i} location={branch} index={i} />
          ))}
        </motion.div>

        {/* Bottom Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10 sm:mt-12"
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-white"
            style={{
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            <span className="text-gray-500 text-xs sm:text-sm">
              Open <span className="text-gray-700 font-medium">Monday - Saturday</span>, 8:00AM - 6:00PM
            </span>
          </div>
        </motion.div>

        {/* Book Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-8 sm:mt-10"
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
    </section>
  )
}
