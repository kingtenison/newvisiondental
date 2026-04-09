"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  ArrowRight,
  Music,
  Calendar
} from "lucide-react"

const footerLinks = {
  services: [
    { name: "Consultation", href: "/services/consultation" },
    { name: "Dental X-Ray", href: "/services/dental-x-ray-periapical" },
    { name: "Scaling & Polishing", href: "/services/scaling-polishing" },
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Composite Restoration", href: "/services/composite-restoration" },
    { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { name: "Crown & Bridge", href: "/services/crown-bridge-recementation" },
    { name: "Tooth Extraction", href: "/services/tooth-extraction" },
    { name: "Dental Veneers", href: "/services/dental-veneers" },
    { name: "Fluoride Therapy", href: "/services/fluoride-therapy-children" },
    { name: "Fissure Sealing", href: "/services/fissure-sealing-children" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Book Appointment", href: "/book" },
  ],
  sitemap: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Services", href: "/services" },
    { name: "Book Online", href: "/book" },
    { name: "Our Locations", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ],
  locations: [
    { name: "North Legon", href: "/locations/dentist-north-legon", phone: "0559497906" },
    { name: "Ashaley Botwe", href: "/locations/dentist-ashaley-botwe", phone: "0257091176" },
    { name: "ACP Estate", href: "/locations/dentist-acp-estate", phone: "0545563839" },
  ],
}

const socialLinks = [
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/share/1UQaw9ZCGK/?mibextid=wwXIfr", 
    label: "Facebook" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/newvisiondental.clinic?igsh=eHkydWlrcWdlOGNk", 
    label: "Instagram" 
  },
  { 
    icon: Music, 
    href: "https://www.tiktok.com/@newvisiondental.clinic?_r=1&_t=ZS-94lpwWWNsCC", 
    label: "TikTok" 
  },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f0510] to-[#0a0308] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.4) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-12 pt-12 md:pt-20 pb-8">

        {/* Top Section — 3x3 grid */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-12">
          
          {/* 1. Brand */}
          <div className="col-span-3 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image 
                  src="/images/nv-new-logo-03.png" 
                  alt="New Vision Dental" 
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="text-white font-bold text-sm lg:text-base block leading-tight">New Vision</span>
                <span className="text-[#D4AF37] font-semibold text-[10px] lg:text-xs tracking-wider">DENTAL CLINIC</span>
              </div>
            </Link>
            
            <p className="text-white/50 text-xs lg:text-sm leading-relaxed mb-4">
              Elite dental care in Accra, Ghana.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 mb-4">
              <a href="mailto:newvisiondentalclinic@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm group">
                <Mail className="w-3 h-3 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                <span className="break-all">newvisiondentalclinic@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/60 text-xs lg:text-sm">
                <Clock className="w-3 h-3 text-[#D4AF37]/60 shrink-0" />
                Mon - Sat: 8AM - 6PM
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-3 h-3 lg:w-4 lg:h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3">Services</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.services.slice(0, 8).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span className="leading-snug">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services (cont) */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3 hidden sm:block">&nbsp;</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.services.slice(8).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span className="leading-snug">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Company */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3">Company</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Locations */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3">Locations</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <MapPin className="w-3 h-3 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                  <a 
                    href={`tel:+233${link.phone}`}
                    className="text-white/40 hover:text-[#D4AF37] transition-colors text-[10px] lg:text-xs flex items-center gap-1.5 ml-[18px]"
                  >
                    <Phone className="w-2.5 h-2.5 shrink-0" />
                    {link.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Sitemap */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3">Sitemap</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.sitemap.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 7. Sitemap (cont) */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3 hidden sm:block">&nbsp;</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.sitemap.slice(6).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. CTA */}
          <div className="col-span-3 sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3 hidden sm:block">&nbsp;</h4>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 btn-golden-shine text-xs lg:text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-shadow duration-300"
              >
                <Calendar className="w-3 h-3" />
                Book Now
                <ArrowRight className="w-3 h-3" />
              </Link>
              <a
                href="tel:+2330559497906"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 text-white text-xs lg:text-sm font-semibold rounded-full border border-white/20 hover:border-[#D4AF37]/30 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-3 h-3 text-[#D4AF37]" />
                Call Now
              </a>
            </div>
          </div>

          {/* 9. Copyright */}
          <div className="col-span-3 sm:col-span-1 lg:col-span-3">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3 hidden sm:block">&nbsp;</h4>
            <p className="text-white/30 text-[10px] lg:text-xs">
              &copy; 2026 New Vision Dental Clinic. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-[10px] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-[10px] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
