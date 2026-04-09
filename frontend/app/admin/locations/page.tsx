import { getServerSupabase } from "@/app/lib/supabase-server";
import AdminLocationsClient from "@/app/components/AdminLocationsClient";

export const dynamic = "force-dynamic";

async function getLocations() {
  const supabase = getServerSupabase();
  const { data } = await supabase
    .from("locations")
    .select("*")
    .order("created_at", { ascending: true });

  return data || [];
}

export default async function AdminLocationsPage() {
  const locations = await getLocations();
  return <AdminLocationsClient locations={locations} />;
}
