"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Clock, ArrowLeft, X, Save } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

interface Service {
  id: string;
  name: string;
  slug: string;
  duration: string;
  is_active: boolean;
}

export default function AdminServicesClient({ services: initial }: { services: Service[] }) {
  const [services, setServices] = useState(initial);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ name: "", duration: "" });

  const handleAdd = () => { setEditingService(null); setFormData({ name: "", duration: "" }); setShowModal(true); };
  const handleEdit = (s: Service) => { setEditingService(s); setFormData({ name: s.name, duration: s.duration }); setShowModal(true); };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (!error) setServices(services.filter((s) => s.id !== id));
  };

  const handleToggleActive = async (service: Service) => {
    const { error } = await supabase.from("services").update({ is_active: !service.is_active }).eq("id", service.id);
    if (!error) setServices(services.map((s) => (s.id === service.id ? { ...s, is_active: !s.is_active } : s)));
  };

  const handleSave = async () => {
    if (editingService) {
      const { error } = await supabase.from("services").update({ name: formData.name, duration: formData.duration }).eq("id", editingService.id);
      if (!error) {
        setServices(services.map((s) => (s.id === editingService.id ? { ...s, ...formData } : s)));
        setShowModal(false);
      }
    } else {
      const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const { data, error } = await supabase.from("services").insert({ name: formData.name, slug, duration: formData.duration, is_active: true, sort_order: services.length + 1 }).select().single();
      if (!error && data) {
        setServices([...services, data]);
        setShowModal(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <Link href="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Manage Services</h1>
              <p className="text-white/60 text-sm">{services.length} services</p>
            </div>
            <button onClick={handleAdd} className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8C547] transition-colors shadow-lg shadow-[#D4AF37]/25">
              <Plus className="w-4 h-4" /> Add Service
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-5 border border-[#5C0F22]/10 hover:border-[#5C0F22]/25 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#5C0F22]">{service.name}</h3>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(service)} className="p-1.5 text-gray-400 hover:text-[#D4AF37] transition rounded-lg hover:bg-[#D4AF37]/5"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(service.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4"><Clock className="w-4 h-4 text-[#D4AF37]/60" />{service.duration}</div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${service.is_active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>{service.is_active ? "Active" : "Inactive"}</span>
                  <button onClick={() => handleToggleActive(service)} className="text-xs text-[#5C0F22] hover:text-[#D4AF37] font-medium transition-colors">{service.is_active ? "Deactivate" : "Activate"}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#5C0F22]/15 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-[#5C0F22]">{editingService ? "Edit Service" : "Add New Service"}</h2>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><X className="w-4 h-4 text-gray-500" /></button>
            </div>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm" placeholder="e.g. Teeth Whitening" />
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm" placeholder="e.g. 60 mins" />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-medium text-sm hover:bg-gray-50 transition">Cancel</button>
                <button onClick={handleSave} className="flex-1 bg-[#5C0F22] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-[#7a1830] transition flex items-center justify-center gap-2"><Save className="w-4 h-4" />{editingService ? "Save" : "Add"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
