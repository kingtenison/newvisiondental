"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronDown, Search, Sparkles, CheckCircle2, HelpCircle, 
  Phone, Calendar, ShieldCheck, CreditCard, Stethoscope, 
  AlertTriangle, MapPin, ArrowRight 
} from "lucide-react";
import { BOOKING_URL } from "@/app/lib/constants/booking";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  shortAnswer: string;
  answer: string;
}

const CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "pricing", label: "Pricing & Insurance", icon: CreditCard },
  { id: "whitening", label: "Whitening & Cosmetic", icon: Sparkles },
  { id: "implants", label: "Implants & Surgery", icon: Stethoscope },
  { id: "locations", label: "Locations & Booking", icon: MapPin },
  { id: "emergency", label: "Emergency Care", icon: AlertTriangle },
];

const faqs: FAQItem[] = [
  {
    id: "booking-process",
    category: "locations",
    question: "How do I book an appointment at New Vision Dental Clinic?",
    shortAnswer: "You can book online 24/7 through our booking portal, via WhatsApp, or by calling our branches directly.",
    answer: "Booking is fast and easy. You can use our real-time online appointment portal at newvisiondentalclinic.com/book to select your preferred branch (North Legon, Ashaley Botwe, or ACP Estate Kwabenya), choose your dentist, and select an available time slot. Alternatively, you can message us directly on WhatsApp or call us at 0257091176 or 0559497906."
  },
  {
    id: "first-visit",
    category: "locations",
    question: "What should I expect during my first dental visit?",
    shortAnswer: "A full oral examination, digital diagnostics if needed, discussion of your goals, and a transparent treatment plan.",
    answer: "Your initial visit starts with a warm welcome and brief medical history review. One of our senior dental surgeons will perform a thorough clinical evaluation of your teeth, gums, jaw, and oral tissues. If necessary, low-radiation digital dental X-rays (periapical or panoramic OPG) are taken to inspect roots and underlying bone. We then discuss all findings with you and present a clear, itemized treatment plan with upfront pricing before any work begins."
  },
  {
    id: "operating-hours",
    category: "locations",
    question: "What are your opening hours across Accra?",
    shortAnswer: "All three clinics are open Monday through Saturday from 8:30 AM to 5:00 PM (closed Sundays).",
    answer: "All three of our branches — North Legon on Agbogba Road, Ashaley Botwe at School Junction, and ACP Estate at Kwabenya Junction — operate from 8:30 AM to 5:00 PM, Monday through Saturday. Sunday visits are reserved for emergency triage and pre-scheduled advanced cases."
  },
  {
    id: "walk-in-policy",
    category: "locations",
    question: "Can I walk in without a prior appointment?",
    shortAnswer: "Yes! Walk-ins are welcomed, though scheduled appointments receive priority seating.",
    answer: "Yes, we welcome walk-in patients at all three locations! However, to minimize your wait time, we recommend booking an appointment online or calling ahead so our team can prepare your treatment operatory in advance. Emergency walk-in patients in acute pain are always triaged promptly."
  },
  {
    id: "consultation-fee",
    category: "pricing",
    question: "How much does a dental consultation cost?",
    shortAnswer: "Comprehensive consultations start from GHS 100, including full examination and treatment planning.",
    answer: "A standard comprehensive dental consultation starts from GHS 100. This includes an in-depth oral clinical examination, periodontal gum assessment, oral cancer screening, and consultation on treatment options. Diagnostic X-rays, if required, start from GHS 150."
  },
  {
    id: "insurance-acceptance",
    category: "pricing",
    question: "Which health insurance providers do you accept for direct billing?",
    shortAnswer: "We accept 10 major insurance providers including Acacia, Nationwide, Glico, Metropolitan, Cosmopolitan, Equity, ACE, GAB, OctaPlus, and Orange Health.",
    answer: "We offer direct, cashless billing with leading private health insurance providers in Ghana:\n• Acacia Health Insurance\n• Nationwide Mutual Healthcare\n• Glico Healthcare\n• Metropolitan Health Insurance\n• Cosmopolitan Health Insurance\n• Equity Health Insurance\n• ACE Medical Insurance\n• GAB Health Insurance (GHIC)\n• Nexus / OctaPlus Health\n• Orange Health Insurance\nOur billing team verifies your coverage and handles pre-authorizations on your behalf."
  },
  {
    id: "payment-methods",
    category: "pricing",
    question: "What payment methods are accepted at the clinic?",
    shortAnswer: "We accept Cash, Visa, Mastercard, Mobile Money (MTN MoMo, Telecel Cash), and Direct Insurance Billing.",
    answer: "For your utmost convenience, we accept cash (Ghanaian Cedis), debit and credit cards (Visa, Mastercard), mobile money transfers (MTN Mobile Money and Telecel Cash), and direct cashless billing through approved corporate and private health insurance schemes."
  },
  {
    id: "hidden-fees",
    category: "pricing",
    question: "Are there any hidden costs in treatment plans?",
    shortAnswer: "No. We practice 100% transparent pricing with detailed, written estimates provided before treatment.",
    answer: "At New Vision Dental Clinic, we pride ourselves on absolute transparency. After your initial diagnostic consultation, you receive an itemized treatment proposal outlining every cost — from anesthesia and materials to follow-up visits. We never start any procedure without your explicit informed consent."
  },
  {
    id: "blancone-whitening",
    category: "whitening",
    question: "What makes BlancOne® teeth whitening different from standard whitening?",
    shortAnswer: "BlancOne® uses European photo-activation to brighten teeth in 30 minutes with zero to negligible sensitivity.",
    answer: "Unlike traditional bleaching gels that use aggressive peroxides and heat that dehydrate enamel and cause sharp nerve pain, European-certified BlancOne® uses photo-chemical energy to release active oxygen in minutes. This effectively breaks down deep food, coffee, wine, and tobacco stains without heating the tooth or demineralizing enamel, resulting in dramatic whitening with virtually zero sensitivity."
  },
  {
    id: "whitening-results",
    category: "whitening",
    question: "How many shades whiter will my teeth get and how long do results last?",
    shortAnswer: "Teeth typically brighten by 4 to 8 shades, with results lasting 1 to 2+ years depending on dietary habits.",
    answer: "Most patients achieve a smile that is 4 to 8 shades brighter in a single 30–45 minute session. Results generally last between 12 to 24 months. Longevity depends on lifestyle habits such as coffee, tea, or red wine consumption and smoking. We also offer custom take-home maintenance trays and the Ultimate Whitening Package for sustained brilliance."
  },
  {
    id: "whitening-safety",
    category: "whitening",
    question: "Is professional teeth whitening safe for natural tooth enamel?",
    shortAnswer: "Yes. When administered by licensed dental professionals using certified products, it is 100% enamel-safe.",
    answer: "Yes, professional dental whitening is clinically proven to be completely safe when supervised by trained dental surgeons. Unlike unregulated over-the-counter abrasive charcoal powders or DIY kits that scratch and thin enamel, our BlancOne® system maintains physiological pH levels and protects the tooth structure."
  },
  {
    id: "veneers-comparison",
    category: "whitening",
    question: "What is the difference between composite and porcelain veneers?",
    shortAnswer: "Composite veneers are sculpted directly in a single visit, while porcelain veneers offer maximum stain resistance and durability.",
    answer: "Composite veneers are applied directly using tooth-colored resin in a single visit. They are cost-effective and easily repairable. Porcelain (ceramic/E.max) veneers are ultra-thin custom shells crafted in a dental laboratory. While porcelain requires two visits, it offers unmatched translucency, natural luster, and is completely impervious to staining, lasting 10–15+ years."
  },
  {
    id: "implants-longevity",
    category: "implants",
    question: "How long do dental implants last and what is the success rate?",
    shortAnswer: "Dental implants have a 98% clinical success rate and are designed to last a lifetime with proper hygiene.",
    answer: "Dental implants are the permanent gold standard for tooth replacement. A medical-grade titanium screw is surgically integrated into the jawbone, where it bonds permanently with natural bone (osseointegration). Over 98% of implants remain fully functional for decades, often lasting the patient's entire lifetime with regular flossing, brushing, and bi-annual dental checkups."
  },
  {
    id: "root-canal-pain",
    category: "implants",
    question: "Is root canal treatment painful?",
    shortAnswer: "No. Modern anesthesia ensures the procedure is virtually painless — it relieves the severe pain caused by infection.",
    answer: "Root canal therapy has an outdated reputation. In reality, the infection inside the tooth is what causes pain; the root canal procedure actually relieves that pain! Using advanced local anesthetics, rotary endodontic instruments, and gentle techniques, patients report that getting a root canal feels no more uncomfortable than receiving a routine tooth filling."
  },
  {
    id: "extraction-vs-saving",
    category: "implants",
    question: "When is tooth extraction necessary instead of a filling or crown?",
    shortAnswer: "Extractions are a last resort when a tooth is cracked below the bone, severely decayed, or structurally unsalvageable.",
    answer: "Our clinical philosophy is always 'tooth-first' — preserving your natural teeth whenever biologically feasible through fillings, root canals, or crowns. Tooth extraction is recommended only when the tooth is fractured below the gumline, has non-restorable bone loss, or is an impacted wisdom tooth causing recurrent pericoronitis, infection, or crowding."
  },
  {
    id: "wisdom-teeth-recovery",
    category: "implants",
    question: "How long does recovery take after wisdom tooth surgery?",
    shortAnswer: "Most patients return to school or work within 2 to 3 days, with complete tissue healing in 1 to 2 weeks.",
    answer: "Initial swelling and mild tenderness peak within 48 hours and subside quickly. Most patients resume work or studies within 2–3 days. We provide comprehensive postoperative instructions, sterile ice packs, prescribed pain management, and a complimentary review appointment to ensure smooth, complication-free healing."
  },
  {
    id: "clinic-locations",
    category: "locations",
    question: "Where are your 3 dental clinic locations in Accra?",
    shortAnswer: "North Legon (Agbogba Road), Ashaley Botwe (School Junction), and ACP Estate (Kwabenya Junction).",
    answer: "Our three state-of-the-art facilities are strategically situated for easy access:\n1. North Legon Flagship: Agbogba Road, North Legon. Phone: 0559497906. Equipped with panoramic digital OPG X-ray and dedicated private parking.\n2. Ashaley Botwe: School Junction, convenient for residents of Adenta, Madina, and East Legon Hills. Phone: 0257091176.\n3. ACP Estate: ACP Estate Junction in Kwabenya, serving Pokuase, Achimota, Dome, and Kwabenya. Phone: 0545563839."
  },
  {
    id: "emergency-same-day",
    category: "emergency",
    question: "Do you offer same-day emergency dental appointments in Accra?",
    shortAnswer: "Yes! We prioritize dental emergencies daily across North Legon, Ashaley Botwe, and ACP Estate.",
    answer: "Yes. If you have an unbearable toothache, a broken restoration, a knocked-out tooth, an acute abscess, or bleeding, please call our emergency lines right away at 0257091176 or 0559497906. We hold dedicated daily emergency slots so you never have to wait in pain."
  },
  {
    id: "knocked-out-tooth",
    category: "emergency",
    question: "What should I do immediately if a permanent tooth is knocked out?",
    shortAnswer: "Keep it moist in milk or saliva, do not scrub the root, and reach our clinic within 60 minutes for reimplantation.",
    answer: "A knocked-out permanent tooth is a true dental emergency where minutes count. Follow these steps:\n1. Pick up the tooth by the white crown ONLY — never touch the root.\n2. Gently rinse with milk or saline if dirty (do not scrub or use soap).\n3. If possible, gently place the tooth back into its socket and bite softly on clean gauze.\n4. If unable to reinsert, submerge the tooth in a cup of cold fresh milk or saliva.\n5. Call our emergency helpline immediately and arrive at our nearest clinic within 60 minutes for the highest chance of successful reimplantation."
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("consultation-fee");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query || 
        faq.question.toLowerCase().includes(query) ||
        faq.shortAnswer.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://newvisiondentalclinic.com/faq#faqpage",
        "url": "https://newvisiondentalclinic.com/faq",
        "name": "Frequently Asked Questions — New Vision Dental Clinic",
        "description": "Comprehensive answers regarding dental procedures, consultation pricing, health insurance coverage, and locations in Accra, Ghana.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newvisiondentalclinic.com" },
            { "@type": "ListItem", "position": 2, "name": "FAQs", "item": "https://newvisiondentalclinic.com/faq" }
          ]
        },
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer.replace(/\n/g, " ")
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F2F4F8] pt-[72px] md:pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#0A0A0A] text-white overflow-hidden">
          {/* Ambient orbs */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#00C8E8]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#E8B830]/15 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8B830]/20 border border-[#E8B830]/30 text-[#E8B830] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-4 h-4" /> Dental Knowledge Hub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Frequently Asked <span className="text-golden-shine">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Clear, transparent answers about our dental services, pricing, insurance partners, and clinic branches across Accra.
            </motion.p>

            {/* Live Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g., whitening, pricing, insurance, implants)..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#E8B830] focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-white/60 hover:text-white uppercase tracking-wider"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar justify-start lg:justify-center">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? "bg-[#1A4FAD] text-white shadow-lg shadow-[#1A4FAD]/25 scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#E8B830]" : "text-gray-500"}`} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 text-sm text-gray-600 px-2">
            <span>Showing <strong>{filteredFaqs.length}</strong> questions</span>
            {searchQuery && (
              <span className="text-[#1A4FAD]">Filtered by: "{searchQuery}"</span>
            )}
          </div>

          {/* Accordion FAQ List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">No matching questions found</h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                We couldn't find an answer matching your query. Our clinical team is ready to assist you directly.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-full text-sm"
                >
                  Reset Search
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-[#1A4FAD] text-white font-semibold rounded-full text-sm hover:bg-[#163E8A]"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4FAD]"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-gray-900 flex items-start gap-3.5">
                        <span className="w-7 h-7 rounded-full bg-[#1A4FAD]/10 text-[#1A4FAD] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#1A4FAD] transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-700 leading-relaxed space-y-3">
                            {/* Direct Answer callout */}
                            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-sm flex items-start gap-2.5 text-[#1A4FAD]">
                              <CheckCircle2 className="w-4 h-4 text-[#1A4FAD] shrink-0 mt-0.5" />
                              <span><strong>Direct Answer:</strong> {faq.shortAnswer}</span>
                            </div>

                            <p className="whitespace-pre-line text-sm sm:text-base text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick Help & Booking Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A4FAD] to-[#0D2A60] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[#E8B830] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-2">
                  <Calendar className="w-4 h-4" /> Seamless Booking
                </span>
                <h3 className="text-2xl font-bold mb-3">Ready to Schedule Your Visit?</h3>
                <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                  Book online with your choice of clinic location, dentist, and appointment time in under two minutes.
                </p>
                <Link
                  href={BOOKING_URL}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8B830] hover:bg-[#d4a420] text-black font-bold rounded-full transition-all text-sm shadow-lg shadow-[#E8B830]/30"
                >
                  <span>Book Appointment Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl relative overflow-hidden">
              <span className="text-[#1A4FAD] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-2">
                <Phone className="w-4 h-4" /> Talk to Us
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                Our front desk coordinators at North Legon, Ashaley Botwe, and ACP Estate are ready to answer any questions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+233257091176"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A4FAD] hover:bg-[#163E8A] text-white font-semibold rounded-full transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 025 709 1176</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-full transition-all text-sm"
                >
                  <span>Send a Message</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
