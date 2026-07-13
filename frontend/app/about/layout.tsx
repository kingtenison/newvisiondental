import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about New Vision Dental Clinic's mission, led by Dr. Felix Govina. We provide exceptional dental care across Accra with a patient-first approach.",
  openGraph: {
    title: "About New Vision Dental Clinic | Our Mission & Team",
    description: "Learn about our mission to provide exceptional dental care across Accra.",
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
