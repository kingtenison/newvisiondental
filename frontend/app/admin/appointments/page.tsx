"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Search, ArrowLeft, Eye, Edit, X, Check, Save } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

interface Appointment {
  id: string;
  patient_name: string;
  patient_phone: string;
  patient_email: string | null;
  service: string;
  appointment_date: string;
  appointment_time: string;
  notes: string | null;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700"
};

export default function AdminAppointmentsPage() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { router.push("/login"); return; }
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
      if (profile?.role !== 'ADMIN') { router.push("/dashboard"); return; }
      fetchAppointments();
    };
    checkAuth();
  }, [router]);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('appointment_date', { ascending: false })
      .order('appointment_time', { ascending: true });
    
    if (!error && data) setAppointments(data);
    setIsLoading(false);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('appointments')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', id);
    
    if (!error) {
      setAppointments(appointments.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt));
      setEditingId(null);
    }
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          apt.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (apt.patient_email?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesStatus = statusFilter === "all" || apt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <Link href="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Manage Appointments</h1>
          <p className="text-white/60 text-sm">{appointments.length} total appointments</p>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50" />
                <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2.5 border-2 border-[#5C0F22]/15 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm w-64" />
              </div>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 border-2 border-[#5C0F22]/15 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 text-sm">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden border border-[#5C0F22]/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    {["Patient", "Service", "Date", "Time", "Status", "Actions"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-white transition">
                      <td className="px-5 py-3.5">
                        <p className="text-sm font-medium text-[#5C0F22]">{apt.patient_name}</p>
                        <p className="text-xs text-gray-500">{apt.patient_email || apt.patient_phone}</p>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{apt.service}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{new Date(apt.appointment_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{apt.appointment_time}</td>
                      <td className="px-5 py-3.5">
                        {editingId === apt.id ? (
                          <div className="flex items-center gap-1">
                            <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}
                              className="px-2 py-1 rounded-lg border text-xs bg-white">
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                            <button onClick={() => handleStatusChange(apt.id, editStatus)} className="p-1 text-green-600 hover:bg-green-50 rounded"><Check className="w-3.5 h-3.5" /></button>
                            <button onClick={() => setEditingId(null)} className="p-1 text-gray-400 hover:bg-gray-100 rounded"><X className="w-3.5 h-3.5" /></button>
                          </div>
                        ) : (
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[apt.status] || "bg-gray-100 text-gray-700"}`}>{apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5">
                        <button onClick={() => { setEditingId(apt.id); setEditStatus(apt.status); }} className="p-1.5 text-gray-400 hover:text-[#D4AF37] transition rounded-lg hover:bg-[#D4AF37]/5">
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredAppointments.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-[#D4AF37]/20 mx-auto mb-3" />
                <p className="text-gray-500">No appointments found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
