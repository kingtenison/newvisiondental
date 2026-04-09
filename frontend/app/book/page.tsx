"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ArrowRight, ChevronRight, MessageCircle, Sparkles, ArrowLeft, MapPin } from "lucide-react";
import { services, getAvailableDates, formatDate, getAvailableSlots } from "@/app/lib/booking-utils";
import { supabase } from "@/app/lib/supabase";

const locations = [
  { id: "north-legon", name: "North Legon", address: "Agbogba Road, North Legon, Accra" },
  { id: "ashaley-botwe", name: "Ashaley Botwe", address: "School Junction, Ashaley Botwe, Accra" },
  { id: "acp-estate", name: "ACP Estate", address: "ACP Estate Junction, Kwabenya, Accra" },
];

type BookingStep = "details" | "service" | "date" | "time" | "location" | "confirmation";

export default function BookPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<BookingStep>("details");
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const availableDates = getAvailableDates();

  useEffect(() => {
    if (selectedDate) {
      const slots = getAvailableSlots(selectedDate);
      setAvailableSlots(slots);
      setSelectedTime(null);
    }
  }, [selectedDate]);

  const handleDetailsSubmit = () => {
    if (formData.name && formData.phone) {
      setCurrentStep("service");
    }
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setCurrentStep("date");
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep("location");
  };

  const handleLocationSelect = async (location: any) => {
    setSelectedLocation(location);
    setIsLoading(true);
    setError("");

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (session?.access_token) {
        headers["Authorization"] = `Bearer ${session.access_token}`;
      }

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: selectedService.name,
          location: location.name,
          date: selectedDate?.toISOString(),
          time: selectedTime,
          notes: formData.notes
        })
      });

      const data = await response.json();

      if (data.success) {
        setBookingId(data.appointment.id);
        setBookingSuccess(true);
        setCurrentStep("confirmation");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setCurrentStep("location");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError("Failed to book appointment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Get auth token from session
      const { data: { session } } = await supabase.auth.getSession();
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (session?.access_token) {
        headers["Authorization"] = `Bearer ${session.access_token}`;
      }

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: selectedService.name,
          location: selectedLocation.name,
          date: selectedDate?.toISOString(),
          time: selectedTime,
          notes: formData.notes
        })
      });

      const data = await response.json();

      if (data.success) {
        setBookingId(data.appointment.id);
        setBookingSuccess(true);
        setCurrentStep("confirmation");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError("Failed to book appointment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewBooking = () => {
    setSelectedLocation(null);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", phone: "", email: "", notes: "" });
    setError("");
    setCurrentStep("details");
  };

  const steps = [
    { key: "details", label: "Details" },
    { key: "service", label: "Service" },
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "location", label: "Location" },
    { key: "confirmation", label: "Confirm" }
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14 text-center">
          <div className="animate-[fadeInUp_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
              <Calendar className="w-4 h-4" /> Book Online
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Book Your <span className="text-golden-shine">Appointment</span>
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Schedule your dental visit in minutes. Fill in your details, choose your service, date and location.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="w-full bg-[#FFFDF5] border-b border-[#D4AF37]/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.key} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStepIndex > index
                    ? "bg-[#D4AF37] text-[#1a0a10]"
                    : currentStepIndex === index
                    ? "bg-[#5C0F22] text-white shadow-md shadow-[#5C0F22]/30"
                    : "bg-white text-gray-400 border-2 border-gray-200"
                }`}>
                  {currentStepIndex > index ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`text-xs mt-1.5 hidden sm:block font-medium ${
                  currentStepIndex >= index ? "text-[#5C0F22]" : "text-gray-400"
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-3 max-w-3xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full transition-all duration-500" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">

          {/* Step 0: Your Details */}
          {currentStep === "details" && (
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Your Details</h2>
              <p className="text-gray-500 text-center mb-8">Fill in your information to get started</p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm max-w-2xl mx-auto mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={(e) => { e.preventDefault(); handleDetailsSubmit(); }} className="max-w-2xl mx-auto space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm resize-none"
                    placeholder="Any special requests or questions?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!formData.name || !formData.phone}
                  className="w-full py-3 bg-[#5C0F22] text-white rounded-xl font-semibold hover:bg-[#7a1830] shadow-lg shadow-[#5C0F22]/20 hover:shadow-xl transition-all duration-300 disabled:opacity-50 inline-flex items-center justify-center gap-2 text-sm"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* Step 1: Select Service */}
          {currentStep === "service" && (
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Choose Your Service</h2>
              <p className="text-gray-500 text-center mb-8">Select the treatment you'd like to book</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="bg-white rounded-2xl p-5 text-left border-2 border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#5C0F22] group-hover:text-[#D4AF37] transition-colors text-sm">
                          {service.name}
                        </h3>
                        <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-[#D4AF37]" />
                          {service.duration}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-center mt-8 text-sm text-gray-400 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                30+ patients booked today
              </p>
              <button onClick={() => setCurrentStep("details")} className="mt-4 flex items-center gap-2 text-[#5C0F22] hover:text-[#D4AF37] text-sm font-medium transition-colors mx-auto">
                <ArrowLeft className="w-4 h-4" /> Back to details
              </button>
            </div>
          )}

          {/* Step 2: Select Date */}
          {currentStep === "date" && selectedService && (
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Choose a Date</h2>
              <p className="text-gray-500 text-center mb-8">
                {selectedService.name} — {selectedService.duration}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {availableDates.map((date, index) => {
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      className={`py-3 px-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                        isSelected
                          ? "bg-[#D4AF37] text-[#1a0a10] shadow-lg shadow-[#D4AF37]/30"
                          : "bg-white text-gray-700 border-2 border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-md"
                      }`}
                    >
                      {formatDate(date)}
                    </button>
                  );
                })}
              </div>
              <button onClick={() => setCurrentStep("service")} className="mt-8 flex items-center gap-2 text-[#5C0F22] hover:text-[#D4AF37] text-sm font-medium transition-colors mx-auto">
                <ArrowLeft className="w-4 h-4" /> Back to service
              </button>
            </div>
          )}

          {/* Step 3: Select Time */}
          {currentStep === "time" && selectedDate && (
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Choose a Time</h2>
              <p className="text-gray-500 text-center mb-8">{formatDate(selectedDate)}</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => handleTimeSelect(slot)}
                    className={`py-3 px-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                      selectedTime === slot
                        ? "bg-[#D4AF37] text-[#1a0a10] shadow-lg shadow-[#D4AF37]/30"
                        : "bg-white text-gray-700 border-2 border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-md"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {availableSlots.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No available slots for this date.</p>
                  <button onClick={() => setCurrentStep("date")} className="mt-4 text-[#5C0F22] hover:text-[#D4AF37] font-medium text-sm">
                    Choose another date
                  </button>
                </div>
              )}
              <button onClick={() => setCurrentStep("date")} className="mt-8 flex items-center gap-2 text-[#5C0F22] hover:text-[#D4AF37] text-sm font-medium transition-colors mx-auto">
                <ArrowLeft className="w-4 h-4" /> Back to date
              </button>
            </div>
          )}

          {/* Step 4: Select Location */}
          {currentStep === "location" && selectedService && selectedDate && selectedTime && (
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Choose a Location</h2>
              <p className="text-gray-500 text-center mb-8">Select the clinic nearest to you</p>

              {/* Summary */}
              <div className="bg-[#FFFDF5] rounded-2xl p-5 mb-8 border border-[#D4AF37]/15 max-w-2xl mx-auto">
                <h3 className="font-semibold text-[#5C0F22] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" /> Appointment Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service</span>
                    <span className="font-medium text-gray-900">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium text-gray-900">{formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="font-medium text-gray-900">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium text-gray-900">{selectedService.duration}</span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm max-w-2xl mx-auto mb-6">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelect(location)}
                    disabled={isLoading}
                    className="bg-white rounded-2xl p-6 text-left border-2 border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <div className="w-6 h-6 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                        <MapPin className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                    )}
                    <h3 className="font-bold text-[#5C0F22] group-hover:text-[#D4AF37] transition-colors mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{location.address}</p>
                  </button>
                ))}
              </div>

              <button onClick={() => setCurrentStep("time")} className="mt-8 flex items-center gap-2 text-[#5C0F22] hover:text-[#D4AF37] text-sm font-medium transition-colors mx-auto">
                <ArrowLeft className="w-4 h-4" /> Back to time
              </button>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === "confirmation" && bookingSuccess && (
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <div className="bg-[#FFFDF5] rounded-2xl p-8 text-center border border-[#D4AF37]/20 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20">
                  <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
                <p className="text-gray-500 mb-6">Your appointment has been successfully booked.</p>
                <div className="bg-white rounded-xl p-4 max-w-sm mx-auto mb-6 border border-[#D4AF37]/15">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Booking Reference</p>
                  <p className="font-mono font-bold text-[#D4AF37] text-lg">{bookingId}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  {formData.email ? `A confirmation has been sent to ${formData.email}.` : "We'll contact you to confirm your appointment."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleNewBooking}
                    className="px-8 py-3 bg-[#D4AF37] text-[#1a0a10] rounded-full font-semibold hover:bg-[#E8C547] shadow-lg shadow-[#D4AF37]/25 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Book Another Appointment
                  </button>
                  <Link
                    href="/"
                    className="px-8 py-3 border-2 border-[#5C0F22]/20 text-[#5C0F22] rounded-full font-semibold hover:bg-[#5C0F22] hover:text-white hover:border-[#5C0F22] transition-all duration-300 text-sm"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Emergency Contact */}
      <section className="w-full bg-[#FFFDF5] py-8 border-t border-[#D4AF37]/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-gray-500 text-sm">
            Need immediate assistance?
            <a href="tel:+233257091176" className="text-[#5C0F22] font-semibold ml-2 inline-flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
              Call us <Phone className="w-3 h-3" />
            </a>
            <span className="mx-2 text-gray-300">or</span>
            <a href="https://wa.me/233257091176" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold inline-flex items-center gap-1 hover:text-green-700 transition-colors">
              WhatsApp us <MessageCircle className="w-3 h-3" />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
