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
  Calendar
} from "lucide-react"

// Custom TikTok Icon component with official brand design
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const footerLinks = {
  services: [
    { name: "Consultation", href: "/services/consultation" },
    { name: "Dental X-Ray", href: "/services/dental-x-ray-periapical" },
    { name: "Emergency Dentistry", href: "/services/emergency-dentistry" },
    { name: "Minor Oral Surgery", href: "/services/minor-oral-surgery" },
    { name: "Composite Restoration", href: "/services/composite-restoration" },
    { name: "Tooth Extraction", href: "/services/tooth-extraction" },
    { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { name: "Crown & Bridge", href: "/services/crown-bridge-recementation" },
    { name: "Dental Veneers", href: "/services/dental-veneers" },
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Scaling & Polishing", href: "/services/scaling-polishing" },
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
    label: "Facebook",
    color: "#1877F2",
    hoverColor: "#1877F2"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/newvisiondental.clinic?igsh=eHkydWlrcWdlOGNk",
    label: "Instagram",
    color: "#E4405F",
    hoverColor: "#E4405F"
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@newvisiondental.clinic?_r=1&_t=ZS-94lpwWWNsCC",
    label: "TikTok",
    color: "#FFFFFF",
    hoverColor: "#FE2C55"
  },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Immersive Blue-Cyan Background System */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D2A60]/80 to-[#0A0A0A]" />
      
      {/* Dynamic Light Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] bg-[#1A4FAD]/20 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] bg-[#00C8E8]/10 pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0, 200, 232, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 232, 0.2) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Cyan Accent Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00C8E8]/40 to-transparent" />

       {/* Main Footer Content */}
       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pt-12 md:pt-20 pb-8 lg:ml-10">

        {/* Top Section — 3x3 grid */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-12">
          
          {/* 1. Brand */}
          <div className="col-span-3 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="block mb-8 group">
              <div className="relative w-28 lg:w-40 aspect-[3.59]">
                <Image
                  src="/images/NV-LOGO-GRADIANTS-OFFICIAL-GOLD.png"
                  alt="New Vision Dental"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 112px, 160px"
                />
              </div>
            </Link>
            
            <p className="text-white/50 text-xs lg:text-sm leading-relaxed mb-4">
              Elite dental care in Accra, Ghana.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 mb-4">
               <a href="mailto:newvisiondentalclinic@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm group">
                 <Mail className="w-3 h-3 text-[#00C8E8]/60 group-hover:text-[#00C8E8] transition-colors shrink-0" />
                 <span className="break-all">newvisiondentalclinic<span className="at-symbol">@</span>gmail.com</span>
               </a>
              <div className="flex items-center gap-2 text-white/60 text-xs lg:text-sm">
                <Clock className="w-3 h-3 text-[#00C8E8]/60 shrink-0" />
                Mon - Sat: 8:30am - 6:00pm
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-4">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">Our Socials</h4>
              <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 lg:w-12 lg:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
                  style={{
                    color: social.color,
                    borderColor: `${social.color}20`,
                    backgroundColor: `${social.color}08`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.hoverColor
                    e.currentTarget.style.borderColor = `${social.hoverColor}30`
                    e.currentTarget.style.backgroundColor = `${social.hoverColor}15`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = social.color
                    e.currentTarget.style.borderColor = `${social.color}20`
                    e.currentTarget.style.backgroundColor = `${social.color}08`
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              ))}
              </div>
            </div>
          </div>

          {/* 2. Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3">Services</h4>
            <ul className="space-y-1 lg:space-y-1.5">
              {footerLinks.services.slice(0, 8).map((link) => (
                <li key={link.name} className="py-1">
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 text-[#00C8E8] transition-opacity shrink-0" />
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
                <li key={link.name} className="py-1">
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 text-[#00C8E8] transition-opacity shrink-0" />
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
                <li key={link.name} className="py-1">
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 text-[#00C8E8] transition-opacity shrink-0" />
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
                <li key={link.name} className="py-1">
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <MapPin className="w-3 h-3 text-[#00C8E8]/60 group-hover:text-[#00C8E8] transition-colors shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                  <a 
                    href={`tel:+233${link.phone}`}
                    className="text-white/40 hover:text-[#00C8E8] transition-colors text-xs flex items-center gap-1.5 ml-[18px] py-2"
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
                <li key={link.name} className="py-1">
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 text-[#00C8E8] transition-opacity shrink-0" />
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
                <li key={link.name} className="py-1">
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#00C8E8] transition-colors text-xs lg:text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-2 h-2 opacity-0 group-hover:opacity-100 text-[#00C8E8] transition-opacity shrink-0" />
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
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#E8B830] text-[#0A0A0A] text-xs lg:text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(232,184,48,0.4)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
              >
                <Calendar className="w-3 h-3" />
                Book Now
              </Link>
              <a
                href="tel:+2330559497906"
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-white/5 text-white text-xs lg:text-sm font-bold rounded-full border border-white/20 hover:border-[#00C8E8]/50 hover:bg-[#00C8E8]/10 hover:text-[#00C8E8] transition-all duration-300 uppercase tracking-wide group"
              >
                <Phone className="w-3 h-3 text-[#00C8E8] group-hover:text-[#00C8E8]" />
                Call Now
              </a>
            </div>
          </div>

          {/* 9. Copyright */}
          <div className="col-span-3 sm:col-span-1 lg:col-span-3">
            <h4 className="text-white font-semibold text-xs lg:text-sm tracking-wider uppercase mb-3 hidden sm:block">&nbsp;</h4>
            <p className="text-white/30 text-xs">
              &copy; 2026 New Vision Dental Clinic. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <Link href="/contact" className="text-white/30 hover:text-[#00C8E8] text-xs transition-colors py-2">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/30 hover:text-[#00C8E8] text-xs transition-colors py-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
