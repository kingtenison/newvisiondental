"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, ChevronRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  { 
    name: "North Legon", 
    address: "Agbogba Road, North Legon, Accra",
    phone: "0559497906",
    hours: "Mon: 8am-5pm, Tue: 8am-7pm, Wed-Fri: 8am-5pm, Sat: 8am-4pm",
    slug: "dentist-north-legon",
    image: "/images/locations/north-legon-clinic.jpg",
    mapLink: "https://maps.google.com/?q=North+Legon+Accra"
  },
  { 
    name: "Ashaley Botwe", 
    address: "School Junction, Ashaley Botwe, Accra",
    phone: "0257091176",
    hours: "Mon: 8am-5pm, Tue: 8am-7pm, Wed-Fri: 8am-5pm, Sat: 8am-4pm",
    slug: "dentist-ashaley-botwe",
    image: "/images/locations/ashaley-botwe-clinic.jpg",
    mapLink: "https://maps.google.com/?q=Ashaley+Botwe+Accra"
  },
  { 
    name: "ACP Estate", 
    address: "ACP Estate Junction, Kwabenya, Accra",
    phone: "0545563839",
    hours: "Mon: 8am-5pm, Tue: 8am-7pm, Wed-Fri: 8am-5pm, Sat: 8am-4pm",
    slug: "dentist-acp-estate",
    image: "/images/locations/acp-estate-clinic.jpg",
    mapLink: "https://maps.google.com/?q=ACP+Estate+Kwabenya+Accra"
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full min-h-[35vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative h-full w-full">
              <Image src="/images/gallery/dental bacccccc.png" alt="Dental background" fill className="object-cover" priority />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0814]/95 via-[#5C0F22]/70 to-[#7A1A2E]/30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 flex-1 flex items-center justify-center py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" /><span className="text-[#D4AF37]">Visit Us</span>
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">Our Locations</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Visit us at any of our three convenient locations across Accra. Each clinic is equipped with modern facilities and staffed by experienced professionals.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e7e7e7] py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="relative h-64 w-full">
                    <Image src={location.image} alt={"New Vision Dental Clinic " + location.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{location.name}</h2>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    <div className="space-y-2 mb-6">
                      <a href={"tel:" + location.phone} className="flex items-center gap-2 text-gray-600 hover:text-[#5C0F22] transition">
                        <Phone className="w-4 h-4" />{location.phone}
                      </a>
                      <p className="flex items-start gap-2 text-gray-600">
                        <Clock className="w-4 h-4 mt-1 flex-shrink-0" /><span>{location.hours}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={"/locations/" + location.slug} className="flex-1 bg-[#5C0F22] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#4a0c1b] transition-all inline-flex items-center justify-center gap-2">
                        View Details <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-[#5C0F22] text-[#5C0F22] px-4 py-3 rounded-xl font-medium hover:bg-[#5C0F22] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" /> Directions
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#5C0F22] py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Visit Us Today</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Experience quality dental care at any of our convenient locations.</p>
            <Link href="/book" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1a0a10] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#B8941F] transition-all shadow-xl">Book an Appointment</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
