"use client";

import { 
  Sparkles, Shield, Heart, Calendar, Baby, CheckCircle,
  Phone, MessageCircle, MapPin, Clock, User, Mail,
  Menu, X, ChevronRight, ArrowRight, Calendar as CalendarIcon,
  Star, Users, Award, ThumbsUp
} from "lucide-react";

// All icons with gold color by default
const goldColor = "#C5A059";
const goldHoverColor = "#A68A46";

export const Icons = {
  Sparkles: (props: any) => <Sparkles color={goldColor} {...props} />,
  Shield: (props: any) => <Shield color={goldColor} {...props} />,
  Heart: (props: any) => <Heart color={goldColor} {...props} />,
  Calendar: (props: any) => <Calendar color={goldColor} {...props} />,
  Baby: (props: any) => <Baby color={goldColor} {...props} />,
  CheckCircle: (props: any) => <CheckCircle color={goldColor} {...props} />,
  Phone: (props: any) => <Phone color={goldColor} {...props} />,
  MessageCircle: (props: any) => <MessageCircle color={goldColor} {...props} />,
  MapPin: (props: any) => <MapPin color={goldColor} {...props} />,
  Clock: (props: any) => <Clock color={goldColor} {...props} />,
  User: (props: any) => <User color={goldColor} {...props} />,
  Mail: (props: any) => <Mail color={goldColor} {...props} />,
  Menu: (props: any) => <Menu color={goldColor} {...props} />,
  X: (props: any) => <X color={goldColor} {...props} />,
  ChevronRight: (props: any) => <ChevronRight color={goldColor} {...props} />,
  ArrowRight: (props: any) => <ArrowRight color={goldColor} {...props} />,
  CalendarIcon: (props: any) => <CalendarIcon color={goldColor} {...props} />,
  Star: (props: any) => <Star color={goldColor} {...props} />,
  Users: (props: any) => <Users color={goldColor} {...props} />,
  Award: (props: any) => <Award color={goldColor} {...props} />,
  ThumbsUp: (props: any) => <ThumbsUp color={goldColor} {...props} />,
};

// Gold icon class for direct use
export const iconClass = "text-[#C5A059] group-hover:text-[#A68A46] transition-colors duration-300";
