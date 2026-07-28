"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { 
  Stethoscope, ScanLine, Sparkles, Sun, Shield, PenTool, Heart, 
  MinusCircle, Smile, AlertTriangle, Scissors, ArrowRight, Star, Check, Clock, Calendar,
  Crown, Droplets, ShieldCheck
} from "lucide-react"

const servicesData = [
  {
    name: "Dental Consultation",
    slug: "consultation",
    icon: Stethoscope,
    rating: "4.9",
    duration: "30 mins",
    image: "/images/services/consultation.jpg",
    description: "Personalized, high-quality consultation for routine checkups, cavity treatment, or advanced care tailored to your needs.",
    features: ["Personalized care", "Modern technology", "Expert advice"],
  },
  {
    name: "Dental X-Ray",
    slug: "dental-x-ray-periapical",
    icon: ScanLine,
    rating: "4.8",
    duration: "15 mins",
    image: "/images/services/dental-x-ray.png",
    description: "Diagnostic imaging to examine teeth, roots, jawbone, and surrounding structures not visible during a regular exam.",
    features: ["Early detection", "Precise diagnostics", "Minimal discomfort"],
  },
  {
    name: "Emergency Dentistry",
    slug: "emergency-dentistry",
    icon: AlertTriangle,
    rating: "4.9",
    duration: "Same-Day",
    image: "/images/services/emergency-dentistry.jpg",
    description: "Immediate treatment for severe toothaches, knocked-out teeth, broken restorations, and other urgent dental issues.",
    features: ["Same-day care", "Pain relief", "Compassionate team"],
  },
  {
    name: "Minor Oral Surgery",
    slug: "minor-oral-surgery",
    icon: Scissors,
    rating: "4.9",
    duration: "Varies",
    image: "/images/services/minor-oral-surgery.jpg",
    description: "Expert surgical services including tooth extractions, wisdom tooth removal, abscess treatment, and gum surgery.",
    features: ["Local anaesthesia", "Sterile environment", "Aftercare support"],
  },
  {
    name: "Composite Restoration",
    slug: "composite-restoration",
    icon: PenTool,
    rating: "4.8",
    duration: "1 Visit",
    image: "/images/services/composite-restoration.jpg",
    description: "Tooth-colored resin fillings to repair decay, fractures, chips, or wear in a single visit.",
    features: ["Natural-looking", "Bonds to tooth", "Minimal removal"],
  },
  {
    name: "Tooth Extraction",
    slug: "tooth-extraction",
    icon: MinusCircle,
    rating: "4.8",
    duration: "30 mins",
    image: "/images/services/tooth-extraction.jpg",
    description: "Removal of a tooth that is damaged, decayed, or beyond saving to prevent infection and protect surrounding teeth.",
    features: ["Prevents infection", "Promotes healing", "Protects bone"],
  },
  {
    name: "Root Canal Treatment",
    slug: "root-canal-treatment",
    icon: Heart,
    rating: "4.8",
    duration: "1-2 Visits",
    image: "/images/services/root-canal-treatment.jpg",
    description: "Remove infected pulp, clean the root canals, and seal the tooth to prevent further infection and save your natural tooth.",
    features: ["Pain relief", "Saves natural tooth", "Long-term results"],
  },
  {
    name: "Crown & Bridge",
    slug: "crown-bridge-recementation",
    icon: Crown,
    rating: "4.9",
    duration: "1 Visit",
    image: "/images/services/crown-and-bridge.jpg",
    description: "Custom-made caps over damaged teeth and artificial teeth anchored to neighbours to restore shape, strength, and appearance.",
    features: ["Restores strength", "Improves chewing", "Enhances smile"],
  },
  {
    name: "Dental Veneers",
    slug: "dental-veneers",
    icon: Smile,
    rating: "4.9",
    duration: "2 Visits",
    image: "/images/services/dental-veneers.jpeg",
    description: "Thin, custom-made shells bonded to the front of teeth to correct discoloration, chips, gaps, and minor alignment issues.",
    features: ["Stain-resistant", "Natural appearance", "Long-lasting"],
  },
  {
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    icon: Sun,
    rating: "4.9",
    duration: "60 mins",
    image: "/images/services/teeth-whitening.jpg",
    description: "Professional whitening tailored to your needs — faster, safer, and more noticeable results than over-the-counter products.",
    features: ["Zero sensitivity", "Quick results", "Long-lasting"],
  },
  {
    name: "Dental Implants",
    slug: "dental-implants",
    icon: Shield,
    rating: "5.0",
    duration: "3-9 Months",
    image: "/images/services/dental-implants.jpg",
    description: "Permanent solution for missing teeth — titanium posts fused to the jawbone with custom crowns that look and feel natural.",
    features: ["Preserves jawbone", "Natural look", "Permanent solution"],
  },
  {
    name: "Teeth Cleaning / Scaling & Polishing",
    slug: "scaling-polishing",
    icon: Sparkles,
    rating: "4.9",
    duration: "45 mins",
    image: "/images/services/teeth-cleaning-scaling-polishing.jpg",
    description: "Professional cleaning to remove plaque, tartar, and surface stains that regular brushing and flossing cannot eliminate.",
    features: ["Prevents gum disease", "Cavity protection", "Brighter smile"],
  },
  {
    name: "Fluoride Therapy",
    slug: "fluoride-therapy-children",
    icon: Droplets,
    rating: "5.0",
    duration: "20 mins",
    image: "/images/services/fluoride-therapy.jpg",
    description: "Professional application of concentrated fluoride to strengthen enamel, reduce sensitivity, and prevent tooth decay.",
    features: ["Strengthens enamel", "Reduces cavities", "Reduces sensitivity"],
  },
  {
    name: "Fissure Sealing",
    slug: "fissure-sealing-children",
    icon: ShieldCheck,
    rating: "5.0",
    duration: "20 mins",
    image: "/images/services/fissure-sealing.jpg",
    description: "Protective resin coating applied to the grooves of molars to prevent food and bacteria from causing decay.",
    features: ["Prevents cavities", "Painless", "Long-term protection"],
  },
]

export default function ServicesPreview() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2F4F8] via-white to-[#F2F4F8]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/30 to-transparent" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
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

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-16"
        >
          {[
            { value: "14", label: "Services" },
            { value: "4.9", label: "Rating", showStar: true },
            { value: "10,000+", label: "Patients" },
            { value: "15+", label: "Years" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#1A4FAD]">
                {stat.value}
                {stat.showStar && <Star className="inline w-4 h-4 text-[#E8B830] fill-[#E8B830] ml-1" />}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="group relative h-full bg-white rounded-2xl border border-[#E8B830]/15 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#E8B830]/20 hover:border-[#E8B830]/40 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Rating badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
                      <Star className="w-3.5 h-3.5 text-[#E8B830] fill-[#E8B830]" />
                      <span className="text-xs font-bold text-gray-900">{service.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#E8B830]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E8B830]/20 transition-colors">
                        <service.icon className="w-5 h-5 text-[#E8B830]" />
                      </div>
                      <h2 className="text-lg font-bold text-[#1A4FAD]">{service.name}</h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature, j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
                          <Check className="w-3 h-3 text-[#E8B830]" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Row: Duration + Learn more */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1.5 text-[#E8B830]/60" />
                        {service.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FAD] group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Gold accent line at bottom */}
                  <div className="h-0.5 bg-gradient-to-r from-[#E8B830] via-[#B07820] to-[#E8B830] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold bg-white text-[#1A4FAD] border border-[#1A4FAD]/20 hover:bg-[#1A4FAD] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
