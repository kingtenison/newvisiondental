import { getServerSupabase } from "@/app/lib/supabase-server";
import AdminUsersClient from "@/app/components/AdminUsersClient";

export const dynamic = "force-dynamic";

async function getUsers() {
  const supabase = getServerSupabase();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function AdminUsersPage() {
  const users = await getUsers();
  return <AdminUsersClient users={users} />;
}
