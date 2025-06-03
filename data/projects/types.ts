export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  collaborators: string[];
  link?: string;
  institute: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  period: string;
  budget: string;
  organizations: string[];
  content: ProjectContent[];
}

export interface ProjectContent {
  title: string;
  description: string;
  imageUrl?: string;
} 