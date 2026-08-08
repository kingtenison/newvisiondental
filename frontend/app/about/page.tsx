"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, Heart, Target, Eye, Star, Phone, Calendar, MapPin, Sparkles, Check, ChevronDown } from "lucide-react";

const featuredDoctor = {
  name: "Dr. Felix Govina",
  title: "Founder & CEO",
  qualifications: "BDS, MPH, MSc (Occupational Health & Environmental Management)",
  experience: "29+ years",
  speciality: "Dental Surgery, Public Health & Professional Mentorship",
  bio: "Dr. Felix Govina is a seasoned and highly experienced dental surgeon with over 29 years of professional practice in dentistry. He is a multifaceted professional with diverse skills and qualifications. In addition to his dental training, he holds a Master of Public Health and a Master of Occupational Health and Environmental Management.",
  extendedBio: "Dr. Govina served as a military officer with the Ghana Armed Forces for 15 years before voluntarily retiring in 2014. Following his retirement, he worked with the United Nations as a professional dentist for seven years. He is the Founder and Chief Executive Officer of New Vision Dental Clinic, one of the leading state-of-the-art registered oral healthcare providers in Accra. As CEO, he plays a pivotal role in shaping the clinic's vision, strategic direction, and standards of clinical excellence across all branches of New Vision Dental Clinic. With a strong clinical background in dentistry, Dr. Govina has also served as a mentor to young doctors and dental professionals, guiding peers in clinical growth, leadership development, and private practice establishment. His commitment to continuous improvement extends beyond dentistry, combining clinical expertise with public health and occupational safety knowledge through his advanced academic training. Dr. Govina is passionate about mentoring and supporting young and upcoming dentists in developing their professional skills and building successful private practices. He is recognized as a leader, mentor, and advocate for excellence in oral healthcare delivery. Outside his professional life, he enjoys spending time with his contemporaries, engaging in meaningful conversations, and discussing topical and societal issues.",
  philosophy: "I am passionate about mentoring and supporting young and upcoming dentists in developing their professional skills and building successful private practices.",
  image: "/images/team/CEO.jpg",
  education: [
    "Bachelor of Dental Surgery",
    "Master of Public Health",
    "Master of Occupational Health and Environmental Management"
  ],
  achievements: [
    "Over 29 years of professional practice in dentistry",
    "Served 15 years as a military officer with the Ghana Armed Forces (voluntarily retired 2014)",
    "Worked with the United Nations as a professional dentist for seven years",
    "Founder and CEO of New Vision Dental Clinic, a leading state-of-the-art oral healthcare provider in Accra",
    "Mentor and advocate guiding young dentists in clinical growth, leadership, and private practice establishment"
  ],
  certifications: [
    "Dental Surgeon",
    "Public Health Specialist",
    "Occupational Health & Environmental Management Professional"
  ]
};

