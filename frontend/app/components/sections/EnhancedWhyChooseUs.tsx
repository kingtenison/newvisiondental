"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Heart, Clock, Award, Check } from "lucide-react";
import { useRef, memo } from "react";

const features = [
  {
    icon: Award,
    iconColor: "#EF4444",
    title: "Expert Care",
    shortTitle: "Expert Care",
    items: [
      "Board-certified specialists",
      "20+ years experience",
      "Digital diagnostics",
      "Personalized plans"
    ],
    shortItems: [
      "Certified specialists",
      "20+ years experience",
      "Digital diagnostics",
      "Custom plans"
    ],
  },
  {
    icon: Shield,
    iconColor: "#3B82F6",
    title: "Transparent Pricing",
    shortTitle: "Pricing",
    items: [
      "Upfront cost estimates",
      "No hidden fees",
      "Flexible payments",
      "Insurance assistance"
    ],
    shortItems: [
      "Upfront costs",
      "No hidden fees",
      "Flexible payments",
      "Insurance help"
    ],
  },
  {
    icon: Heart,
    iconColor: "#22C55E",
    title: "Comfort First",
    shortTitle: "Comfort",
    items: [
      "Spa-like environment",
      "Sedation options",
      "Pain-free techniques",
      "Premium amenities"
    ],
    shortItems: [
      "Spa environment",
      "Sedation available",
      "Pain-free care",
      "Premium amenities"
    ],
  },
  {
    icon: Clock,
    iconColor: "#A855F7",
    title: "Easy Scheduling",
    shortTitle: "Scheduling",
    items: [
      "Same-day appointments",
      "Evening hours",
      "Weekend availability",
      "Online booking 24/7"
    ],
    shortItems: [
      "Same-day slots",
      "Evening hours",
      "Weekends open",
      "Book 24/7"
    ],
  }
];

