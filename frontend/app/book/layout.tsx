import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Book your dental appointment at New Vision Dental Clinic. Choose from 15 services across 3 locations in Accra. Same-day appointments available.",
  openGraph: {
    title: "Book a Dental Appointment | New Vision Dental Clinic",
    description: "Schedule your visit — choose from 15 services across 3 Accra locations.",
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/book",
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
