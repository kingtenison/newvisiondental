// Booking utilities
export const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

// Service options matching the 12 services from the website
export const services = [
  { id: 1, name: "Consultation", duration: "30 mins", icon: "🔍" },
  { id: 2, name: "Dental X-Ray", duration: "15 mins", icon: "📸" },
  { id: 3, name: "Scaling & Polishing", duration: "45 mins", icon: "✨" },
  { id: 4, name: "Teeth Whitening", duration: "60 mins", icon: "🦷" },
  { id: 5, name: "Dental Implants", duration: "2-3 Visits", icon: "🔧" },
  { id: 6, name: "Composite Restoration", duration: "1 Visit", icon: "💎" },
  { id: 7, name: "Root Canal Treatment", duration: "1-2 Visits", icon: "❤️" },
  { id: 8, name: "Crown & Bridge", duration: "1 Visit", icon: "👑" },
  { id: 9, name: "Tooth Extraction", duration: "30 mins", icon: "🦷" },
  { id: 10, name: "Dental Veneers", duration: "2 Visits", icon: "😁" },
  { id: 11, name: "Fluoride Therapy", duration: "20 mins", icon: "💧" },
  { id: 12, name: "Fissure Sealing", duration: "20 mins", icon: "🛡️" }
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

// Check if time slot is available (simulated)
export const isTimeSlotAvailable = (date: Date, time: string) => {
  const hour = parseInt(time.split(':')[0]);
  const period = time.split(' ')[1];
  const randomFactor = (date.getDate() + hour) % 3;
  return randomFactor !== 0;
};

// Get available slots for a date
export const getAvailableSlots = (date: Date) => {
  return timeSlots.filter(slot => isTimeSlotAvailable(date, slot));
};
