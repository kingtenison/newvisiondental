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
