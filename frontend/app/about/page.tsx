"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, Heart, Target, Eye, Star, Phone, Calendar, MapPin, Sparkles, Check } from "lucide-react";

const featuredDoctor = {
  name: "Dr. Felix Govina",
  title: "Founder & CEO",
  qualifications: "BDS, MSc (Orthodontics), FICD",
  experience: "15+ years",
  speciality: "Orthodontics & Dental Implants",
  bio: "Dr. Felix Govina is the visionary founder of New Vision Dental Clinic. With over 15 years of experience and specialized training across multiple continents, he has built a practice that sets the standard for dental excellence in Ghana. His passion for transforming smiles and his commitment to patient care have earned him recognition as one of the leading dental professionals in West Africa.",
  extendedBio: "After completing his Bachelor of Dental Surgery at the University of Ghana, Dr. Govina pursued advanced training in Orthodontics at the University of Lisbon, Portugal. He further honed his skills through a prestigious fellowship at the International College of Dentists and completed additional implant training at the Misch International Implant Institute in the USA. He returned to Ghana with a mission to bring world-class dental standards to his home country.",
  philosophy: "Every smile tells a story. My role is to help each patient write a confident chapter in theirs.",
  image: "/images/team/CEO.jpg",
  education: ["BDS - University of Ghana", "MSc Orthodontics - University of Lisbon", "Fellowship - International College of Dentists", "Advanced Implant Training - Misch International Implant Institute, USA"],
  achievements: [
    "Founded New Vision Dental Clinic in 2011, now serving 5,000+ patients across 3 locations",
    "Fellow of the International College of Dentists (FICD)",
    "Recognized as one of Ghana's Top Dental Professionals",
    "Pioneered digital dental implant placement in Accra",
    "Trained over 20 dental professionals across West Africa"
  ],
  certifications: ["Board Certified Orthodontist", "Certified Implantologist", "Invisalign Certified Provider", "Digital Smile Design Certified"]
};

const team = [
  {
    name: "Dr. Abena Serwaa",
    title: "Senior Dentist",
    qualifications: "BDS, MSc (Endodontics)",
    experience: "12+ years",
    speciality: "Root Canal Treatment & Cosmetic Dentistry",
    bio: "Dr. Abena Serwaa is a highly skilled endodontist with a special interest in pain-free root canal treatments. She trained in Germany and South Africa.",
    image: "/images/team/dr 2.jpg",
    education: ["BDS - KNUST", "MSc Endodontics - Charité Berlin", "Advanced Cosmetic Dentistry - Cape Town"]
  },
  {
    name: "Dr. John Mensah",
    title: "Pediatric Dentist",
    qualifications: "BDS, MSc (Pediatric Dentistry)",
    experience: "10+ years",
    speciality: "Children's Dentistry & Preventive Care",
    bio: "Dr. John Mensah specializes in making dental visits fun and educational for children. He trained in pediatric dentistry in the USA.",
    image: "/images/team/dr 3.jpg",
    education: ["BDS - University of Ghana", "MSc Pediatric Dentistry - Boston University", "Child Psychology Certificate - Harvard"]
  },
  {
    name: "Dr. Esi Mawusi",
    title: "Cosmetic Dentist",
    qualifications: "BDS, MSc (Cosmetic Dentistry)",
    experience: "8+ years",
    speciality: "Teeth Whitening, Veneers & Smile Makeovers",
    bio: "Dr. Esi Mawusi has a passion for creating beautiful, natural-looking smiles. Trained in the latest cosmetic techniques in Spain and South Africa.",
    image: "/images/team/dr4.jpg",
    education: ["BDS - University of Ghana", "MSc Cosmetic Dentistry - Madrid", "Advanced Veneer Certification - Cape Town"]
  }
];

const values = [
  { title: "Excellence", desc: "We strive for excellence in everything we do, from consultation to treatment.", icon: Award },
  { title: "Compassion", desc: "We treat every patient with kindness, empathy, and genuine respect.", icon: Heart },
  { title: "Integrity", desc: "We are honest, transparent, and ethical in all our practices.", icon: Star },
  { title: "Innovation", desc: "We invest in the latest technology and techniques for the best care.", icon: Target },
  { title: "Accessibility", desc: "We make quality dental care affordable and available to all.", icon: Users },
];

