"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Phone } from "lucide-react"

// Benefit item
const BenefitItem = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    className="flex items-center gap-2 sm:gap-3 text-white/80"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ x: 5, color: "#D4AF37" }}
  >
    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
    <span className="text-xs sm:text-sm md:text-base">{text}</span>
  </motion.div>
);

export default function ReadyToBook() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0f0510] via-[#1a0a12] to-[#0f0510]">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #B8941F, transparent)' }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Booking Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-[#D4AF37]/10 rounded-full mb-6 sm:mb-8 border border-[#D4AF37]/20"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-medium">Easy Online Booking</span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight"
          >
            Ready to Transform Your{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Smile
            </motion.span>
            ?
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Join thousands of satisfied patients. Book your premium dental session today at any of our 3 locations.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <BenefitItem text="Same-Day Appointments" delay={0} />
            <BenefitItem text="Flexible Hours" delay={0.1} />
            <BenefitItem text="3 Convenient Locations" delay={0.2} />
            <BenefitItem text="Insurance Accepted" delay={0.3} />
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150, damping: 15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/book" 
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg overflow-hidden btn-golden-shine shadow-2xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Book My Appointment Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a 
                href="tel:+233500000000"
                className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span>Call Us Now</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
