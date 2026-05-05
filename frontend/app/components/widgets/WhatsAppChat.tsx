"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, User, ArrowRight, Phone, Calendar, Clock, MapPin, ShieldCheck, Star } from "lucide-react"

interface Message {
  id: string
  text: string
  isAi: boolean
  timestamp: Date
  suggestions?: string[]
  component?: React.ReactNode
}

// Comprehensive Clinic Knowledge Base
const CLINIC_DATA = {
  doctors: [
    { name: "Dr. Tenison", role: "Specialist Dentist", specialty: "Cosmetic & Implants" },
    { name: "Dr. Appiah", role: "Associate Dentist", specialty: "General Dentistry" }
  ],
  locations: {
    "North Legon": "Agbogba Road, near North Legon Hospital",
    "Ashaley Botwe": "School Junction, opposite Melcom",
    "ACP Estate": "ACP Junction, Kwabenya"
  },
  hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  services: [
    "Consultation", "Dental X-Ray", "Scaling & Polishing", "Teeth Whitening", 
    "Dental Implants", "Root Canal", "Veneers", "Braces"
  ]
}

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      text: "Welcome to New Vision Dental. I am your Clinical Concierge. How may I assist you with your oral health journey today?",
      isAi: true,
      timestamp: new Date(),
      suggestions: ["Book an Appointment", "Our Services", "Emergency Help", "Clinic Locations"]
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const phoneNumber = "233545563839"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const getAdvancedResponse = (input: string): { text: string; suggestions?: string[]; component?: React.ReactNode } => {
    const q = input.toLowerCase()

    // 0. Greetings
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings") || q.includes("good morning") || q.includes("good afternoon")) {
      return {
        text: "Hello! It's a pleasure to meet you. I'm the New Vision Clinical Concierge. How can I help you achieve your perfect smile today?",
        suggestions: ["Book an Appointment", "View Services", "Check Locations"]
      }
    }

    // 1. Booking Intent
    if (q.includes("book") || q.includes("appointment") || q.includes("reserve") || q.includes("schedule")) {
      return {
        text: "I can certainly help you secure a priority slot. Which of our premium locations would you prefer?",
        suggestions: ["North Legon", "Ashaley Botwe", "ACP Estate", "Check All Hours"]
      }
    }

    // 2. Services Intent
    if (q.includes("service") || q.includes("treatment") || q.includes("do you do") || q.includes("offer")) {
      return {
        text: "We provide elite clinical care across several disciplines. Are you looking for Cosmetic work, General care, or Emergency treatment?",
        suggestions: ["Teeth Whitening", "Dental Implants", "Root Canal", "View All Services"]
      }
    }

    // 3. Price/Cost Intent
    if (q.includes("cost") || q.includes("price") || q.includes("how much") || q.includes("fee")) {
      return {
        text: "At New Vision, we believe in transparent, value-driven care. While exact costs require a consultation, our Scaling & Polishing starts from a competitive base. Would you like to chat with our billing specialist on WhatsApp for a breakdown?",
        suggestions: ["Chat with Billing", "Book Consultation"]
      }
    }

    // 4. Emergency Intent
    if (q.includes("emergency") || q.includes("pain") || q.includes("hurt") || q.includes("ache") || q.includes("broken")) {
      return {
        text: "I'm sorry you're experiencing discomfort. We prioritize emergency cases for same-day relief. Please call us immediately or tap the button below to reach our clinical team on WhatsApp.",
        suggestions: ["Call Now", "WhatsApp Emergency"]
      }
    }

    // 5. Locations Intent
    if (q.includes("location") || q.includes("where") || q.includes("find you") || q.includes("address")) {
      return {
        text: "We are strategically located across 3 main hubs in Accra for your convenience.",
        suggestions: ["North Legon Map", "Ashaley Botwe Map", "ACP Estate Map"]
      }
    }

    // 6. Doctor Intent
    if (q.includes("doctor") || q.includes("dentist") || q.includes("who")) {
      return {
        text: "Our team is led by board-certified specialists including Dr. Tenison and Dr. Appiah, with over 20 years of combined excellence.",
        suggestions: ["Meet the Team", "Book with Dr. Tenison"]
      }
    }

    // Default
    return {
      text: "I understand. To provide you with the most accurate clinical guidance, would you like to speak directly with our dental team via WhatsApp?",
      suggestions: ["Yes, talk to a Dentist", "View Services instead"]
    }
  }

  const handleSendMessage = (text?: string) => {
    const finalInput = text || inputValue
    if (!finalInput.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text: finalInput,
      isAi: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMsg])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI "Thinking" and "Analyzing"
    setTimeout(() => {
      const response = getAdvancedResponse(finalInput)
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isAi: true,
        timestamp: new Date(),
        suggestions: response.suggestions,
        component: response.component
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 1200)
  }

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion === "Call Now") {
      window.location.href = `tel:+233${phoneNumber}`
      return
    }
    if (suggestion.includes("WhatsApp") || suggestion.includes("talk to a Dentist") || suggestion.includes("Billing")) {
      openWhatsApp(suggestion)
      return
    }
    handleSendMessage(suggestion)
  }

  const openWhatsApp = (context?: string) => {
    const encodedMessage = encodeURIComponent(`Hi New Vision! I was just chatting with your Clinical Concierge about: "${context || 'general inquiry'}"`)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <>
      {/* Premium Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 lg:bottom-8 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8] text-white shadow-[0_0_40px_rgba(26,79,173,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", damping: 15 }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping group-hover:animate-none opacity-50" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X key="close" className="w-7 h-7 relative z-10" />
          ) : (
            <div className="relative flex items-center justify-center">
               <MessageCircle key="chat" className="w-7 h-7 relative z-10" />
               <motion.div 
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-3 -right-3 w-6 h-6 bg-[#E8B830] rounded-full border-2 border-white flex items-center justify-center"
               >
                 <Sparkles className="w-3.5 h-3.5 text-[#0A0A0A]" />
               </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Intelligent Clinical Concierge Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 40, scale: 0.9, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-44 lg:bottom-28 right-6 z-50 w-[92vw] sm:w-[420px] h-[600px] max-h-[70vh] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Elegant Header */}
            <div className="bg-gradient-to-r from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <div className="relative">
                     <div className="relative w-36 aspect-[3.59] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                       <Image
                         src="/images/NV-LOGO-GRADIANTS-OFFICIAL.png"
                         alt="NV"
                         fill
                         className="brightness-200 object-contain"
                       />
                     </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1A4FAD] rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg tracking-tight">Clinical Concierge</h3>
                    <p className="text-white/60 text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-[#00C8E8]" />
                      Verified AI Assistant
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>
              </div>

              {/* Status Bar */}
              <div className="flex items-center gap-4 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-1">
                   <Clock className="w-3 h-3" /> {CLINIC_DATA.hours}
                 </div>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.isAi ? "items-start" : "items-end"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.isAi ? "flex-row" : "flex-row-reverse"}`}>
                    {msg.isAi && (
                      <div className="w-8 h-8 rounded-lg bg-[#1A4FAD]/5 border border-[#1A4FAD]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-[#1A4FAD]" />
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <div className={`p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                        msg.isAi 
                          ? "bg-white text-gray-700 rounded-tl-none border border-gray-100" 
                          : "bg-[#1A4FAD] text-white rounded-tr-none shadow-[#1A4FAD]/20 shadow-lg"
                      }`}>
                        {msg.text}
                      </div>

                      {/* Suggestions Chips */}
                      {msg.isAi && msg.suggestions && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {msg.suggestions.map((suggestion, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-3 py-1.5 bg-white border border-gray-100 rounded-full text-[11px] font-bold text-[#1A4FAD] hover:bg-[#1A4FAD] hover:text-white hover:border-[#1A4FAD] transition-all duration-300 shadow-sm"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                    <div className="flex gap-1">
                       <span className="w-1 h-1 bg-[#1A4FAD] rounded-full animate-bounce" />
                       <span className="w-1 h-1 bg-[#1A4FAD] rounded-full animate-bounce [animation-delay:0.2s]" />
                       <span className="w-1 h-1 bg-[#1A4FAD] rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trusted Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
               <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                 <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[#E8B830] fill-[#E8B830]" /> 4.9 Rating</span>
                 <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> Secure Encryption</span>
               </div>
            </div>

            {/* Input Section */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="p-6 pt-2 bg-white flex items-center gap-3"
            >
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="How can we help today?"
                  className="w-full pl-4 pr-12 py-4 bg-gray-50 rounded-2xl text-sm font-medium border border-transparent focus:border-[#00C8E8] focus:bg-white transition-all outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#1A4FAD] text-white flex items-center justify-center hover:bg-[#0D2A60] transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import Image from "next/image"
