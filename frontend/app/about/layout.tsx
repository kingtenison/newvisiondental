import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Felix Govina & New Vision Dental Clinic | Accra, Ghana",
  description: "Meet Dr. Felix Govina (BDS, MPH, MSc, 29+ yrs exp) and the specialist team at New Vision Dental Clinic. Former UN and Ghana Armed Forces dental officer delivering luxury, world-class dental care across 3 modern Accra clinics.",
  keywords: [
    "Dr Felix Govina dentist",
    "New Vision Dental Clinic founder",
    "about New Vision Dental",
    "best dentist in Accra Ghana",
    "dental surgeon Ghana",
    "dental clinic Accra history",
  ],
  openGraph: {
    title: "About Dr. Felix Govina & New Vision Dental Clinic | Accra, Ghana",
    description: "29+ years of clinical dentistry led by Dr. Felix Govina. 3 clinics in North Legon, Ashaley Botwe & ACP Estate Kwabenya.",
    url: "https://newvisiondentalclinic.com/about",
    siteName: "New Vision Dental Clinic",
    locale: "en_GH",
    type: "profile",
    images: [
      {
        url: "/images/team/CEO.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Felix Govina — Founder & CEO of New Vision Dental Clinic",
      },
    ],
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
