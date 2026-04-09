import { NextResponse } from "next/server";
import { getAvailableSlots, formatDateForAPI } from "@/app/lib/booking-utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date");
  const serviceId = searchParams.get("serviceId");
  
  if (!dateParam) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }
  
  const date = new Date(dateParam);
  
  // Get available slots for the selected date
  const availableSlots = getAvailableSlots(date);
  
  return NextResponse.json({
    date: dateParam,
    slots: availableSlots,
    totalSlots: availableSlots.length
  });
}
