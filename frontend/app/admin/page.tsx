import { redirect } from "next/navigation";
import { createServerSupabase, getServerSupabase } from "@/app/lib/supabase-server";
import AdminDashboardClient from "@/app/components/AdminDashboardClient";

export const dynamic = "force-dynamic";

async function getAdminDashboardData() {
  const authClient = await createServerSupabase();
  const { data: { user } } = await authClient.auth.getUser();
  if (!user) redirect("/login");

  const supabase = getServerSupabase();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile && profile.role !== "ADMIN") redirect("/dashboard");

  const today = new Date().toISOString().split("T")[0];

  const [totalRes, todayRes, pendingRes, patientsRes, recentRes] = await Promise.all([
    supabase.from("appointments").select("id", { count: "exact", head: true }),
    supabase.from("appointments").select("id", { count: "exact", head: true }).eq("appointment_date", today),
    supabase.from("appointments").select("id", { count: "exact", head: true }).eq("status", "pending"),
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("appointments").select("*").order("created_at", { ascending: false }).limit(5),
  ]);

  return {
    user: { id: user.id, email: user.email },
    stats: {
      totalAppointments: totalRes.count || 0,
      todayAppointments: todayRes.count || 0,
      pendingAppointments: pendingRes.count || 0,
      totalPatients: patientsRes.count || 0,
    },
    recentAppointments: recentRes.data || [],
  };
}

export default async function AdminDashboardPage() {
  const data = await getAdminDashboardData();
  return <AdminDashboardClient user={data.user} stats={data.stats} recentAppointments={data.recentAppointments} />;
}
