export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  category: 'Building Construction' | 'Steel Fabrication' | 'Finishing Work' | 'Property Maintenance';
  location: string;
  area: string;
  year: string;
  deliveryMethod: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  galleryImages: string[];
  blueprintUrl?: string;
  specs: {
    sqft: string;
    timeline: string;
    engineerOrFabricator: string;
    scope: string;
  };
}

export interface ServiceSubItem {
  name: string;
  description: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  shortDesc: string;
  fullDesc: string;
  subServices: string[];
  deliverables: string[];
  icon: string;
  benefits: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  credentials: string;
  image: string;
}

export interface OfficeLocation {
  city: string;
  state: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  coordinates: string;
  isPrimary?: boolean;
}

export interface PreConEstimate {
  projectType: string;
  squareFeet: number;
  market: string;
  scopeLevel: string;
  timelineMonths: number;
  estimatedRange: {
    low: number;
    high: number;
  };
}
