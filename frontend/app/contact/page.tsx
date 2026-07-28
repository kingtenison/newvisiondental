import { Metadata } from 'next';
import ContactFormSection from '@/app/components/sections/ContactFormSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with New Vision Dental Clinic. Contact us for appointments, questions, or general inquiries. We respond within 24 hours.',
  alternates: {
    canonical: 'https://newvisiondentalclinic.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full">
      <ContactFormSection />
    </main>
  );
}
