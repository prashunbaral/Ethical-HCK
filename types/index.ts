// Event types
export interface Event {
  id: number;
  image: string | any;
  type: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
}

// Team member types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | any;
  bio?: string;
  linkedin?: string;
  github?: string; // Note: Some entries use this for Instagram URLs temporarily
  twitter?: string;
  email?: string;
}

// Legacy support for Cards component
export interface TeamMemberLegacy {
  img: string;
  name: string;
  position: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

// Gallery image types
export interface GalleryImage {
  id: number;
  src: string | any;
  alt: string;
  category?: string;
  eventId?: number;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// SEO Metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// Navigation link types
export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

// Social media link types
export interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}
