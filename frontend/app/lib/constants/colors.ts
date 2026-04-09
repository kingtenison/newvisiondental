// Color scheme for New Vision Dental Clinic
export const colors = {
  primary: {
    DEFAULT: '#C1121F',
    light: '#E63E4A',
    dark: '#8F0E18',
    bg: '#FEE2E2',
    border: '#FECACA',
    hover: '#B91C1C',
  },
  secondary: {
    DEFAULT: '#2E7D32',
    light: '#4CAF50',
    dark: '#1B5E20',
    bg: '#E8F5E9',
    border: '#C8E6C9',
    hover: '#166534',
  },
  accent: {
    gold: '#FBBF24',
    blue: '#3B82F6',
    purple: '#8B5CF6',
  },
  neutral: {
    white: '#FFFFFF',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
    black: '#000000',
  }
} as const;

// Animation variants with brand colors
export const animations = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  tap: {
    scale: 0.98,
  },
  buttonHover: {
    backgroundColor: '#B91C1C',
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  buttonSecondaryHover: {
    backgroundColor: '#C1121F',
    color: '#FFFFFF',
    scale: 1.02,
  },
  cardHover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(193, 18, 31, 0.1), 0 10px 10px -5px rgba(193, 18, 31, 0.04)",
    transition: { duration: 0.3 }
  }
} as const;

// Tailwind-compatible class names
export const tailwindClasses = {
  button: {
    primary: 'bg-[#C1121F] text-white hover:bg-[#B91C1C] transition-all duration-300 shadow-md hover:shadow-xl',
    secondary: 'border-2 border-[#C1121F] text-[#C1121F] hover:bg-[#C1121F] hover:text-white transition-all duration-300',
    green: 'bg-[#2E7D32] text-white hover:bg-[#166534] transition-all duration-300 shadow-md hover:shadow-xl',
    outline: 'border border-gray-300 hover:border-[#C1121F] hover:text-[#C1121F] transition-all duration-300',
  },
  card: {
    container: 'bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden',
    image: 'w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110',
    title: 'text-xl font-bold text-gray-800 group-hover:text-[#C1121F] transition-colors duration-300',
  },
  badge: {
    primary: 'bg-[#FEE2E2] text-[#C1121F] px-3 py-1 rounded-full text-sm font-medium',
    secondary: 'bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-sm font-medium',
  }
} as const;
