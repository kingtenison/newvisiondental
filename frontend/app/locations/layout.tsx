import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Clinic Locations in Accra | North Legon, Ashaley Botwe, ACP Estate",
  description: "Find your nearest New Vision Dental Clinic in Accra, Ghana. 3 modern dental clinics in North Legon (Agbogba Rd), Ashaley Botwe (School Jct), and ACP Estate (Kwabenya). Implants, whitening, braces & emergency care.",
  keywords: [
    "dental clinic locations Accra",
    "dentist near me Accra",
    "dentist North Legon",
    "dentist Ashaley Botwe",
    "dentist Kwabenya ACP Estate",
    "dental clinic Ghana",
    "emergency dentist Accra",
  ],
  openGraph: {
    title: "Dental Clinic Locations in Accra | North Legon, Ashaley Botwe, ACP Estate",
    description: "Three convenient, modern dental clinic locations across Accra, Ghana. Find the branch nearest to you and book today.",
    url: "https://newvisiondentalclinic.com/locations",
    siteName: "New Vision Dental Clinic",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/images/locations/north-legon-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "New Vision Dental Clinic Locations in Accra, Ghana",
      },
    ],
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/locations",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