const stats = [
  { value: "15+", label: "Years of Experience", icon: Award },
  { value: "5K+", label: "Happy Patients", icon: Heart },
  { value: "8+", label: "Expert Dentists", icon: Users },
  { value: "3", label: "Locations", icon: MapPin },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">

      {/* Hero Section — with image grid */}
      <section className="relative w-full min-h-[25vh] md:min-h-[35vh] flex flex-col overflow-hidden">
        {/* Full Width 4x2 Image Grid */}
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
        
        {/* Wine Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0814]/95 via-[#5C0F22]/70 to-[#7A1A2E]/30" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 flex-1 flex items-center justify-center py-4 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2"
            >
              <Sparkles className="w-3 h-3" />
              About Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 leading-tight"
            >
              <span className="text-white">About</span>
              <span className="block text-golden-shine mt-0.5">New Vision Dental</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/70 text-sm md:text-xl leading-relaxed hidden sm:block"
            >
              Your complete oral healthcare centre in Accra, Ghana. 
              Dedicated to creating confident smiles since 2011.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-12 mt-3 pt-3 border-t border-white/15"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. About New Vision */}
      <section className="w-full pt-14 pb-16 bg-[#e7e7e7]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5C0F22] mb-5">About New Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                New Vision Dental Clinic is a premier dental care provider in Accra, Ghana, 
                offering comprehensive dental services across three convenient locations. 
                Founded with a commitment to excellence, we combine world-class expertise 
                with compassionate care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of experienced dentists has trained across Ghana, Portugal, USA, 
                Spain, Germany, and South Africa, bringing international standards of care 
                to our local communities in North Legon, Ashaley Botwe, and ACP Estate.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Modern Equipment", "Sterile Environment", "Patient Comfort", "Affordable Care"].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-[#D4AF37]/5 border border-[#D4AF37]/15 px-3 py-1.5 rounded-full">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/team/Clinic_Photo.jpg"
                alt="New Vision Dental Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Meet Our Team */}
      <section className="w-full py-16 bg-[#e7e7e7]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
              <Users className="w-3.5 h-3.5" />
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5C0F22] mb-3">Meet Our Expert Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Experienced professionals dedicated to your smile</p>
          </motion.div>

          {/* Featured Doctor — Dr. Felix Govina Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="relative bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl shadow-black/10">
              {/* Gold blurs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/6 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/4 rounded-full blur-[100px]" />

              <div className="relative grid md:grid-cols-2 gap-0 items-stretch">
                {/* Photo */}
                <div className="relative h-[350px] md:h-auto md:min-h-[450px]">
                  <Image
                    src={featuredDoctor.image}
                    alt={featuredDoctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#5C0F22]/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C0F22] to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
                    <Award className="w-3.5 h-3.5" />
                    Founder & CEO
                  </span>
                  <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold text-golden-shine mb-3">{featuredDoctor.name}</h3>
                  <p className="text-[#D4AF37] font-semibold mb-4">{featuredDoctor.qualifications}</p>
                  <p className="text-white/70 leading-relaxed mb-4">{featuredDoctor.bio}</p>
                  <p className="text-white/50 leading-relaxed mb-6 text-sm">{featuredDoctor.extendedBio}</p>

                  {/* Philosophy quote */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                    <p className="text-white/80 italic text-sm leading-relaxed">
                      &ldquo;{featuredDoctor.philosophy}&rdquo;
                    </p>
                    <p className="text-[#D4AF37] text-xs font-semibold mt-2">— Dr. Felix Govina</p>
                  </div>

                  {/* Specialty & Experience */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                      <Target className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="text-white/80 text-xs">{featuredDoctor.speciality}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                      <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="text-white/80 text-xs">{featuredDoctor.experience}</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredDoctor.certifications.map((cert, i) => (
                        <span key={i} className="text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/15 px-2.5 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Education</p>
                    <ul className="space-y-1.5">
                      {featuredDoctor.education.map((edu, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/70 text-xs">
                          <Check className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Key Achievements</p>
                    <ul className="space-y-1.5">
                      {featuredDoctor.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70 text-xs">
                          <Star className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gold accent line at bottom */}
              <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Remaining Team Members */}
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                {/* Photo Card */}
                <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl border border-[#D4AF37]/15 p-5 hover:shadow-lg hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300">
                  <h3 className="text-lg font-bold text-[#5C0F22]">{member.name}</h3>
                  <p className="text-[#D4AF37] text-sm font-semibold">{member.title}</p>
                  <p className="text-gray-500 text-xs mt-1 mb-3">{member.qualifications} — {member.experience}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[#5C0F22]">Specialty:</span> {member.speciality}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="w-full py-16 bg-[#e7e7e7]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#5C0F22]/5 via-[#D4AF37]/5 to-[#5C0F22]/5 border border-[#D4AF37]/10 flex items-center justify-center order-2 md:order-1"
            >
              <div className="text-center">
                <Heart className="w-16 h-16 text-[#D4AF37]/30 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Our Journey</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
                <Heart className="w-3.5 h-3.5" />
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5C0F22] mb-5">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  New Vision Dental Clinic was founded with a simple mission: to provide 
                  world-class dental care to the people of Accra. What started as a single 
                  clinic has grown into three convenient locations across the city, serving 
                  thousands of happy patients.
                </p>
                <p>
                  Our team of experienced dentists has trained in Ghana, Portugal, USA, 
                  Spain, Germany, and South Africa, bringing back invaluable knowledge 
                  to our Accra practices.
                </p>
                <p>
                  We are proud to be the trusted dental care provider for families 
                  across North Legon, Ashaley Botwe, and ACP Estate.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="w-full py-16 bg-[#e7e7e7]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
              <Target className="w-3.5 h-3.5" />
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5C0F22]">Mission & Vision</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-[#D4AF37]/15 p-8 hover:shadow-lg hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#5C0F22] mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality dental care that transforms lives 
                and creates confident smiles for every Ghanaian.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl border border-[#D4AF37]/15 p-8 hover:shadow-lg hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#5C0F22] mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred dental care provider in Ghana, 
                setting the standard for excellence in oral healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="w-full py-16 bg-[#e7e7e7]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
              <Star className="w-3.5 h-3.5" />
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5C0F22] mb-3">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-[#D4AF37]/15 p-6 text-center hover:shadow-lg hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-[#5C0F22] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
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
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5">
              Experience the New Vision Difference
            </h2>
            <p className="text-sm md:text-lg text-white/70 mb-4 md:mb-10 leading-relaxed hidden md:block">
              Join thousands of happy patients who trust us with their smiles.
            </p>
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold btn-golden-shine shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Book an Appointment</span>
                  <span className="sm:hidden">Book</span>
                </span>
              </Link>
              <a
                href="tel:+233257091176"
                className="inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Call Us</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
