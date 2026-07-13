import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your New Vision Dental Clinic account for easy appointment booking and management.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/register",
  },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
