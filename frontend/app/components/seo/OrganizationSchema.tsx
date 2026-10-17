export default function OrganizationSchema() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "DentalClinic", "MedicalBusiness", "LocalBusiness"],
        "@id": "https://newvisiondentalclinic.com/#organization",
        "name": "New Vision Dental Clinic",
        "alternateName": [
          "New Vision Dental",
          "New Vision Dental Clinic Ghana",
          "New Vision Dental Clinic Accra"
        ],
        "legalName": "New Vision Dental Clinic",
        "url": "https://newvisiondentalclinic.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://newvisiondentalclinic.com/images/nv-new-logo-03.png",
          "caption": "New Vision Dental Clinic Logo"
        },
        "image": "https://newvisiondentalclinic.com/images/hero/hero-1.jpg",
        "description": "Premier private dental clinic in Accra, Ghana offering expert dental implants, BlancOne teeth whitening, root canal treatment, braces, emergency dentistry, and routine oral care across 3 modern clinics.",
        "foundingDate": "2010",
        "telephone": "+233257091176",
        "email": "info@newvisiondental.com",
        "priceRange": "GHS 100 - GHS 5,000",
        "currenciesAccepted": "GHS",
        "paymentAccepted": "Cash, Credit Card, Visa, Mastercard, Mobile Money, MTN MoMo, Telecel Cash, Direct Health Insurance Billing",
        "openingHours": [
          "Mo-Fr 08:30-17:00",
          "Sa 08:30-17:00"
        ],
        "sameAs": [
          "https://www.facebook.com/share/1UQaw9ZCGK/?mibextid=wwXIfr",
          "https://www.instagram.com/newvisiondental.clinic",
          "https://www.tiktok.com/@newvisiondental.clinic"
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://newvisiondentalclinic.com/about#dr-felix-govina",
          "name": "Dr. Felix Govina",
          "honorificPrefix": "Dr.",
          "honorificSuffix": "BDS, MPH, MSc",
          "jobTitle": "Founder, CEO & Lead Dental Surgeon",
          "description": "Senior dental surgeon with over 29 years of clinical practice in dentistry, public health, and occupational safety. Served 15 years as a military dental officer in the Ghana Armed Forces and 7 years with the United Nations.",
          "image": "https://newvisiondentalclinic.com/images/team/CEO.jpg"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": 520,
          "reviewCount": 520
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Accra" },
          { "@type": "AdministrativeArea", "name": "Greater Accra Region" },
          { "@type": "AdministrativeArea", "name": "Ghana" },
          { "@type": "Place", "name": "North Legon" },
          { "@type": "Place", "name": "Ashaley Botwe" },
          { "@type": "Place", "name": "Kwabenya" },
          { "@type": "Place", "name": "ACP Estate" },
          { "@type": "Place", "name": "Legon" },
          { "@type": "Place", "name": "East Legon" },
          { "@type": "Place", "name": "Madina" },
          { "@type": "Place", "name": "Adenta" },
          { "@type": "Place", "name": "Haatso" },
          { "@type": "Place", "name": "Achimota" }
        ],
        "medicalSpecialty": [
          "Dentistry",
          "CosmeticDentistry",
          "OralSurgery",
          "Orthodontics",
          "Periodontics",
          "Endodontics",
          "PediatricDentistry"
        ],
        "department": [
          {
            "@type": "DentalClinic",
            "@id": "https://newvisiondentalclinic.com/locations/dentist-north-legon#branch",
            "name": "New Vision Dental Clinic — North Legon Branch (Flagship)",
            "telephone": "+233559497906",
            "url": "https://newvisiondentalclinic.com/locations/dentist-north-legon",
            "image": "https://newvisiondentalclinic.com/images/locations/north-legon-clinic.jpg",
            "priceRange": "GHS 100 - GHS 5,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Agbogba Road",
              "addressLocality": "North Legon",
              "addressRegion": "Greater Accra",
              "postalCode": "00233",
              "addressCountry": "GH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 5.6744,
              "longitude": -0.1983
            },
            "hasMap": "https://maps.google.com/?q=North+Legon+Accra",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:30",
                "closes": "17:00"
              }
            ]
          },
          {
            "@type": "DentalClinic",
            "@id": "https://newvisiondentalclinic.com/locations/dentist-ashaley-botwe#branch",
            "name": "New Vision Dental Clinic — Ashaley Botwe Branch",
            "telephone": "+233257091176",
            "url": "https://newvisiondentalclinic.com/locations/dentist-ashaley-botwe",
            "image": "https://newvisiondentalclinic.com/images/locations/ashaley-botwe-clinic.jpg",
            "priceRange": "GHS 100 - GHS 5,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "School Junction",
              "addressLocality": "Ashaley Botwe",
              "addressRegion": "Greater Accra",
              "postalCode": "00233",
              "addressCountry": "GH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 5.6881,
              "longitude": -0.1388
            },
            "hasMap": "https://maps.google.com/?q=Ashaley+Botwe+Accra",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:30",
                "closes": "17:00"
              }
            ]
          },
          {
            "@type": "DentalClinic",
            "@id": "https://newvisiondentalclinic.com/locations/dentist-acp-estate#branch",
            "name": "New Vision Dental Clinic — ACP Estate Kwabenya Branch",
            "telephone": "+233545563839",
            "url": "https://newvisiondentalclinic.com/locations/dentist-acp-estate",
            "image": "https://newvisiondentalclinic.com/images/locations/acp-estate-clinic.jpg",
            "priceRange": "GHS 100 - GHS 5,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ACP Estate Junction",
              "addressLocality": "Kwabenya",
              "addressRegion": "Greater Accra",
              "postalCode": "00233",
              "addressCountry": "GH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 5.6883,
              "longitude": -0.2523
            },
            "hasMap": "https://maps.google.com/?q=ACP+Estate+Kwabenya+Accra",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:30",
                "closes": "17:00"
              }
            ]
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Dental Treatments & Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Dental Consultation",
                "description": "Comprehensive clinical examination, digital imaging review, and custom treatment plan."
              },
              "price": "100",
              "priceCurrency": "GHS"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Teeth Whitening",
                "description": "BlancOne European approved professional in-office and take-home whitening."
              },
              "price": "500",
              "priceCurrency": "GHS"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Dental Implants",
                "description": "Permanent titanium tooth root replacement and custom crown restoration."
              },
              "price": "2500",
              "priceCurrency": "GHS"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Dental X-Ray & OPG",
                "description": "Low radiation periapical and panoramic digital dental radiographs."
              },
              "price": "150",
              "priceCurrency": "GHS"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Scaling and Polishing",
                "description": "Ultrasonic plaque and calculus removal, stain polishing."
              },
              "price": "300",
              "priceCurrency": "GHS"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Root Canal Treatment",
                "description": "Endodontic therapy to preserve infected natural teeth."
              },
              "price": "1200",
              "priceCurrency": "GHS"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Orthodontics & Braces",
                "description": "Metal, ceramic braces and clear orthodontic aligners."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Emergency Dentistry",
                "description": "Same day emergency toothache and trauma care in Accra."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://newvisiondentalclinic.com/#website",
        "url": "https://newvisiondentalclinic.com",
        "name": "New Vision Dental Clinic",
        "description": "Official website of New Vision Dental Clinic in Accra, Ghana",
        "publisher": {
          "@id": "https://newvisiondentalclinic.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://newvisiondentalclinic.com/book",
              "inLanguage": "en-US",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "DentalReservation",
              "name": "Dental Appointment Reservation"
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
