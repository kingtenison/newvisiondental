import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Dental Appointment Online | New Vision Dental Clinic Accra",
  description: "Schedule your dental appointment online at New Vision Dental Clinic. Select your preferred branch in North Legon, Ashaley Botwe, or ACP Estate Kwabenya. Instant confirmation.",
  keywords: [
    "book dentist appointment Accra",
    "dental appointment online Ghana",
    "New Vision Dental booking",
    "emergency dentist appointment Accra",
  ],
  alternates: {
    canonical: "https://newvisiondentalclinic.com/book",
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
