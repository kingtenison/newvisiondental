import { ArrowLeft, Settings, Shield, Bell, Globe, Database } from "lucide-react";
import Link from "next/link";

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <Link href="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Settings</h1>
          <p className="text-white/60 text-sm">Manage your clinic settings</p>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: Shield, label: "Security", desc: "Password, two-factor authentication, session management" },
              { icon: Bell, label: "Notifications", desc: "Email alerts, appointment reminders, system notifications" },
              { icon: Globe, label: "General", desc: "Clinic name, contact info, business hours" },
              { icon: Database, label: "Data & Privacy", desc: "Export data, backup settings, privacy controls" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-6 border border-[#5C0F22]/10 hover:border-[#5C0F22]/25 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-[#5C0F22] mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
