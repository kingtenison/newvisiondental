import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Treatments & Services in Accra, Ghana | Implants, Whitening, Braces",
  description: "Explore 15 comprehensive dental procedures at New Vision Dental Clinic in Accra. Specialists in dental implants, European BlancOne teeth whitening, root canals, braces, extractions & emergency dentistry across 3 modern clinics.",
  keywords: [
    "dental services Accra",
    "dental implants Accra",
    "teeth whitening Accra Ghana",
    "root canal specialist Accra",
    "braces cost Ghana",
    "emergency dentist Accra",
    "dental scaling and polishing Accra",
    "dental veneers Ghana",
    "tooth extraction Accra",
  ],
  openGraph: {
    title: "Dental Treatments & Services in Accra, Ghana | New Vision Dental Clinic",
    description: "Comprehensive dental treatments across 3 modern clinics in Accra. Implants, whitening, braces, root canals & emergency care.",
    url: "https://newvisiondentalclinic.com/services",
    siteName: "New Vision Dental Clinic",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Services at New Vision Dental Clinic in Accra, Ghana",
      },
    ],
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
