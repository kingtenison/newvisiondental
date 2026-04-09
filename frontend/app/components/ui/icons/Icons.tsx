"use client";

import { 
  Sparkles, Shield, Heart, Calendar, Baby, CheckCircle,
  Phone, MessageCircle, MapPin, Clock, User, Mail,
  Menu, X, ChevronRight, ArrowRight, Calendar as CalendarIcon
} from "lucide-react";

// Create a wrapper to apply gold color to all icons
const iconClass = "text-secondary group-hover:text-secondary-dark transition-colors duration-300";

// Export each icon with gold color applied
export const IconSparkles = (props: any) => <Sparkles className={iconClass} {...props} />;
export const IconShield = (props: any) => <Shield className={iconClass} {...props} />;
export const IconHeart = (props: any) => <Heart className={iconClass} {...props} />;
export const IconCalendar = (props: any) => <Calendar className={iconClass} {...props} />;
export const IconBaby = (props: any) => <Baby className={iconClass} {...props} />;
export const IconCheckCircle = (props: any) => <CheckCircle className={iconClass} {...props} />;
export const IconPhone = (props: any) => <Phone className={iconClass} {...props} />;
export const IconMessageCircle = (props: any) => <MessageCircle className={iconClass} {...props} />;
export const IconMapPin = (props: any) => <MapPin className={iconClass} {...props} />;
export const IconClock = (props: any) => <Clock className={iconClass} {...props} />;
export const IconUser = (props: any) => <User className={iconClass} {...props} />;
export const IconMail = (props: any) => <Mail className={iconClass} {...props} />;

// Export all icons as a group
export const Icons = {
  Sparkles: IconSparkles,
  Shield: IconShield,
  Heart: IconHeart,
  Calendar: IconCalendar,
  Baby: IconBaby,
  CheckCircle: IconCheckCircle,
  Phone: IconPhone,
  MessageCircle: IconMessageCircle,
  MapPin: IconMapPin,
  Clock: IconClock,
  User: IconUser,
  Mail: IconMail,
  Menu: (props: any) => <Menu className={iconClass} {...props} />,
  X: (props: any) => <X className={iconClass} {...props} />,
  ChevronRight: (props: any) => <ChevronRight className={iconClass} {...props} />,
  ArrowRight: (props: any) => <ArrowRight className={iconClass} {...props} />,
  CalendarIcon: (props: any) => <CalendarIcon className={iconClass} {...props} />,
};
