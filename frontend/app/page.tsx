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

export const metadata = {
  title: 'Home',
  description: 'New Vision Dental Clinic — premium dental care across Accra, Ghana. Book your appointment for implants, whitening, root canals, and more.',
  openGraph: {
    title: 'New Vision Dental Clinic - Premium Dental Care in Accra, Ghana',
    description: 'Premium dental care across Accra. Book your appointment today.',
    url: 'https://newvisiondental.com',
    images: [{ url: '/images/hero/hero-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://newvisiondental.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <h1 className="sr-only">New Vision Dental Clinic — Premium Dental Care in Accra, Ghana</h1>
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
