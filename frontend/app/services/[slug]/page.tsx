import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Sparkles, Shield, Heart, Sun, Stethoscope, ScanLine, PenTool, Crown, MinusCircle, Smile, Droplets, ShieldCheck, Baby, CheckCircle,
  Clock, ChevronRight, Star, Phone, Calendar as CalendarIcon,
  Check, Award, Users, MapPin, ArrowRight
} from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import Image from "next/image";

const services = [
  {
    name: "Consultation",
    description: "Comprehensive consultation to examine your mouth, teeth, and gums",
    longDescription: "At our dental clinics, we understand the importance of a comprehensive consultation when it comes to your oral health. During your consultation, one of our experienced dentists will take the time to listen to your concerns and conduct a thorough examination of your mouth, teeth, and gums. We will discuss any issues we find and explain the various treatment options available to you.",
    icon: Stethoscope,
    slug: "consultation",
    duration: "30 mins",
    price: "From GHS 100",
    image: "/images/services/consultation.jpg",
    features: [
      "Thorough oral examination",
      "Personalized treatment discussion",
      "Expert dental advice",
      "Comfortable, welcoming environment"
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
    description: "Digital X-ray imaging to detect decay, infections, and dental issues",
    longDescription: "We use comprehensive imagery of your entire tooth, from the crown to the root tip to help detect decay, gum disease, infections, and dental issues. We use state-of-the-art digital X-ray technology, which produces high-quality images with minimal radiation exposure.",
    icon: ScanLine,
    slug: "dental-x-ray-periapical",
    duration: "15 mins",
    price: "From GHS 150",
    image: "/images/services/dental-xray.jpg",
    features: [
      "Digital X-ray technology",
      "Minimal radiation exposure",
      "High-quality imaging",
      "Comprehensive tooth analysis"
    ],
    benefits: [
      "Early problem detection",
      "Accurate diagnosis",
      "Safe and painless procedure",
      "Guides effective treatment planning"
    ]
  },
  {
    name: "Scaling & Polishing",
    description: "Professional cleaning to remove buildup and prevent gum disease",
    longDescription: "This highly effective procedure is designed to remove harmful buildup from your teeth, leaving them feeling smooth, clean, and healthy. Regular scaling and polishing is an essential part of preventive dental care, as it helps to reduce your risk of developing tooth decay and gum disease.",
    icon: Sparkles,
    slug: "scaling-polishing",
    duration: "45 mins",
    price: "From GHS 300",
    image: "/images/services/dental-cleaning.jpg",
    features: [
      "Removes plaque and tartar",
      "Prevents gum disease",
      "Freshens breath",
      "Polishes teeth"
    ],
    benefits: [
      "Prevents cavities",
      "Early problem detection",
      "Brighter, healthier smile",
      "Reduces risk of gum disease"
    ]
  },
  {
    name: "Teeth Whitening",
    description: "Professional whitening for a brighter, more confident smile",
    longDescription: "Our professional and highly effective teeth whitening service can help you achieve a beautiful, radiant smile. Teeth whitening is a safe and effective way to remove stains and discoloration from your teeth, caused by factors such as aging, smoking, and drinking coffee, tea, or red blue. Our dental professionals use a specialized whitening gel that is activated with a special light to break down stains and leave your teeth looking brighter and whiter.",
    icon: Sun,
    slug: "teeth-whitening",
    duration: "60 mins",
    price: "From GHS 500",
    image: "/images/services/teeth-whitening.jpg",
    features: [
      "Professional grade whitening",
      "Safe and painless procedure",
      "Results in just one session",
      "Long-lasting effects"
    ],
    benefits: [
      "Brighter, more confident smile",
      "Removes years of stains",
      "Quick procedure",
      "Safe and effective"
    ]
  },
  {
    name: "Dental Implants",
    description: "Permanent titanium implants to replace missing teeth",
    longDescription: "Replace missing teeth with durable, natural-looking dental implants. Permanent solution that lasts a lifetime.",
    icon: Shield,
    slug: "dental-implants",
    duration: "2-3 visits",
    price: "From GHS 2,500",
    image: "/images/services/dental-implants.jpg",
    features: [
      "Natural look and feel",
      "Permanent solution",
      "Prevents bone loss",
      "High success rate",
      "No damage to adjacent teeth"
    ],
    benefits: [
      "Restores full chewing function",
      "Preserves facial structure",
      "Long-lasting solution",
      "Improves speech"
    ],
    richContent: {
      whatAreImplants: {
        title: "What Are Dental Implants?",
        definition: "Dental implants are a long lasting solution for replacing missing teeth. They are small, strong titanium posts placed in your jaw to act like natural tooth roots, supporting a crown that looks and feels just like a real tooth. They also prevent bone loss, enhance chewing capability, and improve speech.",
        intro: "If you have lost one or more teeth, dental implants are the best option for tooth replacement. At New Vision Dental Clinic, we provide high-quality dental implants in Kwabenya, Ashaley Botwe & North Legon, helping patients across Accra restore both function and confidence. Since dental implants are made to mimic natural teeth, this procedure allows you to enjoy new, functional teeth without interfering with your existing teeth."
      },
      keyBenefits: [
        "Permanent Solution: Dental implants can last a lifetime with proper care",
        "Natural Look and Feel: Implants look, feel, and function like natural teeth",
        "Bone Preservation: Helps prevent jawbone deterioration",
        "No Impact on Adjacent Teeth: Unlike bridges, implants stand alone and do not require shaping or shaving surrounding teeth",
        "Improved Confidence: Enjoy renewed self-esteem and never worry about your teeth",
        "Convenience: No more embarrassment or inconvenience of removing dentures"
      ],
      procedure: [
        "Consultation & Assessment - We examine your teeth and create a treatment plan",
        "Implant Placement - The implant is gently placed into your jaw",
        "Healing Period - Your jaw bonds with the implant over a few months",
        "Crown Placement - A natural-looking tooth is attached"
      ],
      whyChooseUs: [
        "Experienced and caring dental professionals",
        "Modern equipment and advanced techniques",
        "Comfortable, patient-focused environment",
        "Convenient locations in Kwabenya, North Legon and Ashaley Botwe",
        "Trusted by families all across Accra"
      ],
      faqs: [
        { q: "How long do dental implants last?", a: "With proper care, dental implants can last for 50 years, often a lifetime." },
        { q: "How long does the procedure take?", a: "The full process takes a few months, but each visit is usually short and comfortable." },
        { q: "Can anyone get dental implants?", a: "Most adults with healthy gums and sufficient bone can get implants. We will assess you to make sure you are fit for implants during your consultation." },
        { q: "How much do dental implants cost in Accra?", a: "Costs vary depending on your needs. We provide clear pricing during your consultation." },
        { q: "Are dental implants painful?", a: "Most patients report little to no pain during the procedure. We use modern techniques, gentle care, and offer sedation options to make your experience as comfortable and stress-free as possible. After the procedure, any mild discomfort is temporary and manageable." }
      ]
    }
  },
  {
    name: "Composite Restoration",
    description: "Repair damaged, decayed, or chipped teeth in one visit",
    longDescription: "This procedure is designed to repair damaged, decayed, or chipped teeth, and restore them to their natural shape, function, and appearance. One of the major benefits of composite restoration is that it can be completed in just one visit, making it a convenient and time-saving option. It is also a relatively painless procedure, and can be performed with minimal or no anesthesia.",
    icon: PenTool,
    slug: "composite-restoration",
    duration: "1 visit",
    price: "From GHS 400",
    image: "/images/services/composite-restoration.jpg",
    features: [
      "Completed in one visit",
      "Painless procedure",
      "Natural-looking results",
      "Minimal anesthesia needed"
    ],
    benefits: [
      "Restores natural tooth shape",
      "Improves appearance",
      "Prevents further decay",
      "Quick and convenient"
    ]
  },
  {
    name: "Root Canal Treatment",
    description: "Painless treatment to save infected teeth and eliminate pain",
    longDescription: "Save your natural teeth from infection with our expert root canal therapy. Root Canal Treatment treats infections or damage to the pulp of your tooth to get rid of tooth pain, prevent the spread of infection, and save your natural teeth. Our specialists use advanced rotary instruments and digital imaging for thorough, efficient treatment.",
    icon: Heart,
    slug: "root-canal-treatment",
    duration: "1-2 visits",
    price: "From GHS 800",
    image: "/images/services/root-canal.jpg",
    features: [
      "Pain-free procedure",
      "Saves natural teeth",
      "Modern technology",
      "Quick recovery"
    ],
    benefits: [
      "Eliminates tooth pain",
      "Prevents spread of infection",
      "Maintains natural smile",
      "Long-lasting results"
    ]
  },
  {
    name: "Crown & Bridge",
    description: "Restore loose or dislodged crowns and bridges to full function",
    longDescription: "At our Dental Clinics, we offer crown and bridge recementation services to restore your loose or dislodged Crown or Bridge to its original function and appearance. Our experienced dental professionals will carefully clean and prepare the affected area, and then reattach the crown or bridge using dental cement with the latest techniques and technologies.",
    icon: Crown,
    slug: "crown-bridge-recementation",
    duration: "1 visit",
    price: "From GHS 600",
    image: "/images/services/crown-bridge.jpg",
    features: [
      "Secure recementation",
      "Restores full function",
      "Uses latest techniques",
      "Protects surrounding teeth"
    ],
    benefits: [
      "Restores chewing ability",
      "Improves appearance",
      "Prevents further damage",
      "Cost-effective solution"
    ]
  },
  {
    name: "Tooth Extraction",
    description: "Safe, comfortable tooth extraction to preserve your oral health",
    longDescription: "We offer tooth extraction services to help alleviate pain and discomfort, prevent infection, and preserve the health and function of your surrounding teeth and gums. Our experienced dental professionals will carefully assess your individual needs and use local anesthesia to ensure you are comfortable throughout the procedure.",
    icon: MinusCircle,
    slug: "tooth-extraction",
    duration: "30 mins",
    price: "From GHS 200",
    image: "/images/services/tooth-extraction.jpg",
    features: [
      "Local anesthesia for comfort",
      "Gentle, precise removal",
      "Minimizes trauma",
      "Quick recovery"
    ],
    benefits: [
      "Alleviates pain and discomfort",
      "Prevents infection spread",
      "Preserves surrounding teeth",
      "Expert aftercare support"
    ]
  },
  {
    name: "Dental Veneers",
    description: "Composite and ceramic veneers for a beautiful, natural smile",
    longDescription: "Our Composite and Ceramic dental veneers services help improve the appearance of your teeth and create a beautiful, natural-looking smile. Dental veneers are thin, custom-made shells or composite resins that cover the front surface of your teeth. They can be used to correct chips, cracks, gaps, and discoloration.",
    icon: Smile,
    slug: "dental-veneers",
    duration: "2 visits",
    price: "From GHS 1,500",
    image: "/images/services/dental-veneers.jpg",
    features: [
      "Composite and ceramic options",
      "Custom-made for you",
      "Natural-looking results",
      "Corrects multiple issues"
    ],
    benefits: [
      "Beautiful, confident smile",
      "Long-lasting results",
      "Stain resistant",
      "Improves tooth shape and color"
    ]
  },
  {
    name: "Fluoride Therapy",
    description: "Strengthen your child's teeth and prevent tooth decay",
    longDescription: "Fluoride therapy prevents tooth decay and strengthens your child's teeth to promote optimal oral health. During a fluoride treatment, our experienced dental professionals will apply a fluoride gel or varnish to your child's teeth. This helps to remineralize the tooth enamel and strengthen the teeth from the inside out.",
    icon: Droplets,
    slug: "fluoride-therapy-children",
    duration: "20 mins",
    price: "From GHS 150",
    image: "/images/services/children-dentistry.jpg",
    features: [
      "Child-friendly procedure",
      "Strengthens tooth enamel",
      "Prevents cavities",
      "Quick and painless"
    ],
    benefits: [
      "Stronger teeth for your child",
      "Reduced risk of decay",
      "Promotes oral health habits",
      "Safe and effective"
    ]
  },
  {
    name: "Fissure Sealing",
    description: "Protective coating for your child's molars to prevent decay",
    longDescription: "Dental fissure sealing is a preventive dental treatment that can help protect your child's teeth from tooth decay. It involves applying a thin, protective coating to the deep grooves and pits of your child's molars and premolars, which are the teeth at the back of the mouth that are most prone to decay.",
    icon: ShieldCheck,
    slug: "fissure-sealing-children",
    duration: "20 mins",
    price: "From GHS 200",
    image: "/images/services/children-dentistry.jpg",
    features: [
      "Protective coating application",
      "Targets decay-prone areas",
      "Painless procedure",
      "Long-lasting protection"
    ],
    benefits: [
      "Prevents tooth decay",
      "Keeps teeth strong and healthy",
      "Reduces future dental costs",
      "Peace of mind for parents"
    ]
  }
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

  const hasRichContent = slug === "dental-implants";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
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
