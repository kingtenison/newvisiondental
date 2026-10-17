import type { Metadata } from "next";
import { getServerSupabase } from "@/app/lib/supabase-server";
import BlogClient from "@/app/components/BlogClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dental Health Blog & Expert Oral Care Guides | New Vision Dental Clinic Accra",
  description: "Expert dental health tips, oral hygiene advice & treatment insights from Dr. Felix Govina and the dental surgery team at New Vision Dental Clinic in Accra, Ghana.",
  keywords: [
    "dental health blog Ghana",
    "dentist advice Accra",
    "oral hygiene tips",
    "teeth whitening guide Ghana",
    "dental implants guide",
    "New Vision Dental Clinic blog",
  ],
  openGraph: {
    title: "Dental Health Blog & Expert Guides | New Vision Dental Clinic",
    description: "Expert dental health tips, guides, and insights from New Vision Dental Clinic in Accra, Ghana.",
    url: "https://newvisiondentalclinic.com/blog",
    siteName: "New Vision Dental Clinic",
    locale: "en_GH",
    type: "website",
  },
  alternates: {
    canonical: "https://newvisiondentalclinic.com/blog",
  },
};

async function getBlogPosts() {
  const supabase = getServerSupabase();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogClient posts={posts} />;
}
