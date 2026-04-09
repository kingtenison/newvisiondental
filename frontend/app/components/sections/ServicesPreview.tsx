"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, ArrowRight, Star, Clock, Users, Check, Calendar } from "lucide-react"

const servicesData = [
  {
    name: "Scaling & Polishing",
    slug: "scaling-polishing",
    bullets: [
      "Removes plaque and tartar buildup",
      "Polishes teeth for a smooth finish",
      "Prevents gum disease and decay",
    ],
    rating: "4.9",
    patients: "900+",
    duration: "45 Mins",
    image: "/images/services/dental-cleaning.jpg",
  },
  {
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    bullets: [
      "Professional-grade whitening gel",
      "Specialized light activation",
      "Safe for enamel, visible results",
    ],
    rating: "4.9",
    patients: "500+",
    duration: "1 Hour",
    image: "/images/services/teeth-whitening.jpg",
  },
  {
    name: "Dental Implants",
    slug: "dental-implants",
    bullets: [
      "Titanium posts replace tooth roots",
      "Prevents bone loss and preserves jaw",
      "Natural look and full chewing ability",
    ],
    rating: "5.0",
    patients: "800+",
    duration: "2-3 Visits",
    image: "/images/services/dental-implants.jpg",
  },
  {
    name: "Root Canal Treatment",
    slug: "root-canal-treatment",
    bullets: [
      "Eliminates infection from tooth pulp",
      "Saves your natural tooth structure",
      "Modern painless techniques",
    ],
    rating: "4.8",
    patients: "600+",
    duration: "1-2 Visits",
    image: "/images/services/root-canal.jpg",
  },
  {
    name: "Dental Veneers",
    slug: "dental-veneers",
    bullets: [
      "Composite and ceramic options",
      "Covers chips, cracks, and gaps",
      "Natural-looking smile transformation",
    ],
    rating: "4.9",
    patients: "300+",
    duration: "2 Visits",
    image: "/images/services/dental-veneers.jpg",
  },
  {
    name: "Fluoride Therapy",
    slug: "fluoride-therapy-children",
    bullets: [
      "Strengthens tooth enamel",
      "Prevents cavities in children",
      "Quick and painless application",
    ],
    rating: "5.0",
    patients: "500+",
    duration: "20 Mins",
    image: "/images/services/children-dentistry.jpg",
  },
]

const gradients = [
  "bg-gradient-to-br from-[#FFFDF5] via-[#FFF8E1] to-[#FFFDF5]",
  "bg-gradient-to-br from-[#5C0F22] via-[#4A0B1A] to-[#5C0F22]",
  "bg-gradient-to-br from-[#FFF8E7] via-[#FFFAF0] to-[#FFF8E7]",
  "bg-gradient-to-br from-[#4A0B1A] via-[#5C0F22] to-[#4A0B1A]",
  "bg-gradient-to-br from-[#FFFDF5] via-[#FFF3D6] to-[#FFFDF5]",
  "bg-gradient-to-br from-[#5C0F22] via-[#3D0A17] to-[#5C0F22]",
]

function ServiceRow({ service, index, imageRight }: { service: (typeof servicesData)[0]; index: number; imageRight: boolean }) {
  const isLight = index % 2 === 0
  const num = String(index + 1).padStart(2, "0")

  const titleColor = isLight ? "text-gray-900" : "text-white"
  const textColor = isLight ? "text-gray-600" : "text-white/75"
  const statColor = isLight ? "text-gray-500" : "text-white/60"
  const accentLine = isLight
    ? "bg-gradient-to-r from-[#D4AF37] to-[#B8941F]"
    : "bg-gradient-to-r from-[#D4AF37] to-[#E8C547]"

  const imageBlock = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-full md:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg"
    >
      <Image
        src={service.image}
        alt={service.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-md">
        <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
        <span className="text-xs font-bold text-gray-900">{service.rating}</span>
      </div>
      <span className="absolute bottom-3 left-3 text-[#D4AF37] text-xs font-bold tracking-widest">{num}</span>
    </motion.div>
  )

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageRight ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full md:w-[55%] flex items-center"
    >
      <div className={`w-full ${imageRight ? "md:pr-6 lg:pr-8" : "md:pl-6 lg:pl-8"}`}>
        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${titleColor} mb-3 ${imageRight ? "md:text-right" : ""}`}>
          {service.name}
        </h3>
        <div className={`h-0.5 w-10 ${accentLine} rounded-full mb-4 ${imageRight ? "md:ml-auto" : ""}`} />

        <ul className={`space-y-2 mb-5 ${imageRight ? "md:text-right" : ""}`}>
          {service.bullets.map((b, i) => (
            <li key={i} className={`flex items-start gap-2 ${textColor} text-sm leading-relaxed ${imageRight ? "md:flex-row-reverse" : ""}`}>
              <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 mb-5 ${imageRight ? "md:justify-end" : ""}`}>
          <span className={`flex items-center gap-1.5 text-xs ${statColor}`}>
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            {service.duration}
          </span>
          <span className={`flex items-center gap-1.5 text-xs ${statColor}`}>
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            {service.patients} patients
          </span>
        </div>

        <div className={`flex items-center gap-2.5 ${imageRight ? "md:justify-end" : ""}`}>
          <Link
            href="/book"
            className={`inline-flex items-center justify-center px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
              isLight
                ? "bg-[#5C0F22] text-white hover:bg-[#7a1830] shadow-md shadow-[#5C0F22]/20 hover:shadow-lg"
                : "bg-[#D4AF37] text-[#1a0a10] hover:bg-[#E8C547] shadow-md shadow-[#D4AF37]/30 hover:shadow-lg"
            }`}
          >
            Book Now
          </Link>
          <Link
            href={`/services/${service.slug}`}
            className={`inline-flex items-center justify-center gap-1 px-5 py-2 text-xs font-semibold rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 ${
              isLight
                ? "border-[#5C0F22]/20 text-[#5C0F22] hover:bg-[#5C0F22] hover:text-white hover:border-[#5C0F22]"
                : "border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a0a10] hover:border-[#D4AF37]"
            }`}
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={`relative rounded-2xl overflow-hidden ${gradients[index]} py-8 px-5 sm:py-10 sm:px-6 lg:py-12 lg:px-8`}
    >
      <div className={`flex flex-col ${imageRight ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-5 md:gap-4 lg:gap-6`}>
        {imageBlock}
        {textBlock}
      </div>
    </motion.div>
  )
}

export default function ServicesPreview() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e7e7e7] via-[#FFFDF5] via-30% to-[#5C0F22]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3"
          >
            <Sparkles className="w-4 h-4" />
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Our Premium
            <motion.span
              className="block bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Comprehensive dental care services designed to keep your smile healthy and beautiful.
          </motion.p>
        </motion.div>
      </div>

        {/* Zig-Zag Services Grid — full width */}
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {servicesData.map((service, i) => {
              const rowIndex = Math.floor(i / 2)
              const imageRight = rowIndex % 2 === 1
              return <ServiceRow key={service.slug} service={service} index={i} imageRight={imageRight} />
            })}
          </div>
        </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Bottom CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-24 lg:mt-28 text-center"
        >
          <div className="relative inline-flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-[#D4AF37]/40" />
            <p className="text-gray-500 text-sm tracking-wide uppercase mb-6">And more to discover</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Primary CTA - Book Consultation */}
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

              {/* Secondary CTA - Explore Services */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold bg-white text-[#5C0F22] border border-[#5C0F22]/20 hover:bg-[#5C0F22] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore All 12 Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
