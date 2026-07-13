import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "Visit New Vision Dental Clinic at three convenient locations across Accra: North Legon, Ashaley Botwe, and ACP Estate. Book your appointment today.",
  openGraph: {
    title: "Our Locations | New Vision Dental Clinic",
    description: "Three convenient dental clinic locations across Accra. Find the one nearest to you.",
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/locations",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