// Glassmorphism list card - fully responsive
const FeatureList = memo(({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  
  const animations = [
    { x: -40, rotateZ: -2 },
    { x: 40, rotateZ: 2 },
    { y: 40, scale: 0.96 },
    { y: -40, scale: 0.96 },
  ];
  
  const initial = animations[index];
  
  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        delay: 0.1 + index * 0.1, 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] as const 
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring" as const, stiffness: 300 }}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden h-full backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, rgba(212,175,55,0.05) 100%)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {/* Glass shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </div>

        {/* Golden border glow on hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-colors duration-500" />

        <div className="relative h-full flex flex-col p-2.5 sm:p-3 md:p-4 lg:p-5">
          {/* Header with Icon */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mb-2 sm:mb-3 md:mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative flex items-center justify-center flex-shrink-0 rounded-md sm:rounded-lg"
              style={{
                width: 'clamp(28px, 9vw, 44px)',
                height: 'clamp(28px, 9vw, 44px)',
                background: `linear-gradient(135deg, ${feature.iconColor}30 0%, ${feature.iconColor}15 100%)`,
                boxShadow: `0 0 12px ${feature.iconColor}40`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Icon 
                style={{
                  width: '55%',
                  height: '55%',
                  color: '#FFFFFF',
                  filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))',
                }} 
              />
            </motion.div>
            <h3 className="font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 leading-tight" style={{ fontSize: 'clamp(11px, 2.8vw, 18px)' }}>
              {feature.shortTitle}
            </h3>
          </div>

          {/* List Items */}
          <ul className="flex-1 flex flex-col gap-1 sm:gap-1.5 md:gap-2">
            {/* Short items for mobile, full items for larger screens */}
            <li className="flex items-start gap-1.5 sm:gap-2 group/item md:hidden">
              <div className="rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center flex-shrink-0 mt-0.5 w-[10px] h-[10px] sm:w-3.5 sm:h-3.5 group-hover/item:scale-110 transition-transform duration-300">
                <Check className="w-[6px] h-[6px] sm:w-2 sm:h-2 text-white" strokeWidth={3} />
              </div>
              <span className="text-white/70 text-[8px] sm:text-[10px] leading-snug group-hover:text-white/90 transition-colors duration-300">
                {feature.shortItems[0]}
              </span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2 group/item md:hidden">
              <div className="rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center flex-shrink-0 mt-0.5 w-[10px] h-[10px] sm:w-3.5 sm:h-3.5 group-hover/item:scale-110 transition-transform duration-300">
                <Check className="w-[6px] h-[6px] sm:w-2 sm:h-2 text-white" strokeWidth={3} />
              </div>
              <span className="text-white/70 text-[8px] sm:text-[10px] leading-snug group-hover:text-white/90 transition-colors duration-300">
                {feature.shortItems[1]}
              </span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2 group/item md:hidden">
              <div className="rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center flex-shrink-0 mt-0.5 w-[10px] h-[10px] sm:w-3.5 sm:h-3.5 group-hover/item:scale-110 transition-transform duration-300">
                <Check className="w-[6px] h-[6px] sm:w-2 sm:h-2 text-white" strokeWidth={3} />
              </div>
              <span className="text-white/70 text-[8px] sm:text-[10px] leading-snug group-hover:text-white/90 transition-colors duration-300">
                {feature.shortItems[2]}
              </span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2 group/item md:hidden">
              <div className="rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center flex-shrink-0 mt-0.5 w-[10px] h-[10px] sm:w-3.5 sm:h-3.5 group-hover/item:scale-110 transition-transform duration-300">
                <Check className="w-[6px] h-[6px] sm:w-2 sm:h-2 text-white" strokeWidth={3} />
              </div>
              <span className="text-white/70 text-[8px] sm:text-[10px] leading-snug group-hover:text-white/90 transition-colors duration-300">
                {feature.shortItems[3]}
              </span>
            </li>

            {/* Full items for tablet/desktop */}
            {feature.items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 + idx * 0.05, duration: 0.3 }}
                className="hidden md:flex items-start gap-2 group/item"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white/70 text-sm leading-snug group-hover:text-white/90 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Learn More */}
          <div className="mt-1.5 sm:mt-2 md:mt-3 pt-1.5 sm:pt-2 md:pt-3 border-t border-white/10">
            <Link
              href="/services"
              className="group/link inline-flex items-center gap-1 sm:gap-1.5 text-black font-bold hover:text-[#D4AF37] transition-all duration-300"
              style={{ fontSize: 'clamp(9px, 2vw, 14px)' }}
            >
              <span className="group-hover/link:tracking-wider transition-all duration-300">Learn more</span>
              <ArrowRight className="group-hover/link:translate-x-1 group-hover/link:scale-110 transition-all duration-300" style={{ width: 'clamp(10px, 2vw, 16px)', height: 'clamp(10px, 2vw, 16px)' }} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
FeatureList.displayName = "FeatureList";

export default function EnhancedWhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative w-full py-10 sm:py-14 md:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0510 0%, #1a0a12 20%, #2d1418 40%, #4a2030 55%, #8b5a6a 70%, #c9a5b0 82%, #e8d5da 90%, #e0e0e0 95%, #e7e7e7 100%)' }}>
      {/* Subtle gold dust particles effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.8) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }} />

      {/* Ambient gold glow */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#D4AF37]/[0.03] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />

      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="relative w-full px-3 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <motion.div style={{ y: titleY }} className="overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[#D4AF37] font-semibold tracking-wide uppercase mb-1.5 sm:mb-2"
              style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}
            >
              <Sparkles style={{ width: 'clamp(10px, 2.5vw, 16px)', height: 'clamp(10px, 2.5vw, 16px)' }} />
              Why Choose Us
            </motion.span>
          </motion.div>
          
          <div className="overflow-hidden mb-0.5 sm:mb-1 md:mb-2">
            <motion.h2 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="font-bold text-white"
              style={{ y: subtitleY, fontSize: 'clamp(18px, 5vw, 48px)' }}
            >
              Excellence in
            </motion.h2>
          </div>
          
          <div className="overflow-hidden mb-1.5 sm:mb-2 md:mb-3">
            <motion.span 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="block font-bold text-golden-shine"
              style={{ y: subtitleY, fontSize: 'clamp(18px, 5vw, 48px)' }}
            >
              Every Detail
            </motion.span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {features.map((feature, idx) => (
            <FeatureList key={idx} feature={feature} index={idx} />
          ))}
        </motion.div>

        {/* Book Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-6 sm:mt-8 md:mt-10"
        >
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold overflow-hidden btn-golden-shine shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-shadow duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Book Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
