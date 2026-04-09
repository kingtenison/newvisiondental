import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ChevronRight, Calendar, Award, Users, ArrowLeft, Sparkles, Navigation } from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import Image from "next/image";

const locations = [
  { 
    name: "North Legon", 
    address: "Agbogba Road, North Legon, Accra",
    phone: "0559497906",
    hours: "Mon - Sat: 8am - 5pm",
    slug: "dentist-north-legon",
    image: "/images/locations/north-legon-clinic.jpg",
    mapLink: "https://maps.google.com/?q=North+Legon+Accra",
    mapEmbed: "https://maps.google.com/maps?q=Agbogba+Road,+North+Legon,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Our flagship clinic on Agbogba Road serves the North Legon community with comprehensive dental care. Equipped with state-of-the-art technology and staffed by experienced professionals.",
    facilities: ["Modern treatment rooms", "Digital X-ray facilities", "Sterilization center", "Comfortable waiting area", "Ample parking space"],
    services: ["Teeth Whitening", "Dental Implants", "Root Canal Treatment", "Braces & Orthodontics", "Children's Dentistry", "Dental Cleaning"]
  },
  { 
    name: "Ashaley Botwe", 
    address: "School Junction, Ashaley Botwe, Accra",
    phone: "0257091176",
    hours: "Mon - Sat: 8am - 5pm",
    slug: "dentist-ashaley-botwe",
    image: "/images/locations/ashaley-botwe-clinic.jpg",
    mapLink: "https://maps.google.com/?q=Ashaley+Botwe+Accra",
    mapEmbed: "https://maps.google.com/maps?q=School+Junction,+Ashaley+Botwe,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Conveniently located at School Junction, our Ashaley Botwe clinic provides accessible dental care for families in the area with a warm, welcoming environment.",
    facilities: ["Modern treatment rooms", "Digital X-ray facilities", "Sterilization center", "Comfortable waiting area", "Ample parking space"],
    services: ["Teeth Whitening", "Dental Implants", "Root Canal Treatment", "Braces & Orthodontics", "Children's Dentistry", "Dental Cleaning"]
  },
  { 
    name: "ACP Estate", 
    address: "ACP Estate Junction, Kwabenya, Accra",
    phone: "0545563839",
    hours: "Mon - Sat: 8am - 5pm",
    slug: "dentist-acp-estate",
    image: "/images/locations/acp-estate-clinic.jpg",
    mapLink: "https://maps.google.com/?q=ACP+Estate+Kwabenya+Accra",
    mapEmbed: "https://maps.google.com/maps?q=ACP+Estate+Junction,+Kwabenya,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Serving the Kwabenya community from ACP Estate Junction, this clinic offers top-quality dental services in a modern, comfortable setting.",
    facilities: ["Modern treatment rooms", "Digital X-ray facilities", "Sterilization center", "Comfortable waiting area", "Ample parking space"],
    services: ["Teeth Whitening", "Dental Implants", "Root Canal Treatment", "Braces & Orthodontics", "Children's Dentistry", "Dental Cleaning"]
  },
];

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
    "@type": "DentalClinic",
    "name": `New Vision Dental Clinic - ${location.name}`,
    "description": location.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.split(",")[0],
      "addressLocality": location.address.split(",")[1]?.trim() || "Accra",
      "addressCountry": "GH"
    },
    "telephone": location.phone,
    "openingHours": location.hours
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
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
                  priority
                />
              </div>
            ))}
          </div>
          
          {/* Wine Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D0814]/95 via-[#5C0F22]/70 to-[#7A1A2E]/30" />
          
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 py-12 md:py-16">
            <Link href="/locations" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Locations
            </Link>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center border border-[#D4AF37]/20">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase">Our Clinic</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{location.name}</h1>
                <p className="text-white/60 text-base md:text-lg">{location.address}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`tel:${location.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8C547] transition-colors shadow-lg shadow-[#D4AF37]/25">
                  <Phone className="w-4 h-4" /> Call {location.phone}
                </a>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#5C0F22] text-sm font-semibold rounded-full border border-white hover:bg-gray-100 transition-all">
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
                  <div className="relative w-full h-[500px] lg:h-auto lg:min-h-[600px] rounded-2xl overflow-hidden border border-[#D4AF37]/10">
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
                    <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#5C0F22]">About This Location</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </FadeIn>

                {/* Facilities */}
                <FadeIn delay={0.15}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#5C0F22]">Facilities</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.facilities.map((facility, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-[#D4AF37]/8">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                {/* Services */}
                <FadeIn delay={0.2}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#5C0F22]">Services Available</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.services.map((service, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-[#D4AF37]/8">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right - Sidebar */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.2}>
                  <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-[#D4AF37]/10">
                    <h3 className="text-xl font-bold text-[#5C0F22] mb-5">Location Details</h3>

                    <div className="space-y-4 mb-6">
                      <div className="pb-4 border-b border-[#D4AF37]/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Address</p>
                        <p className="font-medium text-[#5C0F22] text-sm">{location.address}</p>
                      </div>
                      <div className="pb-4 border-b border-[#D4AF37]/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${location.phone}`} className="font-medium text-[#D4AF37] text-sm hover:underline">{location.phone}</a>
                      </div>
                      <div className="pb-4 border-b border-[#D4AF37]/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hours</p>
                        <p className="font-medium text-[#5C0F22] text-sm">{location.hours}</p>
                      </div>
                    </div>

                    <Link href="/book" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C0F22] text-white rounded-xl font-semibold text-sm hover:bg-[#7a1830] transition-colors mb-3">
                      <Calendar className="w-4 h-4" /> Book Appointment
                    </Link>

                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#5C0F22] text-[#5C0F22] rounded-xl font-semibold text-sm hover:bg-[#5C0F22] hover:text-white transition-all">
                      <MapPin className="w-4 h-4" /> Get Directions
                    </a>

                    {/* Map Preview */}
                    <div className="mt-6 rounded-xl overflow-hidden border border-[#D4AF37]/10">
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
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] text-xs font-medium hover:underline flex items-center gap-1 mt-3">
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
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#5C0F22]">Find Us Here</h2>
              </div>
              <p className="text-gray-500 text-sm md:text-base text-center mb-8 max-w-xl mx-auto">
                {location.name} &mdash; {location.address}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/10 shadow-lg max-w-6xl mx-auto">
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
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C0F22] text-white rounded-full font-medium text-sm hover:bg-[#7a1830] transition-colors">
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#5C0F22] text-[#5C0F22] rounded-full font-medium text-sm hover:bg-[#5C0F22] hover:text-white transition-all">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 py-14 md:py-16">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Visit {location.name}?</h2>
                <p className="text-white/60 text-sm md:text-base mb-8">
                  Book your appointment today and experience quality dental care at our {location.name} clinic.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/book" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8C547] transition-colors shadow-lg shadow-[#D4AF37]/25">
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
