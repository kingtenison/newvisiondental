import { Metadata } from 'next';
import ContactFormSection from '@/app/components/sections/ContactFormSection';

export const metadata: Metadata = {
  title: 'Contact & Book Dental Appointment | New Vision Dental Clinic Accra',
  description: 'Contact New Vision Dental Clinic across Accra, Ghana. Reach our 3 modern branches in North Legon, Ashaley Botwe & ACP Estate Kwabenya. Call +233 25 709 1176 or book online today.',
  keywords: [
    'contact dental clinic Accra',
    'dentist phone number Accra Ghana',
    'book dentist appointment Accra',
    'emergency dentist contact Accra',
    'North Legon dental clinic phone',
    'Ashaley Botwe dentist phone',
    'ACP Estate Kwabenya dentist',
  ],
  openGraph: {
    title: 'Contact & Book Dental Appointment | New Vision Dental Clinic Accra',
    description: 'Get in touch with New Vision Dental Clinic. 3 convenient branches across Accra. Quick appointments and same-day emergency support.',
    url: 'https://newvisiondentalclinic.com/contact',
    siteName: 'New Vision Dental Clinic',
    locale: 'en_GH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://newvisiondentalclinic.com/contact',
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://newvisiondentalclinic.com/contact#webpage",
    "url": "https://newvisiondentalclinic.com/contact",
    "name": "Contact New Vision Dental Clinic",
    "description": "Contact information and appointment booking for New Vision Dental Clinic branches in Accra, Ghana.",
    "mainEntity": {
      "@type": "DentalClinic",
      "@id": "https://newvisiondentalclinic.com/#organization",
      "name": "New Vision Dental Clinic",
      "telephone": "+233257091176",
      "email": "info@newvisiondental.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+233559497906",
          "contactType": "customer service",
          "areaServed": "North Legon",
          "availableLanguage": ["English", "Twi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+233257091176",
          "contactType": "customer service",
          "areaServed": "Ashaley Botwe",
          "availableLanguage": ["English", "Twi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+233545563839",
          "contactType": "customer service",
          "areaServed": "ACP Estate Kwabenya",
          "availableLanguage": ["English", "Twi"]
        }
      ]
    }
  };

  return (
    <main className="min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactFormSection />
    </main>
  );
}
