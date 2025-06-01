export interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  videoId: string;
}

export const publicationsData: Publication[] = [
  {
    id: 1,
    title: "Embodied Learning in Human-Robot Interaction",
    authors: "Smith, J., et al.",
    journal: "Nature Robotics",
    year: 2024,
    doi: "10.1038/s41586-024-00000-0",
    abstract: "A comprehensive study on embodied learning approaches in human-robot interaction scenarios.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "AGI Development through Physical Interaction",
    authors: "Johnson, A., et al.",
    journal: "Science Robotics",
    year: 2023,
    doi: "10.1126/scirobotics.0000000",
    abstract: "Exploring the role of physical interaction in developing artificial general intelligence.",
    videoId: "dQw4w9WgXcQ"
  }
]; 