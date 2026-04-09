import { getServerSupabase } from "@/app/lib/supabase-server";
import AdminServicesClient from "@/app/components/AdminServicesClient";

export const dynamic = "force-dynamic";

async function getServices() {
  const supabase = getServerSupabase();
  const { data } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  return data || [];
}

export default async function AdminServicesPage() {
  const services = await getServices();
  return <AdminServicesClient services={services} />;
}
