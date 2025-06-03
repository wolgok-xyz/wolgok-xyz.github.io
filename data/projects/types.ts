export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  agency: string;
  period: string;
  organizations: string[];
  link: string;
  details: ProjectDetails;
}

export interface ProjectDetails {
  budget: string;
  content: ProjectContent[];
}

export interface ProjectContent {
  title: string;
  description: string;
  imageUrl?: string;
} 