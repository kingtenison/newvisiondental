import { NextRequest, NextResponse } from "next/server";
import { getServerSupabase } from "@/app/lib/supabase-server";

const validStatuses = ["pending", "confirmed", "completed", "cancelled"];

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  try {
    const body = await request.json();
    const { status, notes } = body;

    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const supabase = getServerSupabase();

    const updateData: { status: string; notes?: string; updated_at: string } = {
      status,
      updated_at: new Date().toISOString()
    };
    
    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const { data, error } = await supabase
      .from("appointments")
      .update(updateData)
      .eq("id", params.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, appointment: data });
  } catch (error: unknown) {
    console.error("Appointment update error:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 });
  }
}

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  try {
    const supabase = getServerSupabase();

    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Appointment fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch appointment" }, { status: 500 });
  }
}