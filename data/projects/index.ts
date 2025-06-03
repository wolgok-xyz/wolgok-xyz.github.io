import { Project } from './types';
export type { Project };

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Embodied Artificial General Intelligence",
    description: "Research on developing artificial general intelligence through embodied interaction with the physical world.",
    imageUrl: "/images/projects/eagi.png",
    date: "2023 - Present",
    collaborators: ["KIST", "KAIST", "Seoul National University"],
    link: "/projects/1",
    institute: "KIST",
    details: {
      period: "2023.01 - 2026.12",
      budget: "0원",
      organizations: [
        "한국과학기술연구원(KIST)"
      ],
      content: [
        {
          title: "연구 목표",
          description: "본 연구는 물리적 세계와의 상호작용을 통해 인공지능의 일반화 능력을 향상시키는 것을 목표로 합니다. 이를 위해 로봇을 활용한 실험적 검증과 이론적 기반을 구축하고자 합니다.",
          imageUrl: "/images/projects/eagi.png",
        },
        {
          title: "주요 연구 내용",
          description: "1. 물리적 상호작용을 통한 학습\n2. 일반화된 지능의 이론적 기반 구축\n3. 실험적 검증을 위한 로봇 시스템 개발\n4. 인간-로봇 상호작용 연구",
          imageUrl: "/images/projects/eagi.png",
        },
        {
          title: "기대 효과",
          description: "본 연구를 통해 인공지능의 일반화 능력 향상과 함께, 실제 물리적 세계에서의 응용 가능성을 검증할 수 있을 것으로 기대됩니다. 또한, 인간-로봇 상호작용의 새로운 패러다임을 제시할 수 있을 것입니다."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Human-Robot Interaction",
    description: "Research on natural and intuitive interaction between humans and robots.",
    imageUrl: "/images/projects/eagi.png",
    date: "2022 - Present",
    collaborators: ["KIST", "POSTECH"],
    link: "/projects/2",
    institute: "KIST",
    details: {
      period: "2022.01 - 2025.12",
      budget: "0원",
      organizations: [
        "한국과학기술연구원(KIST)"
      ],
      content: [
        {
          title: "연구 목표",
          description: "인간과 로봇 간의 자연스럽고 직관적인 상호작용을 위한 새로운 패러다임을 연구합니다.",
          imageUrl: "/images/projects/eagi.png",
        }
      ]
    }
  },
  {
    id: 3,
    title: "Robotics and Control",
    description: "Research on advanced robotics and control systems for various applications.",
    imageUrl: "/images/projects/eagi.png",
    date: "2021 - Present",
    collaborators: ["KIST", "KAIST"],
    link: "/projects/3",
    institute: "KIST",
    details: {
      period: "2021.01 - 2024.12",
      budget: "0원",
      organizations: [
        "한국과학기술연구원(KIST)"
      ],
      content: [
        {
          title: "연구 목표",
          description: "다양한 응용 분야를 위한 고급 로봇 공학 및 제어 시스템을 연구합니다.",
          imageUrl: "/images/projects/eagi.png",
        }
      ]
    }
  }
]; 