import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOKING_URL } from "@/app/lib/constants/booking";
import { MapPin, Phone, ChevronRight, Calendar, Award, Users, ArrowLeft, Sparkles, Navigation, HelpCircle, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import Image from "next/image";

const locations = [
  { 
    name: "North Legon", 
    address: "Agbogba Road, North Legon, Accra",
    phone: "0559497906",
    hours: "Mon - Sat: 8:30am - 5pm",
    slug: "dentist-north-legon",
    image: "/images/locations/north-legon-clinic.jpg",
    mapLink: "https://maps.google.com/?q=North+Legon+Accra",
    mapEmbed: "https://maps.google.com/maps?q=Agbogba+Road,+North+Legon,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Our flagship clinic on Agbogba Road serves the North Legon community with comprehensive dental care. Equipped with state-of-the-art technology and staffed by experienced professionals.",
    facilities: ["Modern treatment rooms", "Digital X-ray facilities", "Sterilization center", "Comfortable waiting area", "Ample parking space"],
    services: ["Teeth Whitening", "Dental Implants", "Root Canal Treatment", "Braces & Orthodontics", "Children's Dentistry", "Dental Cleaning"],
    geo: { lat: 5.6744, lng: -0.1983 },
    areaServed: ["North Legon", "Agbogba", "Haatso", "Legon Campus", "West Legon", "Atomic", "Madina", "Accra"],
  },
  { 
    name: "Ashaley Botwe", 
    address: "School Junction, Ashaley Botwe, Accra",
    phone: "0257091176",
    hours: "Mon - Sat: 8:30am - 5pm",
    slug: "dentist-ashaley-botwe",
    image: "/images/locations/ashaley-botwe-clinic.jpg",
    mapLink: "https://maps.google.com/?q=Ashaley+Botwe+Accra",
    mapEmbed: "https://maps.google.com/maps?q=School+Junction,+Ashaley+Botwe,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Conveniently located at School Junction, our Ashaley Botwe clinic provides accessible dental care for families in the area with a warm, welcoming environment.",
    facilities: ["Modern treatment rooms", "Digital X-ray facilities", "Sterilization center", "Comfortable waiting area", "Ample parking space"],
    services: ["Teeth Whitening", "Dental Implants", "Root Canal Treatment", "Braces & Orthodontics", "Children's Dentistry", "Dental Cleaning"],
    geo: { lat: 5.6881, lng: -0.1388 },
    areaServed: ["Ashaley Botwe", "School Junction", "Little Roses", "Adenta", "Ogbojo", "East Legon Hills", "Accra"],
  },
  { 
    name: "ACP Estate", 
    address: "ACP Estate Junction, Kwabenya, Accra",
    phone: "0545563839",
    hours: "Mon - Sat: 8:30am - 5pm",
    slug: "dentist-acp-estate",
    image: "/images/locations/acp-estate-clinic.jpg",
    mapLink: "https://maps.google.com/?q=ACP+Estate+Kwabenya+Accra",
    mapEmbed: "https://maps.google.com/maps?q=ACP+Estate+Junction,+Kwabenya,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Serving the Kwabenya community from ACP Estate Junction, this clinic offers top-quality dental services in a modern, comfortable setting.",
    facilities: ["Modern treatment rooms", "Digital X-ray facilities", "Sterilization center", "Comfortable waiting area", "Ample parking space"],
    services: ["Teeth Whitening", "Dental Implants", "Root Canal Treatment", "Braces & Orthodontics", "Children's Dentistry", "Dental Cleaning"],
    geo: { lat: 5.6883, lng: -0.2523 },
    areaServed: ["Kwabenya", "ACP Estate", "Pokuase", "Achimota", "Dome", "Taifa", "Ofankor", "Accra"],
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);
  if (!location) return { title: "Location Not Found" };
  return {
    title: `Best Dentist in ${location.name}, Accra | New Vision Dental Clinic`,
    description: `Looking for an expert dentist in ${location.name}? New Vision Dental Clinic provides dental implants, BlancOne teeth whitening, root canals, braces & cleaning at ${location.address}. Call ${location.phone} to book.`,
    keywords: [
      `dentist ${location.name}`,
      `dental clinic ${location.name}`,
      `dentist in ${location.name} Accra`,
      `dental care ${location.name}`,
      `teeth whitening ${location.name}`,
      `dental implants ${location.name}`,
      'dental clinic Accra',
      'dentist Ghana',
    ],
    openGraph: {
      title: `Best Dentist in ${location.name}, Accra | New Vision Dental Clinic`,
      description: `Visit New Vision Dental Clinic in ${location.name} at ${location.address}. High-end dental care, transparent pricing, and insurance accepted.`,
      url: `https://newvisiondentalclinic.com/locations/${slug}`,
      siteName: 'New Vision Dental Clinic',
      locale: 'en_GH',
      type: 'website',
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: `New Vision Dental Clinic — ${location.name} Branch in Accra, Ghana`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Best Dentist in ${location.name}, Accra | New Vision Dental Clinic`,
      description: `Visit New Vision Dental Clinic in ${location.name} at ${location.address}. Call ${location.phone} to book.`,
      images: [location.image],
    },
    alternates: {
      canonical: `https://newvisiondentalclinic.com/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);
  
  if (!location) {
    notFound();
  }

  const mapQuery = encodeURIComponent(location.address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "DentalClinic", "LocalBusiness"],
    "@id": `https://newvisiondentalclinic.com/locations/${slug}#clinic`,
    "name": `New Vision Dental Clinic — ${location.name}`,
    "description": location.description,
    "url": `https://newvisiondentalclinic.com/locations/${slug}`,
    "image": `https://newvisiondentalclinic.com${location.image}`,
    "telephone": `+233${location.phone.replace(/^0/, "")}`,
    "priceRange": "GHS 100 - GHS 5,000",
    "currenciesAccepted": "GHS",
    "paymentAccepted": "Cash, Credit Card, Visa, Mastercard, Mobile Money, Insurance",
    "parentOrganization": {
      "@id": "https://newvisiondentalclinic.com/#organization"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.split(",")[0],
      "addressLocality": location.name,
      "addressRegion": "Greater Accra",
      "postalCode": "00233",
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.geo.lat,
      "longitude": location.geo.lng
    },
    "hasMap": location.mapLink,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "17:00"
      }
    ],
    "areaServed": location.areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": 185
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://newvisiondentalclinic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://newvisiondentalclinic.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `https://newvisiondentalclinic.com/locations/${slug}`
      }
    ]
  };

  const localFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where is the New Vision Dental Clinic in ${location.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${location.name} branch is located at ${location.address}. Directions and Google Maps navigation are available directly on this page.`
        }
      },
      {
        "@type": "Question",
        "name": `What are the opening hours for ${location.name} clinic?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${location.name} branch is open Monday through Saturday from 8:30 AM to 5:00 PM.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I use my private health insurance at ${location.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our locations including " + location.name + " accept direct billing with 10 major insurance providers including Acacia, Nationwide, Glico, Metropolitan, Cosmopolitan, Equity, ACE, GAB, OctaPlus, and Orange Health."
        }
      },
      {
        "@type": "Question",
        "name": `How can I book an appointment at ${location.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can book online at https://newvisiondentalclinic.com/book or call our ${location.name} clinic directly on ${location.phone}.`
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }} />

      <div className="min-h-screen bg-[#F2F4F8] pt-[72px] md:pt-20 overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full min-h-[35vh] overflow-hidden">
          {/* Full Width 4x2 Image Grid */}
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
          
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/30 to-transparent" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 py-12 md:py-16">
            <Link href="/locations" className="inline-flex items-center gap-2 text-white/60 hover:text-[#E8B830] text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Locations
            </Link>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#E8B830]/10 rounded-xl flex items-center justify-center border border-[#E8B830]/20">
                    <MapPin className="w-5 h-5 text-[#E8B830]" />
                  </div>
                  <span className="text-[#E8B830] text-xs font-semibold tracking-wide uppercase">Our Clinic</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{location.name}</h1>
                <p className="text-white/60 text-base md:text-lg">{location.address}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`tel:${location.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8B830] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8B830] transition-colors shadow-lg shadow-[#E8B830]/25">
                  <Phone className="w-4 h-4" /> Call {location.phone}
                </a>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1A4FAD] text-sm font-semibold rounded-full border border-white hover:bg-gray-100 transition-all">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 md:py-16">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

              {/* Left - Image + Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Image matched to sidebar height */}
                <FadeIn>
                  <div className="relative w-full h-[300px] md:h-[500px] lg:h-auto lg:min-h-[600px] rounded-2xl overflow-hidden border border-[#E8B830]/10">
                    <Image
                      src={location.image}
                      alt={`New Vision Dental Clinic ${location.name}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.1}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#E8B830]/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#E8B830]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A4FAD]">About This Location</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </FadeIn>

                {/* Facilities */}
                <FadeIn delay={0.15}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#E8B830]/10 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#E8B830]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A4FAD]">Facilities</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.facilities.map((facility, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-[#E8B830]/8">
                        <div className="w-1.5 h-1.5 bg-[#E8B830] rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                {/* Services */}
                <FadeIn delay={0.2}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#E8B830]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#E8B830]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A4FAD]">Services Available</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.services.map((service, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-[#E8B830]/8">
                        <div className="w-1.5 h-1.5 bg-[#E8B830] rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right - Sidebar */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.2}>
                  <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-[#E8B830]/10">
                    <h3 className="text-xl font-bold text-[#1A4FAD] mb-5">Location Details</h3>

                    <div className="space-y-4 mb-6">
                      <div className="pb-4 border-b border-[#E8B830]/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Address</p>
                        <p className="font-medium text-[#1A4FAD] text-sm">{location.address}</p>
                      </div>
                      <div className="pb-4 border-b border-[#E8B830]/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${location.phone}`} className="font-medium text-[#E8B830] text-sm hover:underline">{location.phone}</a>
                      </div>
                      <div className="pb-4 border-b border-[#E8B830]/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hours</p>
                        <p className="font-medium text-[#1A4FAD] text-sm">{location.hours}</p>
                      </div>
                    </div>

                    <Link href={BOOKING_URL} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A4FAD] text-white rounded-xl font-semibold text-sm hover:bg-[#163E8A] transition-colors mb-3">
                      <Calendar className="w-4 h-4" /> Book Appointment
                    </Link>

                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#1A4FAD] text-[#1A4FAD] rounded-xl font-semibold text-sm hover:bg-[#1A4FAD] hover:text-white transition-all">
                      <MapPin className="w-4 h-4" /> Get Directions
                    </a>

                    {/* Map Preview */}
                    <div className="mt-6 rounded-xl overflow-hidden border border-[#E8B830]/10">
                      <iframe
                        title={`Map of ${location.name}`}
                        src={location.mapEmbed}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#E8B830] text-xs font-medium hover:underline flex items-center gap-1 mt-3">
                      View larger map <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Full Map */}
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#E8B830]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#E8B830]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A4FAD]">Find Us Here</h2>
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-8 max-w-xl mx-auto">
                {location.name} &mdash; {location.address}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl overflow-hidden border border-[#E8B830]/10 shadow-lg max-w-6xl mx-auto">
                <iframe
                  title={`Full map of ${location.name}`}
                  src={location.mapEmbed}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A4FAD] text-white rounded-full font-medium text-sm hover:bg-[#163E8A] transition-colors">
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1A4FAD] text-[#1A4FAD] rounded-full font-medium text-sm hover:bg-[#1A4FAD] hover:text-white transition-all">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Local FAQs for AEO & Featured Snippets */}
        <section className="w-full bg-white py-16 border-t border-gray-100">
          <div className="w-full px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="text-[#E8B830] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Frequently Asked Questions
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {location.name} Dental Clinic FAQs
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl mx-auto">
                  Key details about directions, accepted insurance, appointments, and emergency dental care at our {location.name} branch.
                </p>
              </div>

              <div className="space-y-4">
                {localFaqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                      <HelpCircle className="w-5 h-5 text-[#1A4FAD] shrink-0 mt-0.5" />
                      {faq.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-7">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A4FAD] via-[#0D2A60] to-[#00C8E8]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B830]/30 to-transparent" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 py-14 md:py-16">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Visit {location.name}?</h2>
                <p className="text-white/60 text-sm md:text-base mb-8">
                  Book your appointment today and experience quality dental care at our {location.name} clinic.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={BOOKING_URL} className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8B830] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8B830] transition-colors shadow-lg shadow-[#E8B830]/25">
                    <Calendar className="w-4 h-4" /> Book Appointment
                  </Link>
                  <a href={`tel:${location.phone}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/15 hover:bg-white/20 transition-all">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
