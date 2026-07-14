import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import OrganizationSchema from './components/seo/OrganizationSchema';

const siteUrl = 'https://newvisiondentalclinic.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'New Vision Dental Clinic - Premium Dental Care in Accra, Ghana',
    template: '%s | New Vision Dental Clinic',
  },
  description: 'New Vision Dental Clinic offers expert dental care across Accra — dental implants, teeth whitening, root canals, emergency dentistry, and more. Book your appointment today.',
  keywords: [
    'dental clinic Accra',
    'dentist Ghana',
    'dental implants',
    'teeth whitening',
    'root canal treatment',
    'emergency dentist',
    'New Vision Dental',
    'dentist near me',
    'dental care Ghana',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    siteName: 'New Vision Dental Clinic',
    title: 'New Vision Dental Clinic - Premium Dental Care in Accra, Ghana',
    description: 'Expert dental care across Accra. Dental implants, teeth whitening, root canals, emergency dentistry, and more.',
    url: siteUrl,
    images: [{ url: '/images/hero/hero-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Vision Dental Clinic - Premium Dental Care in Accra, Ghana',
    description: 'Expert dental care across Accra. Dental implants, teeth whitening, root canals, emergency dentistry, and more.',
    images: ['/images/hero/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
