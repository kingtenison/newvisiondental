import { NextResponse } from "next/server";
import { getServerSupabase } from "@/app/lib/supabase-server";

const validStatuses = ["pending", "confirmed", "completed", "cancelled"];

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
  };
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.OASIS_API_KEY;

    if (!apiKey || !authHeader || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: corsHeaders() });
    }

    const supabase = getServerSupabase();

    const { data: appointments, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500, headers: corsHeaders() });
    }

    return NextResponse.json({
      success: true,
      appointments: appointments || [],
      count: appointments?.length || 0
    }, { headers: corsHeaders() });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: corsHeaders() });
  }
}

export async function PATCH(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.OASIS_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: corsHeaders() });
    }

    const body = await request.json();
    const { appointmentId, synced } = body;

    if (!appointmentId) {
      return NextResponse.json({ error: "Missing appointment ID" }, { status: 400, headers: corsHeaders() });
    }

    const supabase = getServerSupabase();

    const updateData: { status?: string; synced_at?: string } = {};
    if (synced) {
      updateData.status = "confirmed";
      updateData.synced_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from("appointments")
      .update(updateData)
      .eq("id", appointmentId)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders() });
    }

    return NextResponse.json({ success: true, appointment: data }, { headers: corsHeaders() });
  } catch (error) {
    console.error("Oasis sync error:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500, headers: corsHeaders() });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.OASIS_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: corsHeaders() });
    }

    const body = await request.json();
    const { appointmentId, status, synced } = body;

    if (!appointmentId) {
      return NextResponse.json({ error: "Missing appointment ID" }, { status: 400, headers: corsHeaders() });
    }

    const supabase = getServerSupabase();

    const updateData: { status?: string; synced_at?: string } = {};
    if (status && validStatuses.includes(status)) {
      updateData.status = status;
      updateData.synced_at = new Date().toISOString();
    } else if (synced) {
      updateData.status = "confirmed";
      updateData.synced_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from("appointments")
      .update(updateData)
      .eq("id", appointmentId)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders() });
    }

    return NextResponse.json({ success: true, appointment: data }, { headers: corsHeaders() });
  } catch (error) {
    console.error("Oasis PUT error:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500, headers: corsHeaders() });
  }
}