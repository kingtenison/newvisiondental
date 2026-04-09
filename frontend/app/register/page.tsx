"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
import { Mail, Lock, User, ArrowRight, Sparkles, Eye, EyeOff, Check } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const passwordChecks = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains a letter", met: /[a-zA-Z]/.test(password) },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (authData.user) {
      // Create profile record
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: authData.user.id, role: "USER" }]);

      if (profileError) {
        console.error("Profile creation error:", profileError.message);
      }

      if (authData.session) {
        // User is immediately signed in (email confirmation disabled)
        router.push("/dashboard");
        router.refresh();
      } else {
        // Email confirmation required
        setSuccess(true);
      }
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-12 md:py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-[#FFFDF5] rounded-2xl p-8 border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20">
                <Mail className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">Check Your Email</h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We've sent a confirmation link to <span className="font-semibold text-[#5C0F22]">{email}</span>. Click the link to activate your account.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C0F22] text-white rounded-full font-semibold text-sm hover:bg-[#7a1830] transition-colors"
              >
                Go to Login <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14 text-center">
          <div className="animate-[fadeInUp_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-3">
              <Sparkles className="w-4 h-4" /> Patient Portal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Create Your <span className="text-golden-shine">Account</span>
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Join New Vision Dental and manage your appointments, treatments, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="w-full py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-md mx-auto">
            <div className="bg-[#FFFDF5] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {/* Password requirements */}
                  {password.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {passwordChecks.map((check) => (
                        <div key={check.label} className="flex items-center gap-2 text-xs">
                          <Check className={`w-3.5 h-3.5 ${check.met ? "text-green-500" : "text-gray-300"}`} />
                          <span className={check.met ? "text-green-600" : "text-gray-400"}>{check.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all text-sm"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {confirmPassword.length > 0 && password !== confirmPassword && (
                    <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#5C0F22] text-white rounded-xl font-semibold hover:bg-[#7a1830] shadow-lg shadow-[#5C0F22]/20 hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>

              <p className="text-center mt-6 text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-[#5C0F22] font-semibold hover:text-[#D4AF37] transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
