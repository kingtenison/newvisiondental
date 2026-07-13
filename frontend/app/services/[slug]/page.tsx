import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Sparkles, Shield, Heart, Sun, Stethoscope, ScanLine, PenTool, Crown, MinusCircle, Smile, Droplets, ShieldCheck, Baby, CheckCircle,
  Clock, ChevronRight, Star, Phone, Calendar as CalendarIcon,
  Check, Award, Users, MapPin, ArrowRight, AlertTriangle, Scissors
} from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import Image from "next/image";
import { ReadMoreList } from "@/app/components/ui/ReadMoreList";

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
      "Personalized Care: We take the time to understand your oral health needs and develop a treatment plan that works for you.",
      "Modern Technology: Our state-of-the-art equipment ensures precise diagnostics and effective treatments.",
      "Comprehensive Services: From cleanings and fillings to crowns and gum disease treatment, we offer a full range of care in three convenient locations.",
      "Trusted Expertise: Known as one of the best dentists, Dr Govina (CEO and owner) and his team combine leadership, skill and compassion to provide exceptional care."
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
      "Detects cavities and tooth decay early",
      "Identifies infections, abscesses, and bone loss",
      "Assists in treatment planning for implants, orthodontics, and extractions",
      "Helps monitor oral health over time",
      "Enables accurate diagnosis with minimal discomfort"
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
    longDescription: "Professional teeth cleaning, also known as dental prophylaxis, is a preventive dental procedure designed to remove plaque, tartar (calculus), and surface stains that regular brushing and flossing cannot eliminate. This treatment helps maintain healthy teeth and gums while reducing the risk of cavities, gum disease, and bad breath. During the procedure, our dental professionals carefully examine your oral health before using specialized instruments to remove hardened deposits from the teeth and along the gum line. The teeth are then polished to remove stains and create a smooth surface that makes it more difficult for plaque to accumulate. In some cases, fluoride treatment may be recommended to strengthen the teeth and provide additional protection against decay. Regular professional cleanings not only enhance the appearance of your smile but also play a crucial role in maintaining long-term oral health. We recommend scheduling a dental cleaning every six months, or as advised by your dentist, to keep your teeth and gums in optimal condition.",
    icon: Sparkles,
    slug: "scaling-polishing",
    duration: "45 mins",
    price: "From GHS 300",
    image: "/images/services/teeth-cleaning-scaling-polishing.jpg",
    features: [
      "Prevents gum disease — removes bacterial plaque that leads to gingivitis and periodontitis before it causes damage.",
      "Cavity protection — eliminates tartar and plaque your toothbrush can't reach, reducing cavity risk significantly.",
      "Brighter appearance — surface stains from coffee, tea, and food are polished away, revealing a cleaner, whiter smile.",
      "Supports overall health — poor oral health is linked to heart disease and diabetes; regular cleanings reduce systemic risk.",
      "Early detection — problems like early-stage decay or oral cancer are far easier and less costly to treat when caught early.",
      "Fresh breath — bacteria and food debris that cause persistent bad breath are thoroughly removed during each visit.",
      "Avoid eating or drinking for 30 minutes after fluoride treatment.",
      "Rinse with warm water if gums feel sensitive.",
      "Resume your normal brushing and flossing routine the same day.",
      "Use a soft-bristle toothbrush for 24 hours if gums are tender.",
      "Sensitivity to hot or cold may occur briefly — this is normal.",
      "Book your next appointment before leaving for continuity of care."
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
    longDescription: "At New Vision Dental Clinic, our professional teeth whitening procedures are tailored to your individual needs, delivering faster, safer, and more noticeable results than over-the-counter whitening products. The treatment is non-invasive, comfortable, and can significantly enhance your confidence by giving you a brighter, healthier-looking smile.\n\nWhether you are preparing for a special occasion or simply want to refresh your appearance, professional teeth whitening is a quick and effective way to achieve a more dazzling smile. Schedule a consultation today to discover the best whitening option for you.\n\nWhy Professional Teeth Whitening?\n\nOver time, teeth can become stained or discolored due to a variety of factors, including dietary habits (coffee, tea, red wine, and berries), tobacco use, aging (enamel wears away revealing the yellowish dentin beneath), and certain medications such as tetracycline. While over-the-counter whitening products promise results, they often fall short in delivering noticeable or long-lasting improvements. Professional teeth whitening offers a more effective and reliable solution.\n\nReady to achieve a brighter and more confident smile? Wondering what type of whitening is best for you? Call our office on 0257091176 / 0246850455 and let us help you transform your smile and boost your confidence with our expert whitening solutions!",
    icon: Sun,
    slug: "teeth-whitening",
    duration: "60 mins",
    price: "From GHS 500",
    image: "/images/services/teeth-whitening.jpg",
    features: [
      "Customized Treatment Plans: Our dentists assess your teeth and decide on a whitening plan tailored to your needs and goals.",
      "Safe and Effective: Our European approved BlancOne whitening products protect your enamel while delivering stunning results.",
      "BlancOne Treatments: Tailored to your individual needs, whether a quick refresh after cleaning or a more intensive treatment for deeper stains, with zero or negligible sensitivity.",
      "Quick Results: Achieve a noticeably brighter smile in as little as one session.",
      "In-Office Whitening: Our BlancOne whitening gel is applied to your teeth and activated with a special light. The process is quick, often completed in about 30 minutes, and produces dramatic results.",
      "Home Whitening: Custom-made trays (gum shield) and professional-grade BlancOne gel let you achieve gradual, equally stunning results on your own schedule.",
      "Ultimate Whitening Package: A combination of in-office and home whitening for the best, most lasting results — dramatically and quickly whitening your teeth while maintaining them.",
      "Avoid Stain-Causing Foods and Drinks: Limit coffee, tea, red wine, and other staining agents.",
      "Practice Good Oral Hygiene: Brush and floss regularly to remove plaque and prevent discoloration.",
      "Use Whitening Toothpaste: A whitening toothpaste helps maintain your bright smile between treatments.",
      "Schedule Regular Cleanings: Professional cleanings at our clinic remove surface stains and keep your teeth looking their best."
    ],
    benefits: [
      "Dramatic Results: Professional whitening can brighten your teeth by several shades in a short amount of time.",
      "Long-Lasting Effects: Our treatments provide longer-lasting results compared to over-the-counter options.",
      "Safe for Enamel: Professional whitening is carefully controlled to minimize sensitivity and protect your teeth.",
      "Boosts Confidence: A brighter smile can enhance your self-esteem in both personal and professional settings."
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
      "Natural-looking appearance",
      "Restores tooth function and strength",
      "Bonds directly to the tooth structure",
      "Requires minimal removal of healthy tooth tissue",
      "Can repair chipped, cracked, or decayed teeth"
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
      "Gentle, Patient-Centred Care: We prioritize your comfort throughout the procedure, using modern techniques to minimize discomfort.",
      "Advanced Technology: Our state-of-the-art equipment ensures precision and efficiency during every step of your root canal.",
      "Preserve Your Natural Smile: Root canal therapy helps you avoid extractions, maintaining the integrity and aesthetics of your smile.",
      "Trusted Expertise: We deliver high-quality care tailored to your unique needs.",
      "Persistent or severe tooth pain.",
      "Sensitivity to hot or cold temperatures.",
      "Swelling or tenderness in the gums near the affected tooth.",
      "A darkened or discoloured tooth.",
      "A small pimple-like bump on the gums.",
      "Diagnosis and Preparation: We use advanced imaging to assess the affected tooth and plan the procedure.",
      "Numbing and Cleaning: The area is numbed for comfort, and the infected pulp is carefully removed.",
      "Filling and Sealing: The tooth is cleaned, filled with a biocompatible material, and sealed to prevent reinfection.",
      "Restoration: In many cases, a crown is placed to restore the tooth's strength and appearance."
    ],
    benefits: [
      "Pain Relief: Eliminate the discomfort caused by infection or decay.",
      "Prevent Tooth Loss: Save your natural tooth and avoid extraction.",
      "Long-Term Results: A properly treated tooth can last a lifetime with good oral care.",
      "Improved Oral Health: Treating infection prevents it from spreading to other teeth or areas of the mouth."
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
      "Restores damaged or weakened teeth",
      "Replaces missing teeth effectively",
      "Improves chewing and speech",
      "Enhances smile aesthetics",
      "Provides long-lasting durability"
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
      "Removes infected or damaged root fragments",
      "Prevents pain and future complications",
      "Promotes healthy healing of surrounding tissues",
      "Protects neighboring teeth and bone",
      "Creates a healthy foundation for future restorations"
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
      "Corrects cosmetic imperfections",
      "Provides a natural tooth appearance",
      "Stain-resistant options available",
      "Long-lasting aesthetic results"
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
      "Reduces the risk of cavities",
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
    longDescription: "No one wants to have a dental emergency. But they can happen to any of us. One minute you are biting into a sandwich and the next thing you know, half of your tooth is in your hand. One minute a pain that was nagging but dull is suddenly keeping you up at night.\n\nWhat Is Emergency Dentistry?\n\nEmergency dentistry focuses on treating dental problems that require immediate attention to relieve pain, prevent further damage, or address serious oral health concerns. Whether you are dealing with a severe toothache, a knocked-out tooth, or a broken restoration, our team is equipped to provide the care you need right away. Even if you are not in pain, such as when a tooth is broken or lost, it is still extremely important to be evaluated as soon as possible. Often, time is of the essence and the first several hours after the incident or accident can determine the prognosis of the affected tooth.\n\nPrompt, Reliable Dental Care When You Need It Most\n\nDental emergencies can happen unexpectedly, but knowing where to turn can make all the difference. We provide fast, effective emergency dental care to help alleviate pain and restore your smile. As a trusted Dental Clinic near you, our experienced team is here to address urgent dental issues with expertise and compassion.\n\nExperience Trusted Emergency Dental Care\n\nOur team understands the urgency and stress that come with dental emergencies. That is why we are committed to providing fast, reliable care tailored to your needs. With our advanced technology and compassionate approach, we ensure you receive the best possible treatment during unexpected situations.",
    icon: AlertTriangle,
    slug: "emergency-dentistry",
    duration: "Same-Day",
    price: "From GHS 200",
    image: "/images/services/emergency-dentistry.jpg",
    features: [
      "Same-Day Appointments: We prioritize dental emergencies and strive to see you as quickly as possible, often on the same day. We offer extended hours, including Saturday appointments and in some cases, Sunday appointments.",
      "Comprehensive Services: From pain relief to restorative solutions, we address a wide range of dental emergencies efficiently.",
      "Compassionate Care: Dr Govina and his team create a calming environment to ensure your comfort during stressful situations.",
      "Trusted Expertise: The dental team at New Vision Dental Clinic combines advanced skills with modern technology to deliver exceptional results.",
      "Severe Toothaches: Addressing the cause of pain, such as cavities, infections, or abscesses.",
      "Knocked-Out Teeth: Providing immediate care to preserve and reattach the tooth when possible.",
      "Chipped or Broken Teeth: Restoring damaged teeth with bonding, crowns, or other solutions.",
      "Lost Fillings or Crowns: Repairing or replacing restorations to protect your teeth.",
      "Gum Swelling or Infections: Diagnosing and treating the source of swelling to prevent complications.",
      "Injuries to the Lips, Gums, or Tongue: Managing oral injuries caused by accidents or trauma.",
      "Call Us Immediately: Contact us on 0257091176 / 0246850455 to describe your situation and receive guidance.",
      "Protect the Tooth: For a knocked-out tooth, handle it carefully by the crown and try to place it back in the socket. If this is not possible, keep it in a container of milk or saliva.",
      "Manage Pain: Use over-the-counter pain relievers and apply a cold compress to reduce swelling until your appointment."
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
    longDescription: "At New Vision Dental Clinic, we provide expert minor oral surgery services in a safe, modern, and comfortable environment. Whether you need a problematic tooth removed or treatment for an oral condition, our experienced dental professionals are committed to making your procedure as painless and stress-free as possible. Every procedure is performed using effective local anaesthesia, modern surgical techniques, and strict infection prevention protocols to ensure your safety and comfort. We also provide comprehensive aftercare instructions and follow-up support to promote quick healing. At New Vision Dental Clinic, we always strive to save your natural teeth whenever possible. However, when a tooth is severely decayed, damaged, infected, loose due to gum disease, or causing overcrowding, tooth extraction may be the best treatment option. If you have persistent tooth pain, swelling, an impacted tooth, or have been referred for oral surgery, trust New Vision Dental Clinic to provide compassionate, high-quality care tailored to your needs. Your comfort, safety, and healthy smile are our priority. Book an appointment today and let us help you regain your oral health with confidence.",
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
                {service.longDescription.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4 last:mb-0">{para}</p>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5">
                <h2 className="text-xl font-bold text-[#1A4FAD] mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#00C8E8]/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#00C8E8]" />
                   </div>
                   Key Features
                </h2>
                 <ReadMoreList
                   items={service.features}
                   limit={4}
                   badgeClassName="bg-green-50"
                   checkClassName="text-green-500"
                   textClassName="text-gray-700"
                   buttonClassName="text-[#1A4FAD] hover:text-[#0D2A60]"
                 />
              </div>

              <div className="bg-gradient-to-br from-[#1A4FAD] to-[#0D2A60] p-8 rounded-[2rem] shadow-2xl text-white">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#E8B830]" />
                   </div>
                   Patient Benefits
                </h2>
                 <ReadMoreList
                   items={service.benefits}
                   limit={4}
                   badgeClassName="bg-white/10"
                   checkClassName="text-[#00C8E8]"
                   textClassName="text-white/80"
                   buttonClassName="text-[#00C8E8] hover:text-white"
                 />
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
      canonical: `https://newvisiondentalclinic.com/services/${slug}`,
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newvisiondentalclinic.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://newvisiondentalclinic.com/services" },
      { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://newvisiondentalclinic.com/services/${slug}` }
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
