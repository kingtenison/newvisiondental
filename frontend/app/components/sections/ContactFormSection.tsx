"use client"

import { motion } from "framer-motion"
import { Sparkles, Send, Phone, Mail } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Orthodontics (Braces)",
    "Root Canal",
    "Crowns & Bridges",
    "Other"
  ]

  return (
<section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Gradient - rich wine at top transitioning to white at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0a15] via-[#e8e0e5] to-white" />
      
      {/* Animated Background Orbs - positioned at top for the wine area */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #B8941F, transparent)' }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Background Images - 4x2 grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="relative h-full w-full">
            <Image
              src="/images/gallery/dental bacccccc.png"
              alt="Dental background"
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
      
      {/* Overlay - helps blend from rich wine at top to white at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0a15]/50 via-white/20 to-white/60" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
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
            Get In Touch
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight"
          >
            Have Questions?
          </motion.h2>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-golden-shine mb-5"
          >
            We're Here to Help
          </motion.span>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
          >
            Fill out the form below and our team will get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-gray-200/50" style={{ border: '1px solid rgba(212,175,55,0.3)' }}>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We&apos;ll be in touch with you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all resize-none"
                    placeholder="Tell us about your dental concerns or questions..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-auto min-w-[200px] group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-semibold overflow-hidden btn-golden-shine shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </motion.button>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <a href="tel:+233559497906" className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+233 55 949 7906</span>
                    </a>
                    <a href="mailto:info@newvisiondental.com" className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">info@newvisiondental.com</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}