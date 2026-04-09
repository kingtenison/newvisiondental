import { getServerSupabase } from "@/app/lib/supabase-server";
import BlogClient from "@/app/components/BlogClient";

export const dynamic = "force-dynamic";

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
