export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "DentalClinic"],
    "name": "New Vision Dental Clinic",
    "url": "https://newvisiondentalclinic.com",
    "logo": "https://newvisiondentalclinic.com/images/nv-new-logo-03.png",
    "description": "Premium dental care across Accra, Ghana. Specialists in implants, whitening, root canals, and emergency dentistry.",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Dr. Govina"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "North Legon",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Ashaley Botwe",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "ACP Estate",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      }
    ],
    "telephone": "+233257091176",
    "email": "info@newvisiondental.com",
    "openingHours": ["Mo-Fr 08:30-17:00", "Sa 08:30-17:00"],
    "sameAs": [
      "https://www.instagram.com/newvisiondental.clinic",
      "https://www.tiktok.com/@newvisiondental.clinic"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": 5000
    },
    "priceRange": "GHS 150 - GHS 2,500",
    "medicalSpecialty": ["Dentistry", "CosmeticDentistry", "OralSurgery", "Orthodontics", "Periodontics", "Endodontics"],
    "availableService": [
      { "@type": "MedicalProcedure", "name": "Dental Consultation" },
      { "@type": "MedicalProcedure", "name": "Dental X-Ray" },
      { "@type": "MedicalProcedure", "name": "Teeth Cleaning" },
      { "@type": "MedicalProcedure", "name": "Teeth Whitening" },
      { "@type": "MedicalProcedure", "name": "Dental Implants" },
      { "@type": "MedicalProcedure", "name": "Root Canal Treatment" },
      { "@type": "MedicalProcedure", "name": "Crown & Bridge" },
      { "@type": "MedicalProcedure", "name": "Emergency Dentistry" },
      { "@type": "MedicalProcedure", "name": "Minor Oral Surgery" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
