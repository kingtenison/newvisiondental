import type { Metadata } from "next";
import { getServerSupabase } from "@/app/lib/supabase-server";
import BlogClient from "@/app/components/BlogClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dental Health Blog",
  description: "Expert dental health tips, guides, and insights from New Vision Dental Clinic. Learn about oral hygiene, treatments, and maintaining a healthy smile.",
  openGraph: {
    title: "Dental Health Blog | New Vision Dental Clinic",
    description: "Expert dental health tips, guides, and insights from New Vision Dental Clinic.",
  },
  alternates: {
    canonical: "https://newvisiondental.com/blog",
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
