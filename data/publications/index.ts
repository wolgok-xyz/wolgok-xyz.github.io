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
    id: 2,
    title: "ContactField: Implicit Field Representation for Multi-Person Interaction Geometry",
    authors: "Hansol Lee, Tackgeun You, Hansoo Park, Woohyeon Shim, Sanghyeon Kim, Hwasup Lim",
    journal: "NeurIPS 2024",
    year: 2024,
    doi: "https://proceedings.neurips.cc/paper_files/paper/2024/file/435422305988b73c6cc00bcb29ba2531-Paper-Conference.pdf",
    abstract: "We introduce a novel implicit field representation tailored for multi-person interaction geometry in 3D spaces, capable of simultaneously reconstructing occupancy, instance identification (ID) tags, and contact fields. Our approach utilizes an implicit representation for interaction geometry contextualized by a multi-view local-global feature module, enabling precise modeling of close physical interactions through dense point retrieval in small areas.",
    videoId: "1PlsGj17kcE"
  },
  {
    id: 1,
    title: "Embodied Learning in Human-Robot Interaction",
    authors: "Smith, J., et al.",
    journal: "Nature Robotics",
    year: 2024,
    doi: "10.1038/s41586-024-00000-0",
    abstract: "A comprehensive study on embodied learning approaches in human-robot interaction scenarios.",
    videoId: "dQw4w9WgXcQ"
  }
]; 