"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, Clock, LogOut, User, MapPin, Phone, CalendarDays, Shield } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

interface Appointment {
  id: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  notes: string | null;
}

const statusColors: Record<string, string> = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700",
};

export default function DashboardClient({ user, appointments }: { user: { id: string; email: string | undefined }; appointments: Appointment[] }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const quickActions = [
    { label: "Book Appointment", href: "/book", icon: Calendar, desc: "Schedule your next visit" },
    { label: "Our Services", href: "/services", icon: Shield, desc: "Browse treatments" },
    { label: "Our Locations", href: "/locations", icon: MapPin, desc: "Visit our closest branch" },
    { label: "Contact Us", href: "/contact", icon: Phone, desc: "Get in touch" },
  ];

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center border border-[#D4AF37]/20"><User className="w-5 h-5 text-[#D4AF37]" /></div>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase">Patient Portal</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">My Dashboard</h1>
              <p className="text-white/60 text-sm">Welcome back, {user.email?.split("@")[0]}!</p>
            </div>
            <button onClick={handleLogout} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/15 hover:bg-white/20 transition-all">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
              <div key={i} className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                <Link href={action.href} className="block bg-gray-50 rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group h-full">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#D4AF37]/20 transition-colors"><action.icon className="w-5 h-5 text-[#D4AF37]" /></div>
                  <h3 className="text-[#5C0F22] font-semibold text-sm mb-1">{action.label}</h3>
                  <p className="text-gray-500 text-xs">{action.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-4 pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-lg font-bold text-[#5C0F22] mb-4">Upcoming Appointments</h2>
          {appointments.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-[#D4AF37]/10">
              <Calendar className="w-12 h-12 text-[#D4AF37]/30 mx-auto mb-3" />
              <p className="text-gray-500 mb-4">No upcoming appointments</p>
              <Link href="/book" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C0F22] text-white rounded-full text-sm font-semibold hover:bg-[#7a1830] transition-colors">Book an Appointment</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div key={apt.id} className="bg-gray-50 rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center shrink-0"><Calendar className="w-6 h-6 text-[#D4AF37]" /></div>
                    <div>
                      <h3 className="text-[#5C0F22] font-semibold">{apt.service}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5 text-[#D4AF37]/50" />{new Date(apt.appointment_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#D4AF37]/50" />{apt.appointment_time}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`self-start sm:self-center px-3 py-1.5 rounded-full text-xs font-medium ${statusColors[apt.status]}`}>{apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
