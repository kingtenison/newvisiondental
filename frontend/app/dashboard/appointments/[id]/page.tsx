"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
import { 
  Calendar, Clock, MapPin, User, Phone, Mail, 
  ArrowLeft, CheckCircle, XCircle, AlertCircle,
  Calendar as CalendarIcon
} from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { formatDate } from "@/app/lib/utils";

// Mock appointment data (replace with API call later)
const mockAppointments = {
  "1": {
    id: "1",
    service: "Dental Implants",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    time: "10:00 AM",
    location: "North Legon",
    status: "confirmed",
    dentist: "Dr. Kwame Asante",
    notes: "Please arrive 15 minutes early. Bring any relevant medical records.",
    address: "Agbogba Road, North Legon, Accra",
    phone: "+233 55 949 7906",
    duration: "2-3 visits"
  },
  "2": {
    id: "2",
    service: "Teeth Whitening",
    date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    time: "2:30 PM",
    location: "Ashaley Botwe",
    status: "pending",
    dentist: "Dr. Abena Serwaa",
    notes: "",
    address: "School Junction, Ashaley Botwe, Accra",
    phone: "+233 25 709 1176",
    duration: "60 mins"
  }
};

const statusConfig = {
  confirmed: { color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30", icon: CheckCircle, message: "Your appointment is confirmed" },
  pending: { color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-900/30", icon: AlertCircle, message: "Awaiting confirmation" },
  cancelled: { color: "text-red-600 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30", icon: XCircle, message: "This appointment has been cancelled" },
  completed: { color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30", icon: CheckCircle, message: "This appointment has been completed" }
};

export default function AppointmentDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [authStatus, setAuthStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");
  const [appointment, setAppointment] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        setAuthStatus("unauthenticated");
        router.push("/login");
        return;
      }
      setUser(session.user);
      setAuthStatus("authenticated");
      
      // Simulate API call
      setTimeout(() => {
        setAppointment(mockAppointments[params.id as keyof typeof mockAppointments] || null);
        setIsLoading(false);
      }, 500);
    };
    checkAuth();
  }, [router, params.id]);

  if (authStatus === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading appointment details...</p>
        </div>
      </div>
    );
  }

  if (!user || !appointment) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20">
        <div className="text-center py-20">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Appointment Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The appointment you're looking for doesn't exist.</p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const statusInfo = statusConfig[appointment.status as keyof typeof statusConfig];
  const StatusIcon = statusInfo.icon;

  return (
    <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-primary to-primary-dark py-8 md:py-12">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <FadeIn>
            <Link href="/dashboard" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Appointment Details</h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-8 md:py-12">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                {/* Status Banner */}
                <div className={`${statusInfo.bg} rounded-xl p-4 mb-6 flex items-center gap-3`}>
                  <StatusIcon className={`w-5 h-5 ${statusInfo.color}`} />
                  <span className={`font-medium ${statusInfo.color}`}>{statusInfo.message}</span>
                </div>

                {/* Service Info */}
                <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl p-6 mb-6 border border-gray-200 dark:border-[#333333]">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Service Information</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-[#333333]">
                      <span className="text-gray-600 dark:text-gray-400">Service</span>
                      <span className="font-medium text-gray-800 dark:text-white">{appointment.service}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-[#333333]">
                      <span className="text-gray-600 dark:text-gray-400">Duration</span>
                      <span className="font-medium text-gray-800 dark:text-white">{appointment.duration}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-[#333333]">
                      <span className="text-gray-600 dark:text-gray-400">Dentist</span>
                      <span className="font-medium text-gray-800 dark:text-white">{appointment.dentist}</span>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl p-6 mb-6 border border-gray-200 dark:border-[#333333]">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Date & Time</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-gray-800 dark:text-white">{formatDate(appointment.date)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-gray-800 dark:text-white">{appointment.time}</span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {appointment.notes && (
                  <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl p-6 border border-gray-200 dark:border-[#333333]">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Special Instructions</h2>
                    <p className="text-gray-600 dark:text-gray-400">{appointment.notes}</p>
                  </div>
                )}
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                {/* Location Card */}
                <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl p-6 mb-6 border border-gray-200 dark:border-[#333333]">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Location</h3>
                  <div className="space-y-3">
                    <p className="text-gray-800 dark:text-white font-medium">{appointment.location}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.address}</p>
                    <a href={`tel:${appointment.phone}`} className="text-primary hover:underline text-sm">
                      {appointment.phone}
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#333333]">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(appointment.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
                    >
                      Get Directions
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Actions */}
                {appointment.status === "confirmed" && (
                  <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl p-6 border border-gray-200 dark:border-[#333333]">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Need to Change?</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-primary text-white px-4 py-3 rounded-xl font-medium hover:bg-primary-dark transition">
                        Reschedule Appointment
                      </button>
                      <button className="w-full border-2 border-red-500 text-red-500 px-4 py-3 rounded-xl font-medium hover:bg-red-500 hover:text-white transition">
                        Cancel Appointment
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                      Please cancel at least 24 hours in advance
                    </p>
                  </div>
                )}

                {/* Contact */}
                <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl p-6 border border-gray-200 dark:border-[#333333]">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Have questions about your appointment?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Contact Clinic
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
