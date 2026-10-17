import type { Metadata } from "next";
import { getServerSupabase } from "@/app/lib/supabase-server";
import GalleryClient from "@/app/components/GalleryClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Smile Transformation Gallery | Before & After Dental Care Accra",
  description: "See real patient smile transformations at New Vision Dental Clinic in Accra, Ghana. Browse verified before and after photos of BlancOne teeth whitening, dental implants, veneers, and orthodontics.",
  keywords: [
    "smile gallery Accra",
    "before and after teeth whitening Ghana",
    "dental implants before after Accra",
    "cosmetic dentistry results Ghana",
    "dental clinic transformations Accra",
  ],
  openGraph: {
    title: "Smile Transformation Gallery | Before & After Dental Care Accra",
    description: "Real patient transformations — browse verified before and after dental photos at New Vision Dental Clinic.",
    url: "https://newvisiondentalclinic.com/gallery",
    siteName: "New Vision Dental Clinic",
    locale: "en_GH",
    type: "website",
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/gallery",
  },
};

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image_url: string;
  is_before_after: boolean;
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  const supabase = getServerSupabase();
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data;
}

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

  return <GalleryClient images={images} categories={categories} />;
}
