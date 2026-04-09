"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Mail, Phone, ArrowLeft, Search } from "lucide-react";

interface UserProfile {
  id: string;
  email: string;
  phone: string | null;
  role: string;
  created_at: string;
}

export default function AdminUsersClient({ users }: { users: UserProfile[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((u) =>
    (u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <Link href="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Manage Patients</h1>
          <p className="text-white/60 text-sm">{users.length} registered users</p>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50" />
            <input
              type="text"
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border-2 border-[#5C0F22]/15 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm"
            />
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden border border-[#5C0F22]/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    {["User", "Contact", "Member Since", "Role"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-white transition">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <span className="text-sm font-medium text-[#5C0F22]">
                            {user.email?.split("@")[0] || "Unknown"}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Mail className="w-3 h-3 text-[#D4AF37]/50" /> {user.email || "—"}
                        </p>
                        {user.phone && (
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3 text-[#D4AF37]/50" /> {user.phone}
                          </p>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">
                        {new Date(user.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                          {user.role || "USER"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-[#D4AF37]/20 mx-auto mb-3" />
                <p className="text-gray-500">No users found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
