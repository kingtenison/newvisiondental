import { NextResponse } from "next/server";
import { getServerSupabase } from "@/app/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const supabase = getServerSupabase();
    const body = await request.json();
    const { full_name, email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create user with auto-confirm using admin API
    // The on_auth_user_created trigger will still fire and create the profile
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name }
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: authData.user });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}