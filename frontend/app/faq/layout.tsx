import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | New Vision Dental Clinic Accra",
  description: "Get answers to common dental questions about consultation fees, BlancOne teeth whitening, dental implants, accepted health insurance, 3 clinic locations in Accra, and same-day emergency appointments.",
  keywords: [
    "dental FAQs Ghana",
    "dentist questions Accra",
    "teeth whitening cost Ghana",
    "dental implants price Accra",
    "dentist insurance Ghana",
    "emergency dentist Accra",
    "New Vision Dental Clinic FAQs",
  ],
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | New Vision Dental Clinic Accra",
    description: "Everything you need to know about dental care, pricing, insurance, and booking across our 3 Accra clinics.",
    url: "https://newvisiondentalclinic.com/faq",
    siteName: "New Vision Dental Clinic",
    locale: "en_GH",
    type: "website",
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
