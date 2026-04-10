"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Stethoscope, ScanLine, Sparkles, Sun, Shield, PenTool, Heart, Crown, 
  MinusCircle, Smile, Droplets, ShieldCheck, Clock, ArrowRight, Star, Check
} from "lucide-react";

const services = [
  {
    name: "Consultation",
    description: "Comprehensive examination of your mouth, teeth, and gums with personalized treatment advice from our experienced dentists.",
    icon: Stethoscope,
    slug: "consultation",
    duration: "30 mins",
    image: "/images/services/consultation.jpg",
    rating: "4.9",
    features: ["Oral examination", "Treatment planning", "Expert advice"]
  },
  {
    name: "Dental X-Ray",
    description: "Digital X-ray imaging to detect decay, gum disease, infections, and other dental issues with minimal radiation exposure.",
    icon: ScanLine,
    slug: "dental-x-ray-periapical",
    duration: "15 mins",
    image: "/images/services/dental-xray.jpg",
    rating: "4.8",
    features: ["Digital technology", "Low radiation", "Instant results"]
  },
  {
    name: "Scaling & Polishing",
    description: "Professional cleaning to remove plaque and tartar buildup, leaving your teeth smooth, clean, and healthy.",
    icon: Sparkles,
    slug: "scaling-polishing",
    duration: "45 mins",
    image: "/images/services/dental-cleaning.jpg",
    rating: "4.9",
    features: ["Plaque removal", "Gum protection", "Fresh breath"]
  },
  {
    name: "Teeth Whitening",
    description: "Professional whitening using a specialized gel activated with light to break down stains for a brighter, whiter smile.",
    icon: Sun,
    slug: "teeth-whitening",
    duration: "60 mins",
    image: "/images/services/teeth-whitening.jpg",
    rating: "4.9",
    features: ["Instant results", "Safe procedure", "Long-lasting"]
  },
  {
    name: "Dental Implants",
    description: "Titanium posts placed in your jaw to act as natural tooth roots, supporting crowns that look and feel like real teeth.",
    icon: Shield,
    slug: "dental-implants",
    duration: "2-3 Visits",
    image: "/images/services/dental-implants.jpg",
    rating: "5.0",
    features: ["Permanent solution", "Natural look", "Bone preservation"]
  },
  {
    name: "Composite Restoration",
    description: "Repair damaged, decayed, or chipped teeth and restore them to their natural shape, function, and appearance.",
    icon: PenTool,
    slug: "composite-restoration",
    duration: "1 Visit",
    image: "/images/services/composite-restoration.jpg",
    rating: "4.8",
    features: ["Same-day treatment", "Natural finish", "Painless"]
  },
  {
    name: "Root Canal Treatment",
    description: "Treat infections or damage to the pulp of your tooth, eliminating pain and preventing the spread of infection.",
    icon: Heart,
    slug: "root-canal-treatment",
    duration: "1-2 Visits",
    image: "/images/services/root-canal.jpg",
    rating: "4.8",
    features: ["Pain relief", "Saves teeth", "Modern technique"]
  },
  {
    name: "Crown & Bridge",
    description: "Restore your loose or dislodged crown or bridge to its original function and appearance with secure recementation.",
    icon: Crown,
    slug: "crown-bridge-recementation",
    duration: "1 Visit",
    image: "/images/services/crown-bridge.jpg",
    rating: "4.9",
    features: ["Secure fit", "Full function", "Quick fix"]
  },
  {
    name: "Tooth Extraction",
    description: "Safe, comfortable tooth extraction to alleviate pain, prevent infection, and preserve your surrounding teeth.",
    icon: MinusCircle,
    slug: "tooth-extraction",
    duration: "30 mins",
    image: "/images/services/tooth-extraction.jpg",
    rating: "4.8",
    features: ["Gentle removal", "Local anesthesia", "Quick recovery"]
  },
  {
    name: "Dental Veneers",
    description: "Thin, custom-made shells that cover the front surface of your teeth to correct chips, cracks, gaps, and discoloration.",
    icon: Smile,
    slug: "dental-veneers",
    duration: "2 Visits",
    image: "/images/services/dental-veneers.jpg",
    rating: "4.9",
    features: ["Custom fit", "Stain resistant", "Natural look"]
  },
  {
    name: "Fluoride Therapy",
    description: "Strengthen your child's teeth and promote optimal oral health with professional fluoride application.",
    icon: Droplets,
    slug: "fluoride-therapy-children",
    duration: "20 mins",
    image: "/images/services/children-dentistry.jpg",
    rating: "5.0",
    features: ["Strengthens enamel", "Prevents decay", "Child-friendly"]
  },
  {
    name: "Fissure Sealing",
    description: "Protective coating applied to the deep grooves of your child's molars to prevent tooth decay.",
    icon: ShieldCheck,
    slug: "fissure-sealing-children",
    duration: "20 mins",
    image: "/images/services/children-dentistry.jpg",
    rating: "5.0",
    features: ["Decay prevention", "Painless", "Long-lasting"]
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Dental Services in Accra - New Vision Dental Clinic",
  "description": "Comprehensive dental services including consultation, X-ray, scaling, whitening, implants, restoration, root canal, crowns, extractions, veneers, and children's dentistry in Accra, Ghana."
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative w-full min-h-[25vh] md:min-h-[35vh] flex flex-col overflow-hidden">
          {/* Single Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/gallery/dental bacccccc.png"
              alt="Dental background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Wine Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D0814]/95 via-[#5C0F22]/70 to-[#7A1A2E]/30" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          
          {/* Gold blurs on wine */}
          <div className="absolute top-10 right-[20%] w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-[15%] w-48 h-48 bg-[#D4AF37]/6 rounded-full blur-[100px]" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 flex-1 flex items-center justify-center py-6 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
                <Sparkles className="w-3 h-3" />
                Our Services
              </span>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 leading-tight">
                <span className="text-white">Comprehensive</span>
                <span className="block text-golden-shine mt-0.5">
                  Dental Care
                </span>
              </h1>

              <p className="text-white/70 text-sm md:text-xl leading-relaxed hidden sm:block">
                From routine checkups to advanced procedures, we provide world-class dental 
                care for your whole family in a luxury environment.
              </p>

              {/* Stats bar */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4 pt-4 border-t border-white/15">
                {[
                  { value: "12", label: "Services" },
                  { value: "4.9", label: "Rating", showStar: true },
                  { value: "2.5K+", label: "Patients" },
                  { value: "15+", label: "Years" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                      {stat.showStar && <Star className="inline w-4 h-4 text-[#D4AF37] fill-[#D4AF37] ml-1" />}
                    </p>
                    <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full pt-8 md:pt-12 pb-16 md:pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`} 
                  className="block h-full"
                >
                  <div className="group relative h-full bg-white rounded-2xl border border-[#D4AF37]/15 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden flex flex-col">
                    
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
                        <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                        <span className="text-xs font-bold text-gray-900">{service.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                          <service.icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <h2 className="text-lg font-bold text-[#5C0F22]">{service.name}</h2>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{service.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
                            <Check className="w-3 h-3 text-[#D4AF37]" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1.5 text-[#D4AF37]/60" />
                          {service.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#5C0F22] group-hover:gap-2 transition-all">
                          Learn more
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>

                    {/* Gold accent line at bottom */}
                    <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          
          {/* Gold blurs */}
          <div className="absolute top-10 left-[20%] w-48 h-48 bg-[#D4AF37]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-[25%] w-64 h-64 bg-[#D4AF37]/6 rounded-full blur-[120px]" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-lg sm:text-2xl md:text-5xl font-bold text-white mb-2 md:mb-5">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-sm md:text-lg text-white/70 mb-4 md:mb-10 leading-relaxed hidden md:block">
                Book a consultation and let our experienced dentists help you 
                find the best treatment for your needs.
              </p>
              <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 px-3 py-2 md:px-8 md:py-4 rounded-full font-semibold btn-golden-shine shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105 text-xs md:text-base"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="hidden sm:inline">Book a Consultation</span>
                    <span className="sm:hidden">Book</span>
                    <ArrowRight className="w-3 h-3 md:w-5 md:h-5" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-2 md:px-8 md:py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-xs md:text-base"
                >
                  <span className="hidden sm:inline">Contact Us</span>
                  <span className="sm:hidden">Contact</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
