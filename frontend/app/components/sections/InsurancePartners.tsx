"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, CheckCircle2 } from "lucide-react"

// Matches your exact public/images/insurance folder and filenames
const partners = [
  { name: "Acacia", img: "/images/insurance/acacia.png" },
  { name: "Cosmopolitan", img: "/images/insurance/cosmopolitan.jpg" },
  { name: "Equity", img: "/images/insurance/equity.jpg" },
  { name: "GAB", img: "/images/insurance/gab.jpg" },
  { name: "Glico", img: "/images/insurance/glico.jpg" },
  { name: "Metropolitan", img: "/images/insurance/metropolitan.jpg" },
  { name: "Nationwide", img: "/images/insurance/nationwide.jpeg" },
  { name: "Nexus", img: "/images/insurance/logo.webp" }
]

export default function InsurancePartners() {
  return (
    <section className="relative w-full lg:h-screen min-h-fit lg:min-h-[700px] overflow-hidden bg-[#0A0A0A] flex items-center justify-center py-16 lg:py-0">
      {/* Background Image with Deep Immersive Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/why-choose-us.jpg"
          alt="Insurance Background"
          fill
          className="object-cover opacity-50 scale-105"
          priority
          quality={100}
        />
        {/* Multilayered Gradient for Ultra-Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A4FAD]/80 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
      </div>

      {/* Dynamic Ambient Particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C8E8] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E8B830] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full px-0">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          
          {/* Left Side: Content - Full Screen Height on Desktop */}
          <motion.div 
            className="flex flex-col justify-center px-6 sm:px-16 md:px-24 py-12 lg:py-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B830]/20 rounded-full mb-4 lg:mb-6 border border-[#E8B830]/30 backdrop-blur-md w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-[#E8B830]" />
              <span className="text-[#E8B830] text-[10px] lg:text-sm font-bold uppercase tracking-widest">Global Coverage</span>
            </motion.div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl font-bold text-white mb-4 lg:mb-8 leading-tight">
              Seamless <br className="hidden lg:block" />
              <span className="text-[#00C8E8]">Insurance</span>
            </h2>

            <p className="text-base sm:text-2xl text-white/70 mb-6 lg:mb-10 max-w-xl leading-relaxed">
              We partner with leading global providers to ensure your premium dental journey is entirely stress-free.
            </p>

            <div className="space-y-3 lg:space-y-4">
              {["Direct Billing Available", "Hassle-Free Processing"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 lg:gap-3 text-white/90 text-sm lg:text-lg font-medium">
                  <CheckCircle2 className="w-5 h-5 lg:w-7 lg:h-7 text-[#00C8E8]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Seamless Logos Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                className="group relative h-28 sm:h-64 md:h-72 lg:h-80 bg-white/[0.03] flex items-center justify-center p-4 lg:p-6 transition-all duration-700 hover:bg-white/[0.08] border-[0.5px] border-white/5"
                whileHover={{ zIndex: 1 }}
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#1A4FAD]/20 to-transparent" />
                
                <div className="relative w-full h-full max-w-[120px] max-h-[60px] sm:max-w-[320px] sm:max-h-[220px]">
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-700 group-hover:scale-110 filter brightness-110"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
