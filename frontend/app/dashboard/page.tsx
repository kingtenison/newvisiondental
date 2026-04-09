import { redirect } from "next/navigation";
import { createServerSupabase, getServerSupabase } from "@/app/lib/supabase-server";
import DashboardClient from "@/app/components/DashboardClient";

export const dynamic = "force-dynamic";

async function getDashboardData() {
  const authClient = await createServerSupabase();
  const { data: { user } } = await authClient.auth.getUser();
  if (!user) redirect("/login");

  const supabase = getServerSupabase();
  const today = new Date().toISOString().split("T")[0];
  const { data: appointments } = await supabase
    .from("appointments")
    .select("*")
    .eq("user_id", user.id)
    .gte("appointment_date", today)
    .order("appointment_date", { ascending: true })
    .limit(5);

  return { user: { id: user.id, email: user.email }, appointments: appointments || [] };
}

export default async function DashboardPage() {
  const { user, appointments } = await getDashboardData();
  return <DashboardClient user={user} appointments={appointments} />;
}
