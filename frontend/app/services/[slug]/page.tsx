import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Sparkles, Shield, Heart, Sun, Stethoscope, ScanLine, PenTool, Crown, MinusCircle, Smile, Droplets, ShieldCheck, Baby, CheckCircle,
  Clock, ChevronRight, Star, Phone, Calendar as CalendarIcon,
  Check, Award, Users, MapPin, ArrowRight, AlertTriangle, Scissors
} from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import Image from "next/image";

const services = [
  {
    name: "Dental Consultation",
    description: "Personalized, high-quality consultation tailored to your unique needs",
    longDescription: "At New Vision Dental Clinic, we believe that excellent oral health starts with personalized, high-quality consultation. Whether you need a routine cleaning, cavity treatment, or advanced care, our experienced team are here to provide comprehensive care tailored to your unique needs. As your trusted dental clinic, we are committed to helping you maintain a healthy, confident smile for life.",
    icon: Stethoscope,
    slug: "consultation",
    duration: "30 mins",
    price: "From GHS 100",
    image: "/images/services/consultation.jpg",
    features: [
      "Personalized Care — We take the time to understand your needs",
      "Modern Technology — State-of-the-art equipment",
      "Comprehensive Services — From cleanings to advanced care",
      "Trusted Expertise — Led by Dr Govina and his team"
    ],
    benefits: [
      "Early detection of dental issues",
      "Clear understanding of treatment options",
      "Personalized care plan",
      "Peace of mind about your oral health"
    ]
  },
  {
    name: "Dental X-Ray",
    description: "Diagnostic imaging to examine teeth, roots, jawbone, and surrounding structures",
    longDescription: "A dental X-ray is a diagnostic imaging procedure that allows dentists to examine teeth, roots, jawbone, and surrounding structures that are not visible during a regular clinical oral examination. Our state-of-the-art Panoramic X-ray equipment (OPG) at our branches ensures precise diagnostics and effective treatments.",
    icon: ScanLine,
    slug: "dental-x-ray-periapical",
    duration: "15 mins",
    price: "From GHS 150",
    image: "/images/services/dental-x-ray.jpg",
    features: [
      "Digital OPG (Panoramic X-ray) technology",
      "Detects cavities and tooth decay early",
      "Identifies infections, abscesses, and bone loss",
      "Assists in implant and orthodontic planning"
    ],
    benefits: [
      "Early detection of dental issues",
      "Accurate diagnosis with minimal discomfort",
      "Safe — minimal radiation exposure",
      "Guides effective treatment planning"
    ]
  },
  {
    name: "Teeth Cleaning / Scaling & Polishing",
    description: "Professional cleaning to remove plaque, tartar, and surface stains",
    longDescription: "Professional teeth cleaning, also known as dental prophylaxis, is a preventive dental procedure designed to remove plaque, tartar (calculus), and surface stains that regular brushing and flossing cannot eliminate. This treatment helps maintain healthy teeth and gums while reducing the risk of cavities, gum disease, and bad breath. During the procedure, our dental professionals carefully examine your oral health before using specialized instruments to remove hardened deposits from the teeth and along the gum line. The teeth are then polished to remove stains and create a smooth surface that makes it more difficult for plaque to accumulate. Regular professional cleanings enhance the appearance of your smile and play a crucial role in maintaining long-term oral health.",
    icon: Sparkles,
    slug: "scaling-polishing",
    duration: "45 mins",
    price: "From GHS 300",
    image: "/images/services/teeth-cleaning-scaling-polishing.jpg",
    features: [
      "Prevents gum disease — removes bacteria before it causes damage",
      "Cavity protection — eliminates tartar your toothbrush can't reach",
      "Brighter appearance — polishes away coffee, tea, and food stains",
      "Fresh breath — removes bacteria and food debris thoroughly"
    ],
    benefits: [
      "Prevents gum disease and cavities",
      "Brighter, healthier smile",
      "Supports overall health — linked to heart disease and diabetes prevention",
      "Early detection of oral health issues"
    ]
  },
  {
    name: "Teeth Whitening",
    description: "Professional whitening for a brighter, more confident smile",
    longDescription: "At New Vision Dental Clinic, our professional teeth whitening procedures are tailored to your individual needs, delivering faster, safer, and more noticeable results than over-the-counter whitening products. The treatment is non-invasive, comfortable, and can significantly enhance your confidence by giving you a brighter, healthier-looking smile. Our European approved BlancOne whitening products protect your enamel while delivering stunning results with zero or negligible sensitivity.",
    icon: Sun,
    slug: "teeth-whitening",
    duration: "60 mins",
    price: "From GHS 500",
    image: "/images/services/teeth-whitening.jpg",
    features: [
      "Customized treatment plans tailored to you",
      "Safe and effective — European approved BlancOne products",
      "Zero or negligible sensitivity",
      "Noticeable results in as little as one session"
    ],
    benefits: [
      "Dramatic results — brighten teeth by several shades",
      "Long-lasting effects compared to over-the-counter options",
      "Safe for enamel with minimal sensitivity",
      "Boosts confidence in personal and professional settings"
    ]
  },
  {
    name: "Dental Implants",
    description: "Permanent solution for replacing missing teeth",
    longDescription: "Dental implants are a modern and long-lasting solution for replacing missing teeth. The procedure involves placing a small titanium metal screw-post into the jawbone, which acts as an artificial tooth root. Once healed, a custom-made crown is attached to restore the appearance, function, and strength of your natural tooth. The dental implant process is a step-by-step procedure that typically spans 3\u20139 months, though this can extend to a year if preparatory procedures are required. The timeline is largely dictated by your body's healing process and the quality of your jawbone. At New Vision Dental Clinic, we specialize in dental implants, the gold standard for replacing missing teeth.",
    icon: Shield,
    slug: "dental-implants",
    duration: "3-9 Months",
    price: "From GHS 2,500",
    image: "/images/services/dental-implants.jpg",
    features: [
      "Permanent solution for missing teeth",
      "Restores chewing and speaking ability",
      "Preserves jawbone structure and facial appearance",
      "Does not affect adjacent healthy teeth"
    ],
    benefits: [
      "Looks and functions like natural teeth",
      "Long-lasting with proper care",
      "Preserves jawbone health",
      "Restores confidence in your smile"
    ],
    richContent: {
      whatAreImplants: {
        title: "What Are Dental Implants?",
        definition: "Dental implants are a modern and long-lasting solution for replacing missing teeth. The procedure involves placing a small titanium metal screw-post into the jawbone, which acts as an artificial tooth root. Once healed, a custom-made crown is attached to restore the appearance, function, and strength of your natural tooth.",
        intro: "Dental implants help preserve jawbone health, improve chewing ability, enhance speech, and restore confidence in your smile. With proper care and regular dental check-ups, implants can provide a durable and natural-looking solution for many years. At New Vision Dental Clinic, we specialize in dental implants, whether you have one missing tooth, multiple missing teeth, or need full-mouth restoration."
      },
      keyBenefits: [
        "Permanent Solution: Dental implants can last a lifetime with proper care",
        "Natural Look and Feel: Implants look, feel, and function like natural teeth",
        "Bone Preservation: Helps prevent jawbone deterioration and preserves facial structure",
        "No Impact on Adjacent Teeth: Unlike bridges, implants stand alone and do not require shaping or shaving surrounding teeth",
        "Improved Confidence: Enjoy renewed self-esteem with a complete smile"
      ],
      procedure: [
        "Consultation & Assessment — We examine your teeth and create a treatment plan",
        "Implant Placement — The titanium post is gently placed into your jawbone",
        "Healing Period — Your jaw bonds with the implant over a few months (osseointegration)",
        "Crown Placement — A custom-made, natural-looking crown is attached"
      ],
      whyChooseUs: [
        "Specialized expertise in dental implantology",
        "Advanced technology for precise diagnostics and placement",
        "Durable, natural-looking, and long-lasting results",
        "Convenient locations in Kwabenya, North Legon and Ashaley Botwe",
        "Trusted by families all across Accra"
      ],
      faqs: [
        { q: "How long do dental implants last?", a: "With proper care, dental implants can last for 50 years, often a lifetime." },
        { q: "How long does the procedure take?", a: "The full process typically spans 3-9 months, but each visit is usually short and comfortable. The timeline depends on your body's healing process." },
        { q: "Can anyone get dental implants?", a: "Most adults with healthy gums and sufficient bone can get implants. We will assess you during your consultation to confirm suitability." },
        { q: "How much do dental implants cost in Accra?", a: "Costs vary depending on your needs. We provide clear pricing during your consultation." },
        { q: "Are dental implants painful?", a: "Most patients report little to no pain during the procedure. We use modern techniques and gentle care to make your experience comfortable. Any mild discomfort afterward is temporary and manageable." }
      ]
    }
  },
  {
    name: "Composite Restoration",
    description: "Tooth-colored fillings to repair decay, fractures, chips, and wear",
    longDescription: "Composite restoration is a cosmetic and restorative procedure that uses tooth-colored resin material to repair teeth affected by decay, fractures, chips, or wear. A tooth filling is a simple and effective treatment used to repair teeth damaged by cavities, minor fractures, or wear. During the procedure, the affected portion of the tooth is carefully removed and replaced with a durable filling material to restore its strength, function, and appearance. The procedure is quick, comfortable, and can often be completed in a single visit.",
    icon: PenTool,
    slug: "composite-restoration",
    duration: "1 visit",
    price: "From GHS 400",
    image: "/images/services/composite-restoration.jpg",
    features: [
      "Natural-looking tooth-colored resin",
      "Bonds directly to the tooth structure",
      "Minimal removal of healthy tooth tissue",
      "Completed in a single visit"
    ],
    benefits: [
      "Restores tooth function and strength",
      "Natural-looking appearance",
      "Prevents further decay",
      "Quick and convenient"
    ]
  },
  {
    name: "Root Canal Treatment",
    description: "Save infected teeth and eliminate pain",
    longDescription: "Root canal treatment is a procedure used to remove infected or damaged pulp from inside a tooth, clean and disinfect the root canals, and seal the tooth to prevent further infection. The pulp contains nerves and blood vessels that can become infected due to deep decay, trauma, or cracks. During the procedure, the infected tissue is removed, the tooth is cleaned and sealed, and a custom crown may be placed to restore strength and function.",
    icon: Heart,
    slug: "root-canal-treatment",
    duration: "1-2 visits",
    price: "From GHS 800",
    image: "/images/services/root-canal-treatment.jpg",
    features: [
      "Gentle, patient-centred care with modern techniques",
      "Advanced technology for precision and efficiency",
      "Preserves your natural tooth — avoids extraction",
      "Trusted expertise for high-quality care"
    ],
    benefits: [
      "Pain relief — eliminates discomfort from infection",
      "Prevents tooth loss — saves your natural tooth",
      "Long-term results — a treated tooth can last a lifetime",
      "Improved oral health — prevents infection from spreading"
    ]
  },
  {
    name: "Crown & Bridge",
    description: "Restore damaged or missing teeth with custom-made caps",
    longDescription: "Crowns are custom-made caps placed over damaged teeth to restore their shape, strength, and appearance. Bridges replace one or more missing teeth by anchoring artificial teeth to neighbouring teeth or implants.",
    icon: Crown,
    slug: "crown-bridge-recementation",
    duration: "1 visit",
    price: "From GHS 600",
    image: "/images/services/crown-and-bridge.jpg",
    features: [
      "Custom-made for your teeth",
      "Restores damaged or weakened teeth",
      "Replaces missing teeth effectively",
      "Provides long-lasting durability"
    ],
    benefits: [
      "Restores chewing and speaking ability",
      "Enhances smile aesthetics",
      "Prevents further damage",
      "Long-lasting solution"
    ]
  },
  {
    name: "Root Extraction",
    description: "Removal of retained tooth roots to prevent infection",
    longDescription: "Root extraction is the removal of a tooth root that remains in the jaw after a tooth has broken, decayed, or been partially lost. The procedure helps prevent infection and promotes proper healing.",
    icon: MinusCircle,
    slug: "tooth-extraction",
    duration: "30 mins",
    price: "From GHS 200",
    image: "/images/services/tooth-extraction.jpg",
    features: [
      "Removes infected or damaged root fragments",
      "Prevents pain and future complications",
      "Promotes healthy healing of surrounding tissues",
      "Protects neighbouring teeth and bone"
    ],
    benefits: [
      "Prevents infection spread",
      "Alleviates pain and discomfort",
      "Creates a healthy foundation for future restorations",
      "Expert aftercare support for quick healing"
    ]
  },
  {
    name: "Dental Veneers",
    description: "Thin, custom-made shells for a brighter, more attractive smile",
    longDescription: "Dental veneers are thin, custom-made shells bonded to the front surface of teeth to improve their appearance by correcting discolouration, chips, gaps, and minor alignment issues.",
    icon: Smile,
    slug: "dental-veneers",
    duration: "2 visits",
    price: "From GHS 1,500",
    image: "/images/services/dental-veneers.jpg",
    features: [
      "Corrects cosmetic imperfections",
      "Stain-resistant options available",
      "Provides a natural tooth appearance",
      "Long-lasting aesthetic results"
    ],
    benefits: [
      "Creates a brighter, more attractive smile",
      "Long-lasting results",
      "Custom-made for a perfect fit",
      "Improves tooth shape and colour"
    ]
  },
  {
    name: "Fluoride Therapy",
    description: "Professional fluoride application to strengthen enamel",
    longDescription: "Fluoride therapy involves the professional application of concentrated fluoride to teeth to strengthen enamel, reduce sensitivity, and help prevent tooth decay.",
    icon: Droplets,
    slug: "fluoride-therapy-children",
    duration: "20 mins",
    price: "From GHS 150",
    image: "/images/services/fluoride-therapy.jpg",
    features: [
      "Strengthens tooth enamel",
      "Helps reverse early signs of decay",
      "Decreases tooth sensitivity",
      "Suitable for both children and adults"
    ],
    benefits: [
      "Reduces the risk of cavities",
      "Stronger, healthier teeth",
      "Quick and painless procedure",
      "Safe and effective"
    ]
  },
  {
    name: "Fissure Sealing",
    description: "Protective resin coating for molars to prevent decay",
    longDescription: "Fissure sealing is a preventive treatment in which a protective resin coating is applied to the grooves of molars and premolars to prevent food and bacteria from causing decay.",
    icon: ShieldCheck,
    slug: "fissure-sealing-children",
    duration: "20 mins",
    price: "From GHS 200",
    image: "/images/services/fissure-sealing.jpg",
    features: [
      "Protects vulnerable chewing surfaces",
      "Quick and painless procedure",
      "Long-term protection against decay",
      "Ideal for children and teenagers"
    ],
    benefits: [
      "Prevents cavities in molars",
      "Reduces future dental treatment needs",
      "Painless application",
      "Peace of mind for parents"
    ]
  },
  {
    name: "Emergency Dentistry",
    description: "Immediate care for dental emergencies — pain relief and urgent treatment",
    longDescription: "No one wants to have a dental emergency. But they can happen to any of us. Emergency dentistry focuses on treating dental problems that require immediate attention to relieve pain, prevent further damage, or address serious oral health concerns. Whether you are dealing with a severe toothache, a knocked-out tooth, or a broken restoration, our team is equipped to provide the care you need right away. Often, time is of the essence and the first several hours after the incident can determine the prognosis of the affected tooth. Our entire staff will treat your dental emergency the way we would want our own treated \u2014 promptly and with compassion.",
    icon: AlertTriangle,
    slug: "emergency-dentistry",
    duration: "Same-Day",
    price: "From GHS 200",
    image: "/images/services/emergency-dentistry.jpg",
    features: [
      "Same-Day Appointments — including Saturday and some Sunday slots",
      "Comprehensive Services — from pain relief to restorative solutions",
      "Compassionate Care — calming environment during stressful situations",
      "Trusted Expertise — advanced skills with modern technology"
    ],
    benefits: [
      "Fast, effective pain relief",
      "Saves teeth when time is critical",
      "Prevents further damage and complications",
      "Caring team that treats you like family"
    ]
  },
  {
    name: "Minor Oral Surgery",
    description: "Expert surgical services in a safe, comfortable environment",
    longDescription: "At New Vision Dental Clinic, we provide expert minor oral surgery services in a safe, modern, and comfortable environment. Whether you need a problematic tooth removed or treatment for an oral condition, our experienced dental professionals are committed to making your procedure as painless and stress-free as possible. Every procedure is performed using effective local anaesthesia, modern surgical techniques, and strict infection prevention protocols to ensure your safety and comfort. We also provide comprehensive aftercare instructions and follow-up support to promote quick healing. At New Vision Dental Clinic, we always strive to save your natural teeth whenever possible. However, when a tooth is severely decayed, damaged, infected, loose due to gum disease, or causing overcrowding, tooth extraction may be the best treatment option.",
    icon: Scissors,
    slug: "minor-oral-surgery",
    duration: "Varies",
    price: "From GHS 300",
    image: "/images/services/minor-oral-surgery.jpg",
    features: [
      "Tooth extractions (simple and surgical)",
      "Surgical extraction of wisdom teeth",
      "Removal of retained roots",
      "Treatment of dental abscesses and gum surgery"
    ],
    benefits: [
      "Safe procedure with local anaesthesia",
      "Strict infection prevention protocols",
      "Comprehensive aftercare instructions",
      "Compassionate care tailored to your needs"
    ]
  }
];

