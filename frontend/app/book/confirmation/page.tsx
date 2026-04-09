import Link from "next/link";
import { CheckCircle, Calendar, Clock, User, Phone, Mail, ArrowLeft } from "lucide-react";

interface ConfirmationPageProps {
  searchParams: {
    id?: string;
  };
}

export default function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const appointmentId = searchParams.id;
  
  if (!appointmentId) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">No appointment found</h1>
          <Link href="/book" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Book an appointment
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20 overflow-x-hidden">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Appointment Confirmed!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your appointment has been successfully booked.
            </p>
            
            <div className="bg-white dark:bg-[#222222] rounded-xl p-6 mb-6 text-left">
              <h2 className="font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-[#333333]">
                Appointment Details
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                    <p className="text-gray-800 dark:text-white">[Date will appear here]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                    <p className="text-gray-800 dark:text-white">[Service will appear here]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Patient Name</p>
                    <p className="text-gray-800 dark:text-white">[Name will appear here]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-800 dark:text-white">[Phone will appear here]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-800 dark:text-white">[Email will appear here]</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-[#333333]">
                <p className="text-xs text-gray-500 dark:text-gray-400">Booking Reference: <span className="font-mono">{appointmentId}</span></p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition text-center"
              >
                Book Another Appointment
              </Link>
              <Link
                href="/"
                className="border-2 border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition text-center"
              >
                Return Home
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A confirmation email has been sent to your email address.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              If you need to reschedule or cancel, please contact us at least 24 hours in advance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
