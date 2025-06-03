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
    title: "Bidirectional Temporal Diffusion Model for Temporally Consistent Human Animation",
    authors: "Tserendorj Adiya, Jae Shin Yoon, Jungeun Lee, Sanghun Kim, Hwasup Lim",
    journal: "ICLR 2024",
    year: 2024,
    doi: "https://arxiv.org/abs/2307.00574",
    abstract: "We introduce a method to generate temporally coherent human animation from a single image, a video, or a random noise. This problem has been formulated as modeling of an auto-regressive generation, i.e., to regress past frames to decode future frames. However, such unidirectional generation is highly prone to motion drifting over time, generating unrealistic human animation with significant artifacts such as appearance distortion. We claim that bidirectional temporal modeling enforces temporal coherence on a generative network by largely suppressing the motion ambiguity of human appearance.",
    videoId: "rjafsozxGIs"
  }
]; 