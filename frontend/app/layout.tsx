import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import OrganizationSchema from './components/seo/OrganizationSchema';

const siteUrl = 'https://newvisiondentalclinic.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dental Clinic in Accra, Ghana | New Vision Dental Clinic',
    template: '%s | New Vision Dental Clinic',
  },
  description: 'Award-winning dental care across Accra, Ghana with 3 modern branches in North Legon, Ashaley Botwe & ACP Estate Kwabenya. Specialists in dental implants, BlancOne teeth whitening, root canals, braces & emergency dental care. Rated 4.9/5.',
  keywords: [
    'dental clinic',
    'dental clinic Accra',
    'dental clinic in Accra Ghana',
    'best dental clinic in Ghana',
    'dentist in Accra Ghana',
    'dentist North Legon',
    'dentist Ashaley Botwe',
    'dentist Kwabenya ACP Estate',
    'dental implants Accra Ghana',
    'teeth whitening price Ghana',
    'root canal treatment Accra',
    'emergency dentist Accra same day',
    'braces price in Ghana',
    'orthodontist Accra',
    'pediatric dentist Accra',
    'cosmetic dentistry Ghana',
    'scaling and polishing cost Accra',
    'Dr Felix Govina dentist',
    'dental clinic near me',
  ],
  authors: [{ name: 'Dr. Felix Govina, BDS, MPH, MSc', url: 'https://newvisiondentalclinic.com/about' }],
  creator: 'New Vision Dental Clinic',
  publisher: 'New Vision Dental Clinic',
  category: 'Medical / Healthcare',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    siteName: 'New Vision Dental Clinic',
    title: 'Dental Clinic in Accra, Ghana | New Vision Dental Clinic',
    description: 'Premier dental care across Accra, Ghana. 3 modern clinics in North Legon, Ashaley Botwe & ACP Estate. Implants, whitening, root canals, braces & emergency care.',
    url: siteUrl,
    images: [
      {
        url: '/images/hero/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'New Vision Dental Clinic — Modern Dental Care in Accra, Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Vision Dental Clinic | Best Dental Clinic in Accra, Ghana',
    description: 'Premier dental care across Accra. Dental implants, BlancOne teeth whitening, root canals, braces & emergency dentistry.',
    images: ['/images/hero/hero-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', type: 'image/x-icon', sizes: '48x48' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png?v=2', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-icon.png?v=2',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q4BNJL1R7R"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q4BNJL1R7R', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
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