const faqData = [
  { q: "How often should I visit the dentist?", a: "We recommend visiting the dentist every six months for a routine check-up and professional cleaning. Regular visits help detect and prevent dental problems early." },
  { q: "What should I do if I have a toothache?", a: "A toothache may indicate decay, infection, or other dental issues. Contact our clinic as soon as possible for an examination and appropriate treatment." },
  { q: "Do you accept walk-in patients?", a: "Yes, we welcome walk-in patients. However, scheduling an appointment is recommended to minimize waiting time and ensure prompt service." },
  { q: "What services do you offer?", a: "We provide comprehensive dental care including: dental check-ups and cleanings, teeth whitening, fillings and restorations, root canal treatment, crowns and bridges, dental implants, orthodontics (braces), tooth extractions, and cosmetic dentistry." },
  { q: "Is teeth whitening safe?", a: "Yes. Professional teeth whitening performed by a qualified dental professional is safe and effective when carried out according to recommended guidelines." },
  { q: "How long does teeth whitening procedure take?", a: "Most in-office whitening treatments can be completed within 60\u201390 minutes, depending on the desired level of whitening." },
  { q: "What are dental implants?", a: "Dental implants are permanent replacements for missing teeth. They consist of a titanium post placed in the jawbone and a custom-made crown that looks and functions like a natural tooth." },
  { q: "Are dental procedures painful?", a: "We prioritize patient comfort and use modern techniques and anaesthesia to ensure treatments are as comfortable and pain-free as possible." },
  { q: "At what age should my child first visit the dentist?", a: "Children should have their first dental visit by their first birthday or within six months after their first tooth appears." },
  { q: "Do you offer braces and orthodontic treatment?", a: "Yes, we offer orthodontic consultations and treatment options, including braces, to help correct misaligned teeth and improve smiles." },
  { q: "What payment options do you accept?", a: "We accept cash, mobile money, major debit/credit cards, and selected insurance plans. Please contact us for specific insurance inquiries." },
  { q: "How can I book an appointment?", a: "You can schedule an appointment by calling our clinic, sending us a WhatsApp message, visiting our reception desk, or using our online booking system." },
  { q: "What should I do in a dental emergency?", a: "If you experience severe pain, swelling, trauma, or a knocked-out tooth, contact our clinic immediately for urgent dental care." },
  { q: "How can I maintain good oral health at home?", a: "Maintain a healthy smile by brushing twice daily with fluoride toothpaste, flossing daily, limiting sugary foods and drinks, drinking plenty of water, and visiting the dentist regularly." },
  { q: "Why choose New Vision Dental Clinic?", a: "At New Vision Dental Clinic, we combine advanced technology, experienced professionals, personalized care, and a comfortable environment to provide exceptional dental services for the whole family." }
];

