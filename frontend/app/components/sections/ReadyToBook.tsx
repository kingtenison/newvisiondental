"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, CheckCircle, Phone } from "lucide-react"

// Benefit item
const BenefitItem = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    className="flex items-center gap-2 sm:gap-3 text-white/90"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ x: 5, color: "#E8B830" }}
  >
    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C8E8]" />
    <span className="text-xs sm:text-sm md:text-base font-medium">{text}</span>
  </motion.div>
);

export default function ReadyToBook() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A]">
      {/* Background Image - Defining the Height & Full Width */}
      <div className="relative w-full h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <Image
          src="/images/gallery/Picture1.png"
          alt="Ready to book background"
          fill
          className="object-cover opacity-100"
          priority
          quality={100}
          sizes="100vw"
        />
        
        {/* Professional Aesthetic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/20" />
        
        {/* Content Container - Full Width */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full px-5 sm:px-12 md:px-16 lg:px-20 py-10 sm:py-20">
            <div className="w-full">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#E8B830]/20 rounded-full mb-6 sm:mb-8 border border-[#E8B830]/30 backdrop-blur-md shadow-lg"
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#E8B830]" />
                <span className="text-[#E8B830] text-[10px] sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Premium Dental Experience</span>
              </motion.div>
              
              {/* Heading */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-8 leading-[1.2] sm:leading-[1.1]"
              >
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-[#00C8E8] to-[#00A0B8] bg-clip-text text-transparent">Smile</span>?
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-sm sm:text-lg md:text-xl lg:text-3xl text-white/90 mb-6 sm:mb-10 w-full leading-relaxed sm:leading-relaxed"
              >
                Join thousands of satisfied patients. Book your premium dental session today at any of our 3 locations.
              </motion.p>
              
              {/* Benefits Grid */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-12 sm:gap-y-6 mb-8 sm:mb-12">
                <BenefitItem text="Same-Day Appointments" delay={0.4} />
                <BenefitItem text="Flexible Hours" delay={0.5} />
                <BenefitItem text="3 Locations" delay={0.6} />
                <BenefitItem text="Insurance Accepted" delay={0.7} />
              </div>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex flex-row items-center gap-2 sm:gap-5"
              >
                <Link
                  href="/book"
                  className="group relative flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-3 px-4 py-3 sm:px-10 sm:py-5 bg-[#E8B830] text-[#0A0A0A] font-extrabold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,184,48,0.5)] hover:scale-105 active:scale-95 text-xs sm:text-base whitespace-nowrap"
                >
                  <span className="relative z-10">Book Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="tel:+233257091176"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-3 px-4 py-3 sm:px-10 sm:py-5 bg-white/10 text-white font-bold rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-xs sm:text-base whitespace-nowrap"
                >
                  <Phone className="w-3 h-3 sm:w-6 sm:h-6 text-[#00C8E8]" />
                  <span>Call Us</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Cyan Accents */}
      <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] bg-[#00C8E8]" />
      </div>
    </section>
  );
}
