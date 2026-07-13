import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your New Vision Dental Clinic account to manage your appointments and preferences.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/login",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
