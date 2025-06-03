import { Project } from './types';
export type { Project };

export const projectsData: Project[] = [
  {
    id: 3,
    title: "Development of Self-Evolutionary Embodied AGI Platform through Real-World Experience",
    description: "Research on developing artificial general intelligence through embodied interaction with the physical world.",
    imageUrl: "/images/projects/eagi_obj.png",
    agency: "IITP",
    period: "2025.04 - 2029.12",
    organizations: ["KIST", "Yonsei Univ", "KRM"],
    link: "/projects/1",
    details: {
      budget: "KRW",
      content: [
        {
          title: "Research Objectives",
          description: "This research aims to enhance artificial intelligence's generalization capabilities through interaction with the physical world. We seek to build theoretical foundations and conduct experimental validation using robots.",
          imageUrl: "/images/projects/eagi_obj.png",
        },
        {
          title: "Key Research Areas",
          description: "1. Learning through physical interaction\n2. Building theoretical foundations for generalized intelligence\n3. Developing robotic systems for experimental validation\n4. Research on human-robot interaction",
          imageUrl: "/images/projects/eagi_key.png",
        },
        {
          title: "Expected Impact",
          description: "Through this research, we expect to enhance AI's generalization capabilities and validate its applicability in the real physical world. Additionally, we aim to present a new paradigm for human-robot interaction."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Omni-reasoning Process and Embodied Intelligence Model",
    description: "Research on natural and intuitive interaction between humans and robots.",
    imageUrl: "/images/projects/omni_obj.png",
    agency: "KIST",
    period: "2025.01 - 2027.12",
    organizations: ["KIST", "Korea Univ"],
    link: "/projects/2",
    details: {
      budget: "0 KRW",
      content: [
        {
          title: "Research Objectives",
          description: "This research aims to develop a novel omni-reasoning process that enables robots to understand and respond to human intentions naturally. We focus on creating an embodied intelligence model that can process multi-modal information and generate appropriate responses in real-time.",
          imageUrl: "/images/projects/omni_obj.png",
        },
        {
          title: "Key Research Areas",
          description: "1. Development of omni-reasoning process for multi-modal understanding\n2. Creation of embodied intelligence model for natural interaction\n3. Implementation of real-time response generation system\n4. Integration of cognitive and physical capabilities in robots",
          imageUrl: "/images/projects/omni_key.png",
        },
        {
          title: "Expected Impact",
          description: "This research will contribute to the development of more intuitive and natural human-robot interaction systems. The omni-reasoning process and embodied intelligence model will serve as fundamental technologies for future service robots and assistive devices."
        }
      ]
    }
  },
  {
    id: 1,
    title: "Development of Artificial Intelligence for Text-based 3D Movie Generation",
    description: "Research on advanced robotics and control systems for various applications.",
    imageUrl: "/images/projects/text3d_obj.png",
    agency: "IITP",
    period: "2023.04 - 2025.12",
    organizations: ["KIST", "Postech", "Hanyang Univ", "Illuni"],
    link: "/projects/3",
    details: {
      budget: "0 KRW",
      content: [
        {
          title: "Research Objectives",
          description: "This research aims to develop an AI system that can generate high-quality 3D movies from text descriptions. We focus on creating a comprehensive framework that can understand narrative context, generate appropriate scenes, and produce realistic 3D animations automatically.",
          imageUrl: "/images/projects/text3d_obj.png",
        },
        {
          title: "Key Research Areas",
          description: "1. Natural language processing for story understanding\n2. 3D scene generation and composition\n3. Character animation and motion synthesis\n4. Integration of visual effects and sound design",
          imageUrl: "/images/projects/text3d_key.png",
        },
        {
          title: "Expected Impact",
          description: "This research will revolutionize the content creation industry by enabling automatic generation of 3D movies from text. The technology will significantly reduce production time and costs while maintaining high quality, making it accessible to a wider range of creators."
        }
      ]
    }
  }
]; 