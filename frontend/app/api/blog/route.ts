import { NextResponse } from "next/server";
import { createServerSupabase } from "@/app/lib/supabase-server";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabase();

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: corsHeaders() });
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profile?.role !== 'ADMIN') {
      return NextResponse.json({ error: "Admin access required" }, { status: 403, headers: corsHeaders() });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, featured_image, author, read_time, tags, status } = body;

    const { data, error } = await supabase
      .from('blogs')
      .insert({
        title,
        slug,
        excerpt,
        content,
        featured_image,
        author,
        read_time,
        tags,
        status,
        published_at: status === 'published' ? new Date().toISOString() : null
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders() });
    }

    return NextResponse.json(data, { headers: corsHeaders() });

  } catch (error) {
    console.error("Blog creation error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500, headers: corsHeaders() });
  }
}
