"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, ArrowRight, Star, Clock, Users, Check, Calendar } from "lucide-react"

const servicesData = [
  {
    name: "Teeth Cleaning / Scaling & Polishing",
    slug: "scaling-polishing",
    bullets: [
      "Removes plaque and tartar buildup",
      "Polishes teeth for a smooth finish",
      "Prevents gum disease and decay",
    ],
    rating: "4.9",
    patients: "900+",
    duration: "45 Mins",
    image: "/images/services/teeth-cleaning-scaling-polishing.jpg",
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
    image: "/images/services/root-canal-treatment.jpg",
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
    image: "/images/services/fluoride-therapy.jpg",
  },
]

const gradients = [
  "bg-white",
  "bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]",
  "bg-white",
  "bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]",
  "bg-white",
  "bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]",
]

function ServiceRow({ service, index, imageRight }: { service: (typeof servicesData)[0]; index: number; imageRight: boolean }) {
  const isLight = index % 2 === 0
  const num = String(index + 1).padStart(2, "0")

  const titleColor = isLight ? "text-gray-900" : "text-white"
  const textColor = isLight ? "text-gray-600" : "text-white/75"
  const statColor = isLight ? "text-gray-500" : "text-white/60"
  const accentLine = isLight
    ? "bg-gradient-to-r from-[#1A4FAD] to-[#00C8E8]"
    : "bg-gradient-to-r from-[#E8B830] to-[#E8B830]"

  const imageBlock = (
    <div className="relative w-full md:w-1/2 h-64 md:h-auto group overflow-hidden">
      <Image
        src={service.image}
        alt={service.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-sm z-10">
        <Star className="w-3.5 h-3.5 text-[#E8B830] fill-[#E8B830]" />
        <span className="text-xs font-bold text-gray-900 font-heading">{service.rating}</span>
      </div>
      <span className="absolute bottom-4 left-4 text-[#E8B830]/80 text-4xl font-black tracking-widest z-10 font-heading">{num}</span>
    </div>
  )

  const textBlock = (
    <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
        <h3 className={`text-2xl sm:text-3xl font-bold ${titleColor} mb-4 tracking-tight`}>
          {service.name}
        </h3>
        <div className={`h-1 w-12 ${accentLine} rounded-full mb-6`} />

        <ul className="space-y-3.5 mb-8">
          {service.bullets.map((b, i) => (
            <li key={i} className={`flex items-start gap-3 ${textColor} text-sm sm:text-base leading-relaxed font-medium`}>
              <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isLight ? 'bg-[#1A4FAD]' : 'bg-[#E8B830]'}`}>
                <Check className={`w-3 h-3 ${isLight ? 'text-white' : 'text-[#1a0a10]'}`} strokeWidth={3} />
              </div>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-5 mb-8">
          <span className={`flex items-center gap-2 text-sm font-medium ${statColor}`}>
            <Clock className={`w-4 h-4 ${isLight ? 'text-[#1A4FAD]' : 'text-[#E8B830]'}`} />
            {service.duration}
          </span>
          <span className={`flex items-center gap-2 text-sm font-medium ${statColor}`}>
            <Users className={`w-4 h-4 ${isLight ? 'text-[#1A4FAD]' : 'text-[#E8B830]'}`} />
            {service.patients} patients
          </span>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <Link
            href="/book"
            className={`flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
              isLight
                ? "bg-[#1A4FAD] text-white hover:bg-[#163E8A] shadow-md hover:shadow-xl"
                : "bg-[#E8B830] text-[#1a0a10] hover:bg-[#F0C545] shadow-md hover:shadow-xl"
            }`}
          >
            Book Now
          </Link>
          <Link
            href={`/services/${service.slug}`}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 ${
              isLight
                ? "border-[#1A4FAD] text-[#1A4FAD] bg-transparent hover:bg-[#1A4FAD] hover:text-white"
                : "border-[#00C8E8]/70 text-[#00C8E8] bg-transparent hover:bg-[#00C8E8] hover:text-[#0D2A60]"
            }`}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-[2rem] overflow-hidden ${gradients[index]} flex flex-col md:flex-row h-full shadow-lg hover:shadow-xl transition-shadow duration-500 border border-white/5`}
    >
      {imageRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </motion.div>
  )
}

export default function ServicesPreview() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2F4F8] via-[#FFFDF5] via-30% to-[#1A4FAD]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/20 to-transparent" />

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
            className="inline-flex items-center gap-2 text-[#E8B830] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3"
          >
            <Sparkles className="w-4 h-4" />
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Our Premium
            <motion.span
              className="block bg-gradient-to-r from-[#E8B830] to-[#B07820] bg-clip-text text-transparent mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Services
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Grid — Split Layout */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-[1600px] mx-auto">
          {servicesData.map((service, i) => {
            const imageRight = i % 2 !== 0
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
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-[#E8B830]/40" />
            <p className="text-gray-500 text-sm tracking-wide uppercase mb-6">And more to discover</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Primary CTA - Book Consultation */}
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold overflow-hidden btn-golden-shine shadow-xl shadow-[#E8B830]/25 hover:shadow-2xl hover:shadow-[#E8B830]/40 transition-shadow duration-300 hover:scale-105"
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
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold bg-white text-[#1A4FAD] border border-[#1A4FAD]/20 hover:bg-[#1A4FAD] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore All 14 Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
