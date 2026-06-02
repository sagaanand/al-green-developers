export interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  growthScore: number;
  infrastructureProjects: string[];
  industrialExpansion: string;
  appreciationPotential: string;
  developments: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  location: string;
  story: string;
  masterplan: string[]; // key bullet points or features
  growthDrivers: string[];
  investmentScore: {
    total: number;
    connectivity: number;
    infrastructure: number;
    liquidity: number;
  };
  image: string;
  ctaText: string;
}

export interface IntelligenceCard {
  id: string;
  category: "Connectivity" | "Industry" | "Urbanization" | "Health & Education";
  title: string;
  metric: string;
  trend: string;
  details: string[];
  iconName: string;
}

export interface TimelineStage {
  id: string;
  stageName: string;
  duration: string;
  description: string;
  actions: string[];
  documentation: string;
  complianceChecked: boolean;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientType: string;
  portraitInitials: string;
  location: string;
  before: string;
  decision: string;
  investment: string;
  outcome: string;
  appreciation: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  investorType: string;
  submittedAt: string;
  reportType: string;
}

export interface SiteVisitSchedule {
  id: string;
  name: string;
  visitorType: string;
  projectSelected: string;
  visitDate: string;
  visitTime: string;
  contactMethod: string;
  scheduledAt: string;
  status: "Confirmed" | "Pending Review";
}
