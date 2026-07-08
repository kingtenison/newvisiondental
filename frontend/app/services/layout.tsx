import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore 14 expert dental services at New Vision Dental Clinic — from teeth whitening and implants to emergency dentistry. Book your appointment today.",
  openGraph: {
    title: "Dental Services | New Vision Dental Clinic",
    description: "Comprehensive dental care — 14 expert services across 3 Accra locations.",
  },
  alternates: {
    canonical: "https://newvisiondental.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
