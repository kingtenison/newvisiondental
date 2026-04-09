"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Shield, Heart, Calendar, ArrowRight, Star } from "lucide-react"

export default function LuxuryHero() {
  // Scroll animation refs
  const sectionRef = useRef(null)
  const headerPRef = useRef(null)
  const excellenceRef = useRef(null)
  const detailRef = useRef(null)
  const dotsRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Scroll handler for multi-directional movement
  useEffect(() => {
    const handleScroll = () => {
      const handleParallax = (element: HTMLElement | null, direction = 'left') => {
        if (!element) return
        const rect = element.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const screenCenter = window.innerHeight / 2
        const distance = (elementCenter - screenCenter) / window.innerHeight
        
        let transformX = 0, transformY = 0
        const speed = 40
        
        switch(direction) {
          case 'left':
            transformX = distance * speed * -1
            break
          case 'right':
            transformX = distance * speed
            break
          case 'bottom':
            transformY = distance * speed
            break
          case 'up-left':
            transformY = distance * speed * -1
            transformX = distance * speed * -0.5
            break
          case 'up-right':
            transformY = distance * speed * -1
            transformX = distance * speed * 0.5
            break
          case 'down-left':
            transformY = distance * speed
            transformX = distance * speed * -0.5
            break
          case 'down-right':
            transformY = distance * speed
            transformX = distance * speed * 0.5
            break
        }
        
        element.style.transition = 'transform 0.1s ease-out'
        element.style.transform = `translate(${transformX}px, ${transformY}px)`
      }
      
      // Apply specific directional animations
      if (headerPRef.current) handleParallax(headerPRef.current, 'left')
      if (excellenceRef.current) handleParallax(excellenceRef.current, 'right')
      if (detailRef.current) handleParallax(detailRef.current, 'bottom')
      if (dotsRef.current) handleParallax(dotsRef.current, 'left')
      
      // Apply different directions to each card for multi-directional effect
      if (cardsRef.current[0]) handleParallax(cardsRef.current[0], 'up-left')
      if (cardsRef.current[1]) handleParallax(cardsRef.current[1], 'up-right')
      if (cardsRef.current[2]) handleParallax(cardsRef.current[2], 'down-left')
      if (cardsRef.current[3]) handleParallax(cardsRef.current[3], 'down-right')
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const highlights = [
    {
      icon: Sparkles,
      title: "Expert Care",
      description: "World-class dentistry tailored to your smile",
      stat: "20+ Years"
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      description: "Clear costs, no hidden surprises",
      stat: "100% Honest"
    },
    {
      icon: Heart,
      title: "Comfort First",
      description: "Luxury environment, advanced technology",
      stat: "5★ Rated"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Flexible appointments for your lifestyle",
      stat: "Online Booking"
    }
  ]

  return (
    <section className="relative min-h-screen bg-[#e7e7e7] overflow-hidden">
      
      {/* PREMIUM HERO SECTION */}
      <div className="relative h-screen md:h-[700px] flex items-center justify-center overflow-hidden group pt-16 sm:pt-20 md:pt-32 lg:pt-40">
        
        {/* ANIMATED BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* RIGHT-ALIGNED HERO IMAGE WITH SHAPE CLIP */}
          <div className="absolute inset-0 right-0 hidden lg:flex items-center justify-end pr-4 z-10">
            <div className="relative h-full w-[70%] overflow-hidden hero-image-clip">
              <Image
                src="/images/hero/hero-image.jpg"
                alt="New Vision Dental Premium Care"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
                quality={95}
              />
            </div>
          </div>

          {/* WINE GRADIENT OVERLAY - PREMIUM */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5C0F22]/85 via-[#5C0F22]/60 to-[#5C0F22]/20 pointer-events-none z-5"></div>

          {/* ACCENT GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5C0F22]/20 opacity-40 pointer-events-none"></div>

          {/* PREMIUM BOKEH EFFECT */}
          <div className="absolute top-10 left-20 w-48 h-48 bg-[#E8B923]/8 rounded-full blur-3xl" style={{animationDelay: '0s'}}></div>
          <div className="absolute bottom-20 right-32 w-64 h-64 bg-[#E8B923]/5 rounded-full blur-3xl" style={{animationDelay: '1s'}}></div>
        </div>

        {/* HERO CONTENT - PREMIUM */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20">
          <div className="w-full lg:w-1/2 max-w-4xl">
            
            {/* PREMIUM BADGE */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#E8B923]/30 group animate-slide-down">
              <Star className="w-4 h-4 text-[#E8B923] fill-[#E8B923] animate-spin-slow" />
              <span className="text-[#E8B923] text-xs font-light tracking-[0.25em] uppercase">
                Premium Dental Excellence
              </span>
            </div>

            {/* MAIN HEADLINE - DRAMATIC */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-[1] sm:leading-[0.9] animate-slide-up tracking-tight">
              <span className="text-white">Your</span>
              <br />
              <span className="relative inline-block bg-gradient-to-r from-[#E8B923] via-[#FFD700] to-[#E8B923] bg-clip-text text-transparent animate-glow-pulse">
                Perfect Smile
              </span>
              <br />
              <span className="text-white">Awaits</span>
            </h1>

            {/* PREMIUM DIVIDER */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#E8B923] to-transparent mb-6 animate-slide-right" style={{animationDelay: '0.1s'}}></div>

            {/* COMPELLING DESCRIPTION */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 leading-relaxed mb-10 max-w-3xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              Experience <span className="text-[#E8B923]">world-class</span> dental care in a <span className="text-[#E8B923]">luxury environment</span>. Expert dentists, transparent pricing, and uncompromising <span className="text-[#E8B923]">comfort</span>.
            </p>

            {/* PREMIUM CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <Link
                href="/book"
                className="group/btn px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#E8B923] via-[#FFD700] to-[#E8B923] text-[#5C0F22] text-xs sm:text-sm font-light tracking-[0.1em] uppercase rounded-xl hover:shadow-2xl hover:shadow-[#E8B923]/50 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden whitespace-nowrap animate-button-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book Your Smile
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 animate-bounce-right" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/services"
                className="group/btn px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/40 text-white text-xs sm:text-sm font-light tracking-[0.1em] uppercase rounded-xl hover:border-[#E8B923] hover:bg-white/10 backdrop-blur-sm transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg"
              >
                Explore Our Services
              </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="flex gap-8 mt-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-light text-[#E8B923] group-hover:scale-110 transition-transform duration-300 inline-block">500+</p>
                <p className="text-sm text-gray-200 font-light">Happy Patients</p>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-[#E8B923]/30 to-transparent animate-pulse"></div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-light text-[#E8B923] group-hover:scale-110 transition-transform duration-300 inline-block">5★</p>
                <p className="text-sm text-gray-200 font-light">Highly Rated</p>
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATED SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce group cursor-pointer hover:opacity-60 transition-opacity">
          <svg className="w-6 h-10 text-[#E8B923] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div className="absolute inset-0 w-6 h-10 animate-scroll-glow rounded"></div>
        </div>
      </div>

      {/* PREMIUM FEATURES SECTION */}
      <div className="relative bg-gradient-to-b from-[#e7e7e7] via-[#dfdfdf] to-[#e7e7e7] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          
          {/* SECTION HEADER */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <p ref={headerPRef} className="text-[#E8B923] text-xs md:text-sm uppercase tracking-[0.4em] font-light mb-6 transition-transform duration-300">
              Why We're Different
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-6 leading-tight">
              <div ref={excellenceRef} className="inline-block transition-transform duration-300">
                Excellence in
              </div>
              <br />
              <div ref={detailRef} className="inline-block text-[#5C0F22] transition-transform duration-300">
                Every Detail
              </div>
            </h2>
            <div ref={dotsRef} className="flex gap-2 justify-center mb-8 transition-transform duration-300">
              <div className="w-4 h-1.5 bg-[#E8B923] rounded-full"></div>
              <div className="w-4 h-1.5 bg-[#E8B923]/40 rounded-full"></div>
              <div className="w-4 h-1.5 bg-[#E8B923]/20 rounded-full"></div>
            </div>
          </div>

          {/* PREMIUM HIGHLIGHTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div 
                  key={idx}
                  ref={(el) => {
                    if (el) cardsRef.current[idx] = el
                  }}
                  className="group relative flex flex-col h-full transition-all duration-500 hover:scale-105"
                  style={{
                    animationName: idx === 0 ? 'cardStackDrop' : idx === 1 || idx === 2 ? 'cardStackSlideRight' : 'cardStackPopIn',
                    animationDuration: '0.9s',
                    animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    animationFillMode: 'forwards',
                    animationDelay: `${idx * 0.12}s`,
                    opacity: 0
                  }}
                >
                  {/* PREMIUM CARD GLOW BACKGROUND */}
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-[#E8B923]/50 to-[#5C0F22]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10 group-hover:blur-2xl"></div>
                  
                  {/* CARD BORDER EFFECT - ENHANCED */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E8B923]/60 via-[#E8B923]/20 to-[#5C0F22]/30 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-5 shadow-2xl"></div>
                  
                  {/* CARD CONTENT - ENHANCED */}
                  <div className="relative bg-gradient-to-br from-[#e7e7e7] via-[#e7e7e7]/95 to-[#dfdfdf]/90 backdrop-blur-xl border-2 border-gray-200/80 rounded-2xl md:rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col flex-1 transition-all duration-500 group-hover:border-[#E8B923]/70 group-hover:shadow-2xl group-hover:shadow-[#E8B923]/40 group-hover:bg-[#e7e7e7] group-hover:-translate-y-3 group-hover:to-[#dfdfdf]">
                    
                    {/* STAT BADGE - ENHANCED */}
                  <div className="absolute -top-5 right-6 px-5 py-2 bg-gradient-to-r from-[#E8B923] to-[#FFD700] text-[#5C0F22] text-xs font-bold tracking-[0.3em] uppercase rounded-full shadow-xl animate-assembly-badge hover:shadow-2xl hover:shadow-[#E8B923]/60" style={{animationDelay: `${(idx * 0.12) + 0}s`}}>
                      {item.stat}
                    </div>

                    {/* ICON CONTAINER - ENHANCED */}
                    <div className="mb-10 animate-assembly-icon group/icon" style={{animationDelay: `${(idx * 0.12) + 0.12}s`}}>
                      <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#E8B923]/40 to-[#5C0F22]/20 flex items-center justify-center group-hover:from-[#E8B923]/60 group-hover:to-[#5C0F22]/40 transition-all duration-500 relative overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-[#E8B923]/30 group-hover:scale-110">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E8B923]/20 via-white/40 to-[#E8B923]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        <Icon className="w-14 h-14 text-[#5C0F22] group-hover:text-[#E8B923] transition-all duration-500 relative z-10 group-hover/icon:scale-125 group-hover/icon:rotate-12" />
                      </div>
                    </div>

                    {/* TITLE - ENHANCED */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-5 group-hover:text-[#5C0F22] transition-all duration-300 animate-assembly-title" style={{animationDelay: `${(idx * 0.12) + 0.24}s`}}>
                      {item.title}
                    </h3>

                    {/* PREMIUM DIVIDER - ENHANCED */}
                    <div className="h-1.5 bg-gradient-to-r from-[#E8B923] via-[#FFD700] to-transparent mb-6 group-hover:w-32 transition-all duration-500 animate-assembly-divider shadow-lg" style={{animationDelay: `${(idx * 0.12) + 0.36}s`}}></div>

                    {/* DESCRIPTION - ENHANCED */}
                    <p className="text-gray-600 text-lg font-light leading-relaxed flex-1 mb-10 group-hover:text-gray-800 transition-all duration-300 animate-assembly-description" style={{animationDelay: `${(idx * 0.12) + 0.48}s`}}>
                      {item.description}
                    </p>

                    {/* PREMIUM LINK - ENHANCED */}
                    <Link
                      href="/services"
                      className="text-[#5C0F22] text-xs font-bold tracking-[0.4em] uppercase opacity-70 hover:opacity-100 transition-all duration-300 self-start group/link relative animate-assembly-link group-hover:text-[#E8B923]"
                      style={{animationDelay: `${(idx * 0.12) + 0.6}s`}}
                    >
                      <span className="flex items-center gap-3">
                        Learn More
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* PREMIUM STATS SECTION */}
      <div className="relative bg-gradient-to-r from-[#5C0F22] via-[#2d061a] to-[#5C0F22] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* ANIMATED BACKGROUND */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8B923]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8B923]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* ANIMATED PATTERN */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #E8B923 2px, #E8B923 4px)',
          backgroundSize: '60px 60px',
          animation: 'slide 10s linear infinite'
        }}></div>

        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center">
            <div className="group">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#E8B923] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">500+</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light">Happy Patients</p>
            </div>
            <div className="group">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#E8B923] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">20+</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light">Years Excellence</p>
            </div>
            <div className="group">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#E8B923] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">100%</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light">Satisfaction</p>
            </div>
            <div className="group">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#E8B923] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">5★</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light">Star Rated</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-40px);
            width: 0;
          }
          to {
            opacity: 1;
            transform: translateX(0);
            width: 100%;
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(8px);
          }
          50% {
            transform: translateY(-35px) translateX(-8px);
          }
          75% {
            transform: translateY(-20px) translateX(8px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 10px rgba(232, 185, 35, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(232, 185, 35, 0.8),
                         0 0 60px rgba(232, 185, 35, 0.4);
          }
        }

        @keyframes button-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(232, 185, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(232, 185, 35, 0.4);
          }
        }

        @keyframes bounce-right {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes scroll-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(232, 185, 35, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(232, 185, 35, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(20px) translateY(-20px);
          }
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(60px);
          }
        }

        @keyframes assemblyBadge {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.7);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes assemblyIcon {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.6) rotateZ(-30deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateZ(0deg);
          }
        }

        @keyframes assemblyTitle {
          from {
            opacity: 0;
            transform: translateX(60px) skewX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) skewX(0deg);
          }
        }

        @keyframes assemblyDivider {
          from {
            opacity: 0;
            width: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            width: 80px;
            transform: translateX(0);
          }
        }

        @keyframes assemblyDescription {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes assemblyLink {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardStackDrop {
          0% {
            opacity: 0;
            transform: translateY(-100px) rotateX(90deg) scale(0.85);
          }
          50% {
            transform: translateY(15px) rotateX(0deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }

        @keyframes cardStackSlideRight {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotateZ(-20deg) scale(0.85);
          }
          50% {
            transform: translateX(15px) rotateZ(0deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateZ(0deg) scale(1);
          }
        }

        @keyframes cardStackPopIn {
          0% {
            opacity: 0;
            transform: scale(0.5) translateZ(0);
          }
          60% {
            transform: scale(1.12);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-in-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slideDown 1s ease-in-out forwards;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slideRight 1.1s ease-in-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 3s ease-in-out infinite;
        }

        .animate-bounce-right {
          animation: bounce-right 0.8s ease-in-out infinite;
        }

        .animate-scroll-glow {
          animation: scroll-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s ease-in-out infinite;
        }

        .animate-assembly-badge {
          animation: assemblyBadge 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-assembly-icon {
          animation: assemblyIcon 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-assembly-title {
          animation: assemblyTitle 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-assembly-divider {
          animation: assemblyDivider 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-assembly-description {
          animation: assemblyDescription 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-assembly-link {
          animation: assemblyLink 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-card-stack-drop {
          animation: cardStackDrop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          perspective: 1000px;
        }

        .hero-image-clip {
          mask-image: url('/images/hero/blobbb.png');
          -webkit-mask-image: url('/images/hero/blobbb.png');
          mask-size: cover;
          -webkit-mask-size: cover;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }

        .animate-card-stack-right {
          animation: cardStackSlideRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .animate-card-stack-pop {
          animation: cardStackPopIn 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
      `}</style>

    </section>
  )
}