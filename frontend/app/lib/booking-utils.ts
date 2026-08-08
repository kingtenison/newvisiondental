// Booking utilities
export const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

// Service options matching the 15 services from the website
export const services = [
  { id: 1, name: "Dental Consultation", duration: "30 mins", icon: "🔍" },
  { id: 2, name: "Dental X-Ray", duration: "15 mins", icon: "📸" },
  { id: 3, name: "Emergency Dentistry", duration: "Same-Day", icon: "🚨" },
  { id: 4, name: "Minor Oral Surgery", duration: "Varies", icon: "🔪" },
  { id: 5, name: "Composite Restoration", duration: "1 Visit", icon: "💎" },
  { id: 6, name: "Tooth Extraction", duration: "30 mins", icon: "🦷" },
  { id: 7, name: "Root Canal Treatment", duration: "1-2 Visits", icon: "❤️" },
  { id: 8, name: "Crown & Bridge", duration: "1 Visit", icon: "👑" },
  { id: 9, name: "Dental Veneers", duration: "2 Visits", icon: "😁" },
  { id: 10, name: "Teeth Whitening", duration: "60 mins", icon: "🦷" },
  { id: 11, name: "Dental Implants", duration: "3-9 Months", icon: "🔧" },
  { id: 12, name: "Scaling & Polishing", duration: "45 mins", icon: "✨" },
  { id: 13, name: "Fluoride Therapy", duration: "20 mins", icon: "💧" },
  { id: 14, name: "Fissure Sealing", duration: "20 mins", icon: "🛡️" },
  { id: 15, name: "Orthodontics (Braces)", duration: "12-24 Months", icon: "🦷" },
];

// Helper to generate available dates (next 30 days)
export const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    // Skip Sundays
    if (date.getDay() !== 0) {
      dates.push(date);
    }
  }
  return dates;
};

// Format date for display
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

// Format date for API
export const formatDateForAPI = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const isTimeSlotAvailable = (_date: Date, _time: string) => {
  return true;
};

// Get available slots for a date
export const getAvailableSlots = (date: Date) => {
  return timeSlots.filter(slot => isTimeSlotAvailable(date, slot));
};
