import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET() {
  try {
    // First, let's check if we can get the session from NextAuth
    // Since we can't import authOptions easily, we'll test the blog insert directly with a known admin user ID
    
    const adminUserId = "f0bcea09-1780-41c9-8b46-9c693524caaa";
    
    // Check if admin profile exists
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', adminUserId)
      .single();
    
    // Test insert a test blog
    const testBlog = {
      title: "Test Blog " + new Date().toISOString(),
      slug: "test-blog-" + Date.now(),
      excerpt: "This is a test blog to check permissions",
      content: "<p>Test content</p>",
      author: profile?.name || "Admin",
      status: "draft",
      tags: ["test"]
    };
    
    const { data: blog, error: blogError } = await supabase
      .from('blogs')
      .insert([testBlog])
      .select();
    
    return NextResponse.json({
      profile: profile,
      profileError: profileError,
      testBlog: testBlog,
      blogResult: blog,
      blogError: blogError ? {
        message: blogError.message,
        details: blogError.details,
        hint: blogError.hint
      } : null
    });
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