function DentalImplantsRichContent({ service }: { service: any }) {
  const rich = service.richContent;
  
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <FadeIn>
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-xl">
            <Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 700px" className="object-cover" priority />
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-4">
              {rich.whatAreImplants.title}
            </h2>
            <p className="text-gray-600 mb-4">{rich.whatAreImplants.definition}</p>
            <p className="text-gray-600">{rich.whatAreImplants.intro}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {rich.keyBenefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00C8E8]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#00C8E8]" />
                  </div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-6">What to Expect During the Procedure</h2>
            <p className="text-gray-600 mb-4">The dental implant process is done in stages to ensure the best results:</p>
            <div className="space-y-3">
              {rich.procedure.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#1A4FAD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1A4FAD] font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              All your visits are made to be straightforward, and we guide you through every step so you always feel comfortable and informed.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-4">Are Dental Implants Painful?</h2>
            <div className="bg-gradient-to-r from-[#1A4FAD]/5 to-[#00C8E8]/5 rounded-2xl p-6 border border-[#1A4FAD]/10">
              <p className="text-[#1A4FAD] text-lg font-bold mb-2">
                Most patients report little to no pain during the procedure.
              </p>
              <p className="text-gray-600">
                We use modern techniques, gentle care, and offer sedation options to make your experience as comfortable and stress-free as possible. After the procedure, any mild discomfort is temporary and manageable.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-6">Before & After Results</h2>
            <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-xl shadow-black/5">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex-1 text-center">
                  <div className="w-full h-48 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 border border-gray-100">
                    <span className="text-gray-400">Before Image</span>
                  </div>
                  <p className="text-sm font-bold text-[#1A4FAD]">Before Treatment</p>
                </div>
                <ArrowRight className="w-8 h-8 text-[#00C8E8] hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-full h-48 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 border border-gray-100">
                    <span className="text-gray-400">After Image</span>
                  </div>
                  <p className="text-sm font-bold text-[#00C8E8]">After Treatment</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-6 italic">
                Real patient transformations — results may vary. Contact us to see more before & after photos.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-6">What Our Patients Say</h2>
            <div className="bg-white rounded-3xl p-8 border border-[#E8B830]/20 shadow-xl shadow-[#E8B830]/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8B830]/5 rounded-full -mr-12 -mt-12" />
              <div className="flex mb-4 gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-[#E8B830] fill-[#E8B830]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                &quot;I replaced my missing tooth with an implant and the result was amazing. It feels completely natural. The team made me feel so comfortable throughout the process.&quot;
              </p>
              <p className="text-[#1A4FAD] font-bold flex items-center gap-2">
                <span className="w-8 h-px bg-[#1A4FAD]/20" />
                Sarah K., Ashaley Botwe
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {rich.faqs.map((faq: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00C8E8]/30 transition-colors">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C8E8]" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-1">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-8 sticky top-24 border border-gray-100 shadow-xl shadow-black/5 mb-6">
            <h3 className="text-xl font-bold text-[#1A4FAD] mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-[#1A4FAD] to-[#00C8E8] rounded-full" />
              Service Details
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Duration</span>
                <span className="font-bold text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00C8E8]" />
                  {service.duration}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Locations</span>
                <span className="font-bold text-gray-800 text-right text-xs">Accra Hubs</span>
              </div>
            </div>
            <Link href="/book" className="w-full btn-golden-shine text-[#1a0a10] px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 mb-4 shadow-xl shadow-[#E8B830]/20">
              <CalendarIcon className="w-5 h-5" />
              Book Consultation
            </Link>
            <a href="tel:+233257091176" className="w-full border-2 border-[#1A4FAD]/20 text-[#1A4FAD] px-6 py-4 rounded-2xl font-bold hover:bg-[#1A4FAD] hover:text-white hover:border-[#1A4FAD] transition-all flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Direct Inquiry
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#1A4FAD] to-[#0D2A60] rounded-3xl p-8 text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00C8E8]/10 rounded-full blur-3xl" />
            <h3 className="text-xl font-bold mb-6">The New Vision Edge</h3>
            <ul className="space-y-4">
              {rich.whyChooseUs.map((reason: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00C8E8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#00C8E8]" />
                  </div>
                  <span className="text-sm text-white/80">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-[#00C8E8]" />
                <span className="text-sm font-medium">Trusted by 5,000+ patients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-[#E8B830] fill-[#E8B830]" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#00C8E8]">4.9 Rating</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function StandardServiceTemplate({ service }: { service: any }) {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <FadeIn>
          <div className="relative h-80 md:h-96 w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl group">
            <Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 700px" className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
               <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <service.icon className="w-6 h-6 text-white" />
               </div>
               <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Premium Service</p>
                  <p className="text-white text-xl font-bold">{service.name}</p>
               </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="relative p-8 md:p-12 bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-gray-100 overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C8E8]/5 rounded-full -mr-16 -mt-16" />
               <h2 className="text-2xl font-bold text-[#1A4FAD] mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#00C8E8] rounded-full" />
                  Clinical Overview
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed">{service.longDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5">
                <h2 className="text-xl font-bold text-[#1A4FAD] mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#00C8E8]/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#00C8E8]" />
                   </div>
                   Key Features
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#1A4FAD] to-[#0D2A60] p-8 rounded-[2rem] shadow-2xl text-white">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#E8B830]" />
                   </div>
                   Patient Benefits
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#00C8E8]" />
                      </div>
                      <span className="text-white/80 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-1">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-[2rem] p-8 sticky top-24 border border-gray-100 shadow-2xl shadow-black/5">
            <h3 className="text-xl font-bold text-[#1A4FAD] mb-8">Reservation Details</h3>
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Est. Duration</span>
                <span className="font-bold text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00C8E8]" />
                  {service.duration}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Clinic Access</span>
                <span className="font-bold text-[#1A4FAD] text-sm">3 Locations</span>
              </div>
            </div>
            
            <Link href="/book" className="w-full btn-golden-shine text-[#1a0a10] px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 mb-4 shadow-xl shadow-[#E8B830]/20">
              <CalendarIcon className="w-5 h-5" />
              Secure My Slot
            </Link>
            
            <Link href="/contact" className="w-full border-2 border-gray-100 text-gray-600 px-6 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5" />
              Our Centers
            </Link>

            <div className="mt-8 pt-6 border-t border-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-[#00C8E8]" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">500+ Trusted Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#E8B830] fill-[#E8B830]" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-800">4.9 Overall</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | New Vision Dental Clinic`,
      description: service.description,
    },
    alternates: {
      canonical: `https://newvisiondental.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "DentalClinic",
      "name": "New Vision Dental Clinic",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newvisiondental.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://newvisiondental.com/services" },
      { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://newvisiondental.com/services/${slug}` }
    ]
  };

  const hasRichContent = slug === "dental-implants";
  const showFaq = !hasRichContent;

  const faqSchema = hasRichContent && service.richContent?.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.richContent.faqs.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } : {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-[#F2F4F8] pt-[72px] md:pt-20 overflow-x-hidden">
        <section className="w-full bg-gradient-to-r from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8] py-8 md:py-24 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8B830]/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #E8B830 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center border border-white/20 shadow-2xl">
                  <service.icon className="w-10 h-10 md:w-16 md:h-16 text-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8B830]/20 rounded-full border border-[#E8B830]/30 mb-4">
                     <Sparkles className="w-4 h-4 text-[#E8B830]" />
                     <span className="text-[#E8B830] text-xs font-bold uppercase tracking-widest">Premium Dental Care</span>
                  </div>
                  <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {service.name}
                  </h1>
                  <p className="text-lg md:text-2xl text-white/70 mt-4 max-w-3xl font-medium">{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
                <Link href="/book" className="btn-golden-shine text-[#1a0a10] px-10 py-5 rounded-full font-bold shadow-2xl shadow-[#E8B830]/30 hover:scale-105 transition-all flex items-center gap-3 text-lg">
                  <CalendarIcon className="w-6 h-6" />
                  Reserve Your Visit
                </Link>
                <a href="tel:+233257091176" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-[#1A4FAD] transition-all flex items-center gap-3 text-lg">
                  <Phone className="w-6 h-6" />
                  Call Clinic
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-20 relative">
          {/* Subtle Side Accent */}
          <div className="absolute left-0 top-1/4 w-1 h-64 bg-gradient-to-b from-transparent via-[#00C8E8] to-transparent opacity-20" />
          
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            {hasRichContent && service.richContent ? (
              <DentalImplantsRichContent service={service} />
            ) : (
              <StandardServiceTemplate service={service} />
            )}
          </div>
        </section>

        {/* FAQ Section */}
        {showFaq && (
          <section className="w-full bg-white py-24 border-t border-gray-100">
            <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
              <FadeIn>
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A4FAD]/5 rounded-full border border-[#1A4FAD]/10 mb-4">
                      <span className="text-[#1A4FAD] text-xs font-bold uppercase tracking-widest">Got Questions?</span>
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A4FAD]">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00C8E8]/30 transition-colors">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8B830]" />
                          {faq.q}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Other Services - Bento Style */}
        <section className="w-full bg-white py-24 border-t border-gray-100">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                 <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A4FAD] mb-4">Discover More Care</h2>
                    <p className="text-lg text-gray-500 max-w-xl">
                      Excellence across all dental disciplines. Explore our other specialized treatments.
                    </p>
                 </div>
                 <Link href="/services" className="group flex items-center gap-2 text-[#00C8E8] font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                    View All Services <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.filter(s => s.slug !== slug).slice(0, 3).map((related, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Link href={`/services/${related.slug}`}>
                    <div className="bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-2xl hover:shadow-[#1A4FAD]/10 transition-all duration-500 border border-transparent hover:border-[#1A4FAD]/10 group h-full flex flex-col">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <related.icon className="w-7 h-7 text-[#1A4FAD]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A4FAD] mb-4">{related.name}</h3>
                      <p className="text-gray-500 mb-8 flex-1 leading-relaxed">{related.description}</p>
                      <div className="flex items-center gap-2 text-[#00C8E8] font-bold text-sm">
                        LEARN MORE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Premium Banner */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #E8B830 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 text-center relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Your New Smile <br /> Starts Here.
              </h2>
              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-medium">
                Book your consultation today and experience world-class dentistry in the heart of Accra.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/book" className="btn-golden-shine text-[#1a0a10] px-12 py-6 rounded-full font-bold text-xl shadow-2xl shadow-black/20 hover:scale-105 transition-all">
                  Book Appointment Now
                </Link>
                <div className="flex items-center gap-4 text-white/60">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-sm">
                            <Users className="w-5 h-5" />
                         </div>
                      ))}
                   </div>
                   <span className="text-sm font-bold uppercase tracking-widest">Join 5K+ Happy Patients</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
