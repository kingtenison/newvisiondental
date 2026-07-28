"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Heart, Award, CheckCircle } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Award,
    number: "01",
    title: "Advanced Technology",
    description: "We invest in the latest diagnostic and treatment technology to deliver precise, effective, and comfortable dental care.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Experienced Professionals",
    description: "Our skilled team brings years of expertise across every dental specialty, ensuring you receive world-class treatment.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Personalized Care",
    description: "Every treatment plan is tailored to your unique needs, goals, and comfort level — because your smile is one of a kind.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Comfortable Environment",
    description: "From our welcoming facility to gentle techniques, we create a stress-free experience for patients of all ages.",
  },
];

const perks = [
  "Advanced Technology",
  "Expert Team",
  "Personalized Plans",
  "Comfortable Clinic",
  "Family-Friendly",
  "Gentle Care",
];

export default function EnhancedWhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#0A0A0A]">
      {/* ── Preserved Background System ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D2A60] to-[#0A0A0A]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[180px] bg-[#1A4FAD]/20 animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[180px] bg-[#00C8E8]/10 animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,232,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* ── Top Label Strip ── */}
      <div className="relative z-10 w-full border-b border-white/10 px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#00C8E8]" />
          <span className="text-[#00C8E8] text-xs font-black uppercase tracking-[0.35em]">Why Choose Us</span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white/30 text-xs font-medium tracking-widest uppercase hidden sm:block"
        >
          Advanced Technology · Expert Team · Whole Family Care
        </motion.span>
      </div>

      {/* ── Main Editorial Body ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-0 lg:min-h-[80vh] items-stretch">

          {/* Left Column — Headline & Perks */}
          <div className="flex flex-col justify-between py-10 sm:py-16 lg:py-24 lg:pr-20 border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 sm:mb-10"
              >
                Exceptional <br />
                Dental Care <br />
                <span className="text-[#00C8E8]">for Your</span> <br />
                <span className="text-[#00C8E8]">Whole Family.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-md mb-8 sm:mb-12"
              >
                At New Vision Dental Clinic, we combine advanced technology, experienced professionals, personalized care, and a comfortable environment to provide exceptional dental services for the whole family.
              </motion.p>

              {/* Perks Pill Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8B830] flex-shrink-0" />
                    <span className="text-white/80 text-xs sm:text-sm font-medium whitespace-nowrap">{perk}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 sm:mt-12 lg:mt-8"
            >
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-3 sm:gap-4 px-6 py-3 sm:px-10 sm:py-5 lg:px-16 lg:py-6 bg-[#E8B830] text-[#0A0A0A] font-black rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(232,184,48,0.45)] hover:scale-105 active:scale-95 uppercase tracking-widest text-xs sm:text-sm lg:text-xl"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Feature Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 py-8 sm:py-12 lg:py-24 lg:pl-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="group relative flex flex-col p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 transition-all duration-500 hover:bg-white/[0.06] hover:border-[#00C8E8]/30 overflow-hidden"
              >
                {/* Number Background */}
                <span className="absolute -top-2 -right-1 sm:-top-4 sm:-right-2 text-4xl sm:text-7xl lg:text-8xl font-black text-white/[0.03] group-hover:text-[#00C8E8]/10 transition-colors duration-500 pointer-events-none font-heading">
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="relative w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#00C8E8] group-hover:bg-[#00C8E8]/10 group-hover:border-[#00C8E8]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-3 sm:mb-6 lg:mb-8">
                  <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-xs sm:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-3 group-hover:text-[#00C8E8] transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-white/50 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed group-hover:text-white/70 transition-colors duration-300 line-clamp-4">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="relative z-10 mt-3 sm:mt-6 flex justify-end">
                   <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-white/10 group-hover:text-[#00C8E8]/80 group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom Border Strip ── */}
      <div className="relative z-10 w-full border-t border-white/10" />
    </section>
  );
}
