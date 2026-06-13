import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendToOasis } from "@/app/lib/oasis";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const validStatuses = ["pending", "confirmed", "completed", "cancelled"];

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, location, date, time, notes } = body;
    
    if (!name || !phone || !service || !location || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers: corsHeaders() });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        patient_name: name,
        patient_phone: phone,
        patient_email: email || null,
        service,
        location,
        appointment_date: date.split('T')[0],
        appointment_time: time,
        notes: notes || "",
        status: 'pending'
      })
      .select()
      .single();
    
    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message || "Failed to book appointment" }, { status: 500, headers: corsHeaders() });
    }

    // Sync to Oasis HMS (fire and forget - don't block user response)
    sendToOasis({
      patientName: name,
      patientPhone: phone,
      patientEmail: email,
      service,
      location,
      appointmentDate: date.split('T')[0],
      appointmentTime: time,
      notes,
      source: "website"
    }).catch(err => console.error("Oasis sync background error:", err));
     
    return NextResponse.json({
      success: true,
      appointment: data,
      message: "Appointment booked successfully!"
    }, { headers: corsHeaders() });
     
  } catch (error: unknown) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500, headers: corsHeaders() });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const date = searchParams.get('date');

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    let query = supabase
      .from('appointments')
      .select('*')
      .order('appointment_date', { ascending: true });
    
    if (status) query = query.eq('status', status);
    if (date) query = query.eq('appointment_date', date);
    
    const { data, error } = await query;
    
    if (error) {
      return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500, headers: corsHeaders() });
    }

    return NextResponse.json(data, { headers: corsHeaders() });
  } catch (error: unknown) {
    console.error("Failed to fetch appointments:", error)
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500, headers: corsHeaders() });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing appointment ID" }, { status: 400, headers: corsHeaders() });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const updateData: { status?: string; notes?: string; synced_at?: string } = {};

    if (status && validStatuses.includes(status)) {
      updateData.status = status;
      updateData.synced_at = new Date().toISOString();
    }
    if (notes) {
      updateData.notes = notes;
    }

    const { data, error } = await supabase
      .from('appointments')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message || "Failed to update appointment" }, { status: 500, headers: corsHeaders() });
    }

    return NextResponse.json({ success: true, appointment: data }, { headers: corsHeaders() });
  } catch (error: unknown) {
    console.error("Update appointment error:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500, headers: corsHeaders() });
  }
}