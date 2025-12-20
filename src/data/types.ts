export interface Project {
  name: string;
  tech: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  projects?: Project[];
  contact?: string; 
  descriptionLines?: string[]; // For bullet points that aren't strict projects
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  location: string;
  cgpa: string;
}

export interface Certification {
  title: string;
  period: string;
}

export interface Achievement {
  title: string;
  journal: string;
  details: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
}
