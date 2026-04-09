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
    longDescription: "Our professional and highly effective teeth whitening service can help you achieve a beautiful, radiant smile. Teeth whitening is a safe and effective way to remove stains and discoloration from your teeth, caused by factors such as aging, smoking, and drinking coffee, tea, or red wine. Our dental professionals use a specialized whitening gel that is activated with a special light to break down stains and leave your teeth looking brighter and whiter.",
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {rich.whatAreImplants.title}
            </h2>
            <p className="text-gray-600 mb-4">{rich.whatAreImplants.definition}</p>
            <p className="text-gray-600">{rich.whatAreImplants.intro}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {rich.keyBenefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">What to Expect During the Procedure</h2>
            <p className="text-gray-600 mb-4">The dental implant process is done in stages to ensure the best results:</p>
            <div className="space-y-3">
              {rich.procedure.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Are Dental Implants Painful?</h2>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 text-lg font-medium mb-2">
                Most patients report little to no pain during the procedure.
              </p>
              <p className="text-gray-600">
                We use modern techniques, gentle care, and offer sedation options to make your experience as comfortable and stress-free as possible. After the procedure, any mild discomfort is temporary and manageable.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Before & After Results</h2>
            <div className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex-1 text-center">
                  <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-gray-400">Before Image Placeholder</span>
                  </div>
                  <p className="text-sm text-gray-500">Before Treatment</p>
                </div>
                <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-gray-400">After Image Placeholder</span>
                  </div>
                  <p className="text-sm text-gray-500">After Treatment</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Real patient transformations — results may vary. Contact us to see more before & after photos.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">What Our Patients Say</h2>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                &quot;I replaced my missing tooth with an implant and the result was amazing. It feels completely natural. The team made me feel so comfortable throughout the process.&quot;
              </p>
              <p className="text-gray-500 font-medium">— Sarah K., Ashaley Botwe</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {rich.faqs.map((faq: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-1">
        <FadeIn delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-[#5C0F22]/20 mb-6">
            <h3 className="text-xl font-bold text-[#5C0F22] mb-4">Service Details</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold text-gray-800 flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-primary" />
                  {service.duration}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Locations</span>
                <span className="font-semibold text-gray-800">Kwabenya, Ashaley Botwe, North Legon</span>
              </div>
            </div>
            <Link href="/book" className="w-full bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all inline-flex items-center justify-center gap-2 mb-3">
              <CalendarIcon className="w-5 h-5" />
              Book Free Consultation
            </Link>
            <a href="tel:+233257091176" className="w-full border-2 border-primary text-primary px-6 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call for Inquiry
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-[#5C0F22]/20">
            <h3 className="text-xl font-bold text-[#5C0F22] mb-4">Why Choose New Vision Dental Clinic?</h3>
            <ul className="space-y-3">
              {rich.whyChooseUs.map((reason: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600">Trusted by 500+ patients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
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
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-xl">
            <Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 700px" className="object-cover" priority />
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h2>
            <p className="text-gray-600 mb-6">{service.longDescription}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What to Expect</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
      <div className="lg:col-span-1">
        <FadeIn delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-[#5C0F22]/20">
            <h3 className="text-xl font-bold text-[#5C0F22] mb-4">Service Details</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold text-gray-800 flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-primary" />
                  {service.duration}
                </span>
              </div>
            </div>
            <Link href="/book" className="w-full bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all inline-flex items-center justify-center gap-2 mb-3">
              <CalendarIcon className="w-5 h-5" />
              Book This Service
            </Link>
            <Link href="/contact" className="w-full border-2 border-primary text-primary px-6 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Find a Location
            </Link>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600">Trusted by 500+ patients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
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
      
      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
        <section className="w-full bg-gradient-to-r from-primary to-primary-dark py-16 md:py-20">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <FadeIn>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {service.name} in <span className="text-white">Accra, Ghana</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mt-4 max-w-3xl">{service.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
                <Link href="/book" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a href="tel:+233257091176" className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            {hasRichContent && service.richContent ? (
              <DentalImplantsRichContent service={service} />
            ) : (
              <StandardServiceTemplate service={service} />
            )}
          </div>
        </section>

        <section className="w-full bg-[#e7e7e7] py-16">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#5C0F22]">Other Services You Might Like</h2>
              <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Explore our other dental care options
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {services.filter(s => s.slug !== slug).slice(0, 3).map((related, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Link href={`/services/${related.slug}`}>
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                          <related.icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <h3 className="font-bold text-[#5C0F22]">{related.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{related.description}</p>
                      <span className="text-[#5C0F22] text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all">
                        Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-16">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Book your appointment today and take the first step towards a healthier, brighter smile.
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                <CalendarIcon className="w-5 h-5" />
                Book Appointment Now
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
