export interface Event {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    date: string; // ISO 8601 date string
    duration: string; // e.g., "2 hours", "3 days"
    timezone: string; // e.g., "UTC", "America/New_York"
    location: string; // "Virtual" or physical location
    category: string;
    imageUrl?: string;
    videoUrl?: string;
    price?: string;
    earlyBirdPrice?: string;
    earlyBirdDeadline?: string;
}

export interface Speaker {
    id: string;
    name: string;
    title: string;
    company: string;
    bio: string;
    imageUrl: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
}

export interface AgendaItem {
    id: string;
    time: string;
    title: string;
    description: string;
    speakers: Speaker[];
    duration: string;
    type: 'keynote' | 'workshop' | 'panel' | 'break' | 'networking';
}

export interface RegistrationStep {
    id: number;
    title: string;
    description: string;
    fields: FormField[];
}

export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'checkbox' | 'radio';
    placeholder?: string;
    required?: boolean;
    options?: string[];
}

export interface SeatInfo {
    totalSeats: number;
    remainingSeats: number;
    currentViewers?: number;
}

export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isUrgent: boolean; // < 24 hours
    isCritical: boolean; // < 1 hour
}

export type CountdownVariant = 'digital' | 'circular' | 'minimal' | 'bold';
export type HeroVariant = 'fullscreen' | 'split' | 'video' | 'gradient';
export type CTASize = 'sm' | 'md' | 'lg';
export type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';
