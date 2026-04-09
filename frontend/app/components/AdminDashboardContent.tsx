"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, Clock, Users, MapPin, 
  AlertCircle, ArrowRight,
  Sparkles, Camera, FileText, LayoutDashboard, Settings, LogOut
} from "lucide-react";
import { supabase } from "@/app/lib/supabase";

const statusColors: Record<string, string> = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700"
};

const quickActions = [
  { label: "Appointments", href: "/admin/appointments", icon: Calendar },
  { label: "Services", href: "/admin/services", icon: Sparkles },
  { label: "Locations", href: "/admin/locations", icon: MapPin },
  { label: "Patients", href: "/admin/users", icon: Users },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Gallery", href: "/admin/gallery", icon: Camera },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminDashboardContent() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalAppointments: 0,
    todayAppointments: 0,
    pendingAppointments: 0,
    totalPatients: 0,
  });
  const [recentAppointments, setRecentAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { router.push("/login"); return; }
      setUser(session.user);
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
      if (profile?.role !== 'ADMIN') { router.push("/dashboard"); return; }
      setUserRole(profile?.role);

      const today = new Date().toISOString().split('T')[0];
      const [totalRes, todayRes, pendingRes, patientsRes, recentRes] = await Promise.all([
        supabase.from('appointments').select('id', { count: 'exact', head: true }),
        supabase.from('appointments').select('id', { count: 'exact', head: true }).eq('appointment_date', today),
        supabase.from('appointments').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('appointments').select('*').order('created_at', { ascending: false }).limit(5),
      ]);
      setStats({
        totalAppointments: totalRes.count || 0,
        todayAppointments: todayRes.count || 0,
        pendingAppointments: pendingRes.count || 0,
        totalPatients: patientsRes.count || 0,
      });
      if (recentRes.data) setRecentAppointments(recentRes.data);
      setIsLoading(false);
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || userRole !== "ADMIN") return null;

  const statCards = [
    { label: "Total Appointments", value: stats.totalAppointments, icon: Calendar },
    { label: "Today's Appointments", value: stats.todayAppointments, icon: Clock },
    { label: "Pending Approval", value: stats.pendingAppointments, icon: AlertCircle },
    { label: "Total Patients", value: stats.totalPatients, icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center border border-[#D4AF37]/20">
                  <LayoutDashboard className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase">Admin</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Dashboard</h1>
              <p className="text-white/60 text-sm">Welcome back, {user.email?.split('@')[0]}!</p>
            </div>
            <button onClick={handleLogout} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/15 hover:bg-white/20 transition-all">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Stats — CSS transitions instead of framer-motion */}
      <section className="w-full py-8 bg-[#FFFDF5]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 hover:shadow-md transition-all animate-[fadeInUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-2xl font-bold text-[#5C0F22]">{stat.value}</span>
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="w-full py-6 bg-[#FFFDF5]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-lg font-bold text-[#5C0F22] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="bg-white rounded-xl p-4 text-center border border-[#D4AF37]/15 hover:shadow-md hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <action.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <span className="text-xs font-medium text-gray-700">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Appointments */}
      <section className="w-full py-8 bg-[#FFFDF5]">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#5C0F22]">Recent Appointments</h2>
            <Link href="/admin/appointments" className="text-[#5C0F22] hover:text-[#D4AF37] text-sm font-medium flex items-center gap-1 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border border-[#D4AF37]/15">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    {["Patient", "Service", "Date", "Time", "Status"].map((header) => (
                      <th key={header} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentAppointments.length === 0 ? (
                    <tr><td colSpan={5} className="px-5 py-8 text-center text-gray-500 text-sm">No recent appointments</td></tr>
                  ) : (
                    recentAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-[#FFFDF5] transition">
                      <td className="px-5 py-3.5 text-sm font-medium text-[#5C0F22]">{apt.patient_name}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{apt.service}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{new Date(apt.appointment_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{apt.appointment_time}</td>
                      <td className="px-5 py-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[apt.status]}`}>{apt.status?.charAt(0).toUpperCase() + apt.status?.slice(1)}</span>
                      </td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