const team = [
  {
    name: "Dr. Akosua Oforiwa Haizel-Aryeetey",
    title: "Dental Surgeon & Orthodontist",
    qualifications: "BDS",
    experience: "23+ years",
    speciality: "Orthodontics & Dento-facial Orthopaedics",
    bio: "I am Dr Akosua Oforiwa Haizel-Aryeetey, a dental surgeon with specialty in Orthodontics and Dento-facial Orthopaedics. I had my BDS degree from UNIVERSITY OF GHANA DENTAL SCHOOL. I have been practicing for the past twenty-three years and I have a lot of clinical and community experience. I have worked in both the public and private institutions and have a lot of experience in my chosen field. I give off my best in the dispensation of my duties. My approach to work is client centered. My motto is hard work always pays.",
    image: "/images/team/dr-akosua.jpg",
    education: ["BDS - University of Ghana Dental School"]
  },
  {
    name: "Dr. Fatima Mustapha",
    title: "Medical Officer",
    qualifications: "BDS, BSc (Human Biology)",
    experience: "5+ years",
    speciality: "General Dentistry & Preventive Oral Health",
    bio: "Dr. Fatima Mustapha is a Ghanaian dental surgeon with experience in both hospital-based and private dental practice. She currently serves as a Medical Officer at New Vision Dental Clinic in Accra, where she provides comprehensive dental care and promotes preventive oral health education. Her professional experience includes serving as a Senior House Officer at the University Hospital, University of Ghana, and completing her Junior Housemanship at Komfo Anokye Teaching Hospital, where she gained extensive experience in patient assessment, diagnosis, treatment planning, restorative dentistry, endodontics, and minor oral surgery. Dr. Mustapha holds a Bachelor of Dental Surgery (BDS) and a Bachelor of Science in Human Biology from the Kwame Nkrumah University of Science and Technology (KNUST). She is passionate about delivering patient-centered care, promoting oral health awareness, and contributing to improved health outcomes through clinical excellence and continuous professional development.",
    image: "/images/team/dr-fatima.jpg",
    education: ["BDS - KNUST", "BSc Human Biology - KNUST"]
  },
  {
    name: "Dr. Keith Kwesi Wiredu Sagoe",
    title: "Dental Surgeon",
    qualifications: "BDS",
    experience: "5+ years",
    speciality: "Preventive, Restorative & Emergency Dentistry",
    bio: "Dr. Keith Kwesi Wiredu Sagoe is a dedicated Dental Surgeon with a passion for delivering high-quality, patient-centered oral healthcare. He is committed to helping patients achieve and maintain healthy smiles through preventive care, education, and evidence-based dental treatment. Dr. Sagoe obtained his dental training in China, where he developed a strong foundation in modern dental science and clinical practice. His international education provided him with exposure to diverse healthcare systems and advanced dental techniques, equipping him with the skills to manage a wide range of oral health conditions. Over the years, Dr. Sagoe has gained valuable experience in both public and private dental practice, providing comprehensive dental care to patients of all ages. His areas of expertise include preventive dentistry, restorative dentistry, endodontics (root canal treatment), oral surgery, pediatric dentistry, and emergency dental care. He is particularly passionate about patient education and believes that empowering people with accurate oral health information is key to preventing disease and improving overall health outcomes. In addition to his clinical work, Dr. Sagoe is actively involved in oral health promotion and community education. Known for his calm demeanor, gentle approach, and attention to detail, Dr. Sagoe is dedicated to building lasting relationships with his patients based on trust, professionalism, and compassion.",
    image: "/images/team/dr-keith.jpg",
    education: ["BDS - Dental Training in China"]
  }
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full flex flex-col"
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] rounded-t-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative p-5 flex-1 flex flex-col rounded-b-2xl border border-t-0 border-[#E8B830]/20 bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8] shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B830]/5 rounded-full blur-[60px]" />
        <div className="relative flex flex-col h-full">
          <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
          <p className="text-[#E8B830] text-sm font-semibold mb-2">{member.title}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-white/60 bg-white/10 px-2 py-0.5 rounded-full">{member.qualifications}</span>
            <span className="text-[10px] text-[#E8B830] bg-[#E8B830]/10 px-2 py-0.5 rounded-full">{member.experience}</span>
          </div>
          
          {/* Bio with expand/collapse */}
          <div className="mb-4 flex-1">
            <p className={`text-white/70 text-sm leading-relaxed ${!expanded ? 'line-clamp-3' : ''}`}>
              {member.bio}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-[#E8B830] text-xs font-semibold mt-2 hover:text-[#E8B830]/80 transition-colors"
            >
              {expanded ? 'Show Less' : 'Read More'}
              <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="pt-3 border-t border-white/10">
            <p className="text-xs text-white/50">
              <span className="font-semibold text-[#E8B830]">Specialty:</span> {member.speciality}
            </p>
          </div>
        </div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="h-0.5 bg-gradient-to-r from-[#E8B830] via-[#B07820] to-[#E8B830] rounded-b-2xl" />
    </motion.div>
  );
}

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
    <div className="min-h-screen bg-[#F2F4F8] pt-[72px] md:pt-20 overflow-x-hidden">

      {/* Hero Section — simplified */}
      <section className="relative w-full min-h-[25vh] md:min-h-[35vh] flex flex-col overflow-hidden">
        {/* 4x2 Image Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative h-full w-full">
              <Image
                src="/images/gallery/dental bacccccc.png"
                alt="Dental background"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        
        {/* Blue-Cyan Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4FAD]/95 via-[#0D2A60]/80 to-[#00C8E8]/40" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #E8B830 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/30 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 flex-1 flex items-center justify-center py-4 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              About Us
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 leading-tight">
              <span className="text-white">About</span>
              <span className="block text-golden-shine mt-0.5">New Vision Dental</span>
            </h1>

            <p className="text-white/70 text-sm md:text-xl leading-relaxed hidden sm:block">
              Your complete oral healthcare centre in Accra, Ghana. 
              Dedicated to creating confident smiles since 2011.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-3 pt-3 border-t border-white/15">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl sm:text-3xl font-bold text-white font-heading">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. About New Vision */}
      <section className="w-full pt-14 pb-16 bg-[#F2F4F8]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-[#E8B830] text-xs font-semibold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A4FAD] mb-5">About New Vision</h2>
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
                  <span key={i} className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-[#E8B830]/5 border border-[#E8B830]/15 px-3 py-1.5 rounded-full">
                    <Check className="w-3.5 h-3.5 text-[#E8B830]" />
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
      <section className="w-full py-16 bg-[#F2F4F8]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[#E8B830] text-xs font-semibold tracking-wide uppercase mb-3">
              <Users className="w-3.5 h-3.5" />
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A4FAD] mb-3">Meet Our Expert Team</h2>
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
            <div className="relative rounded-3xl overflow-hidden border border-[#E8B830]/20 shadow-2xl shadow-black/10">
              {/* Photo */}
              <div className="relative bg-gradient-to-b from-white/10 to-transparent">
                <Image
                  src={featuredDoctor.image}
                  alt={featuredDoctor.name}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]">
                {/* Gold blurs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B830]/6 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8B830]/4 rounded-full blur-[100px]" />
                
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 text-[#E8B830] text-xs font-semibold tracking-wide uppercase mb-3">
                    <Award className="w-3.5 h-3.5" />
                    Founder & CEO
                  </span>
                  <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold text-golden-shine mb-3">{featuredDoctor.name}</h3>
                  <p className="text-[#E8B830] font-semibold mb-4">{featuredDoctor.qualifications}</p>
                  <p className="text-white/70 leading-relaxed mb-4">{featuredDoctor.bio}</p>
                  <p className="text-white/50 leading-relaxed mb-6 text-sm">{featuredDoctor.extendedBio}</p>

                  {/* Philosophy quote */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                    <p className="text-white/80 text-sm leading-relaxed">
                      &ldquo;{featuredDoctor.philosophy}&rdquo;
                    </p>
                    <p className="text-[#E8B830] text-xs font-semibold mt-2">— Dr. Felix Govina</p>
                  </div>

                  {/* Specialty & Experience */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                      <Target className="w-4 h-4 text-[#E8B830] shrink-0" />
                      <span className="text-white/80 text-xs">{featuredDoctor.speciality}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                      <Award className="w-4 h-4 text-[#E8B830] shrink-0" />
                      <span className="text-white/80 text-xs">{featuredDoctor.experience}</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredDoctor.certifications.map((cert, i) => (
                        <span key={i} className="text-[10px] text-[#E8B830] bg-[#E8B830]/10 border border-[#E8B830]/15 px-2.5 py-1 rounded-full">
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
                          <Check className="w-3 h-3 text-[#E8B830] shrink-0" />
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
                          <Star className="w-3 h-3 text-[#E8B830] shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gold accent line at bottom */}
              <div className="h-0.5 bg-gradient-to-r from-[#E8B830] via-[#B07820] to-[#E8B830]" />
            </div>
          </motion.div>

          {/* Remaining Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="w-full py-16 bg-[#F2F4F8]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A4FAD]/5 via-[#E8B830]/5 to-[#1A4FAD]/5 border border-[#E8B830]/10 order-2 md:order-1"
            >
              <Image
                src="/images/NV-LOGO-GRADIANTS-OFFICIAL.png"
                alt="New Vision Dental Clinic - Our Story"
                fill
                className="object-contain p-8 md:p-12"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <span className="inline-flex items-center gap-2 text-[#E8B830] text-xs font-semibold tracking-wide uppercase mb-3">
                <Heart className="w-3.5 h-3.5" />
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A4FAD] mb-5">Our Story</h2>
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
      <section className="w-full py-16 bg-[#F2F4F8]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[#E8B830] text-xs font-semibold tracking-wide uppercase mb-3">
              <Target className="w-3.5 h-3.5" />
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A4FAD]">Mission & Vision</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-[#E8B830]/15 p-8 hover:shadow-lg hover:shadow-[#E8B830]/5 hover:border-[#E8B830]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E8B830]/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-[#E8B830]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A4FAD] mb-3">Our Mission</h3>
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
              className="bg-white rounded-2xl border border-[#E8B830]/15 p-8 hover:shadow-lg hover:shadow-[#E8B830]/5 hover:border-[#E8B830]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E8B830]/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-[#E8B830]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A4FAD] mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred dental care provider in Ghana, 
                setting the standard for excellence in oral healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="w-full py-16 bg-[#F2F4F8]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[#E8B830] text-xs font-semibold tracking-wide uppercase mb-3">
              <Star className="w-3.5 h-3.5" />
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A4FAD] mb-3">Our Core Values</h2>
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
                className="bg-white rounded-2xl border border-[#E8B830]/15 p-6 text-center hover:shadow-lg hover:shadow-[#E8B830]/5 hover:border-[#E8B830]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#E8B830]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#E8B830]" />
                </div>
                <h3 className="font-bold text-[#1A4FAD] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #E8B830 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/30 to-transparent" />
        <div className="absolute top-10 left-[20%] w-48 h-48 bg-[#E8B830]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-[25%] w-64 h-64 bg-[#E8B830]/6 rounded-full blur-[120px]" />

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
                className="inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold btn-golden-shine shadow-lg shadow-[#E8B830]/25 hover:shadow-xl hover:shadow-[#E8B830]/40 transition-all duration-300 hover:scale-105 text-sm md:text-base"
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
