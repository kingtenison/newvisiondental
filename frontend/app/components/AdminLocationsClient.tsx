"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Plus, Edit, Trash2, ArrowLeft, X, Save } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

interface Location {
  id: string;
  name: string;
  slug: string;
  address: string;
  phone: string;
  hours: string;
  is_active: boolean;
}

export default function AdminLocationsClient({ locations: initial }: { locations: Location[] }) {
  const [locations, setLocations] = useState(initial);
  const [showModal, setShowModal] = useState(false);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", hours: "" });

  const handleAdd = () => { setEditingLocation(null); setFormData({ name: "", address: "", phone: "", hours: "" }); setShowModal(true); };
  const handleEdit = (l: Location) => { setEditingLocation(l); setFormData({ name: l.name, address: l.address, phone: l.phone, hours: l.hours }); setShowModal(true); };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this location?")) return;
    const { error } = await supabase.from("locations").delete().eq("id", id);
    if (!error) setLocations(locations.filter((l) => l.id !== id));
  };

  const handleToggleActive = async (location: Location) => {
    const { error } = await supabase.from("locations").update({ is_active: !location.is_active }).eq("id", location.id);
    if (!error) setLocations(locations.map((l) => (l.id === location.id ? { ...l, is_active: !l.is_active } : l)));
  };

  const handleSave = async () => {
    if (editingLocation) {
      const { error } = await supabase.from("locations").update({ name: formData.name, address: formData.address, phone: formData.phone, hours: formData.hours }).eq("id", editingLocation.id);
      if (!error) {
        setLocations(locations.map((l) => (l.id === editingLocation.id ? { ...l, ...formData } : l)));
        setShowModal(false);
      }
    } else {
      const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const { data, error } = await supabase.from("locations").insert({ name: formData.name, slug, address: formData.address, phone: formData.phone, hours: formData.hours, is_active: true }).select().single();
      if (!error && data) {
        setLocations([...locations, data]);
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Manage Locations</h1>
              <p className="text-white/60 text-sm">{locations.length} clinic locations</p>
            </div>
            <button onClick={handleAdd} className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8C547] transition-colors shadow-lg shadow-[#D4AF37]/25">
              <Plus className="w-4 h-4" /> Add Location
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {locations.map((location) => (
              <div key={location.id} className="bg-gray-50 rounded-xl p-5 border border-[#5C0F22]/10 hover:border-[#5C0F22]/25 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center"><MapPin className="w-5 h-5 text-[#D4AF37]" /></div>
                    <h3 className="font-bold text-[#5C0F22]">{location.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(location)} className="p-1.5 text-gray-400 hover:text-[#D4AF37] transition rounded-lg hover:bg-[#D4AF37]/5"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(location.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="space-y-2.5 mb-4">
                  <p className="text-sm text-gray-600 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#D4AF37]/50" />{location.address}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2"><Phone className="w-4 h-4 text-[#D4AF37]/50" />{location.phone}</p>
                  <p className="text-sm text-gray-600 flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#D4AF37]/50" />{location.hours}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${location.is_active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>{location.is_active ? "Active" : "Inactive"}</span>
                  <button onClick={() => handleToggleActive(location)} className="text-xs text-[#5C0F22] hover:text-[#D4AF37] font-medium transition-colors">{location.is_active ? "Deactivate" : "Activate"}</button>
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
              <h2 className="text-xl font-bold text-[#5C0F22]">{editingLocation ? "Edit Location" : "Add New Location"}</h2>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><X className="w-4 h-4 text-gray-500" /></button>
            </div>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Location Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm" placeholder="e.g. North Legon" />
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm" placeholder="Full address" />
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm" placeholder="e.g. 0559497906" />
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-2">Hours</label>
                <textarea value={formData.hours} onChange={(e) => setFormData({ ...formData, hours: e.target.value })} rows={2} className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm resize-none" placeholder="e.g. Mon-Sat: 8am-5pm" />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-medium text-sm hover:bg-gray-50 transition">Cancel</button>
                <button onClick={handleSave} className="flex-1 bg-[#5C0F22] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-[#7a1830] transition flex items-center justify-center gap-2"><Save className="w-4 h-4" />{editingLocation ? "Save" : "Add"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
