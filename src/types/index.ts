export type PageRoute = 'home' | 'services' | 'about' | 'portfolio' | 'booking' | 'contact';

export interface ServiceItem {
  id: string;
  category: 'hair' | 'makeup' | 'nails' | 'lashes' | 'skincare' | 'bridal';
  title: string;
  tagline: string;
  description: string;
  features: string[];
  startingFrom: string;
  image: string;
  imageAlt: string;
  indexNumber: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  category: 'skin' | 'makeup' | 'hair' | 'bridal' | 'nails' | 'salon';
  categoryLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  meta: string;
  image: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
  termsAccepted: boolean;
}

export interface ContactFormData {
  fullName: string;
  contactTarget: string; // phone or email
  subject: string;
  message: string;
}
