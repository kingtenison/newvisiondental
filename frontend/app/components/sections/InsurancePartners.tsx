"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Shield } from "lucide-react"

// Matches your exact public/images/insurance folder and filenames
const partners = [
  { name: "Acacia", img: "/images/insurance/acacia.png" },
  { name: "Cosmopolitan", img: "/images/insurance/cosmopolitan.jpg" },
  { name: "Equity", img: "/images/insurance/equity.jpg" },
  { name: "GAB", img: "/images/insurance/gab.jpg" },
  { name: "Glico", img: "/images/insurance/glico.jpg" },
  { name: "Metropolitan", img: "/images/insurance/metropolitan.jpg" },
  { name: "Nationwide", img: "/images/insurance/nationwide.jpeg" }
]

export default function InsurancePartners() {
  return (
    <section className="relative w-full py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#5C0F22] to-[#3D0A17]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.6) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-12 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-semibold tracking-wide">Insurance Partners</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Insurance
          </motion.h2>

          <motion.p
            className="text-white/80 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We accept most major insurance providers for your convenience
          </motion.p>
        </motion.div>
      </div>

      {/* Insurance Partners Grid */}
      <motion.div 
        className="relative w-full px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="relative h-40 w-full flex items-center justify-center">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
