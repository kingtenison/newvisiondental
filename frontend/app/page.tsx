import type { Metadata } from 'next'
import EditorialHero from './components/sections/EditorialHero'
import EnhancedWhyChooseUs from './components/sections/EnhancedWhyChooseUs'
import ServicesPreview from './components/sections/ServicesPreview'
import PatientReviews from './components/sections/PatientReviews'
import OurLocations from './components/sections/OurLocations'
import ContactFormSection from './components/sections/ContactFormSection'
import ReadyToBook from './components/sections/ReadyToBook'
import GoldDivider from './components/sections/GoldDivider'
import InsurancePartners from './components/sections/InsurancePartners'
import WhatsAppChat from './components/widgets/WhatsAppChat'

export const metadata: Metadata = {
  title: 'Best Dental Clinic in Accra, Ghana | New Vision Dental Clinic',
  description: 'Experience premier dental care in Accra, Ghana. 3 modern clinics in North Legon, Ashaley Botwe & ACP Estate Kwabenya. Dental implants, BlancOne teeth whitening, root canals, braces & emergency dentistry. Book online.',
  keywords: [
    'dental clinic Accra',
    'best dentist in Accra Ghana',
    'dentist North Legon',
    'dentist Ashaley Botwe',
    'dentist Kwabenya',
    'dental implants Accra',
    'teeth whitening price Ghana',
    'root canal treatment Accra',
    'emergency dentist Accra',
    'braces Ghana price',
    'New Vision Dental Clinic',
  ],
  openGraph: {
    title: 'Best Dental Clinic in Accra, Ghana | New Vision Dental Clinic',
    description: 'Premier dental care across Accra. Dental implants, teeth whitening, root canals, braces & emergency dentistry across 3 modern clinics.',
    url: 'https://newvisiondentalclinic.com',
    siteName: 'New Vision Dental Clinic',
    locale: 'en_GH',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'New Vision Dental Clinic — Best Dental Clinic in Accra, Ghana',
      },
    ],
  },
  alternates: {
    canonical: 'https://newvisiondentalclinic.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <EditorialHero />
      
      <EnhancedWhyChooseUs />
      
      <ServicesPreview />
      
      <InsurancePartners />
      
      <PatientReviews />
      
      <GoldDivider />
      
      <OurLocations />
      
      <ContactFormSection />
      
      <ReadyToBook />
      
      <WhatsAppChat />
    </main>
  )
}
