import { getServerSupabase } from "@/app/lib/supabase-server";
import GalleryClient from "@/app/components/GalleryClient";

export const dynamic = "force-dynamic";

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
