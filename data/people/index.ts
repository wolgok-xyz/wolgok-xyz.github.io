export interface Person {
  id: number;
  name: string;
  degree: string;
  education: string;
  research: string;
  work: string[];
  achievements: string[];
  image: string;
  homepage?: string;
}

export const peopleData: Person[] = [
  {
    id: 1,
    name: 'Dr. Hwasup Lim',
    degree: 'Principal Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Vision-Language-Action Model, World Foundation Model, Generative AI',
    work: [
      'Center for Artificial Intelligence Research, KIST, 2011 - Present',
      'Mixed Reality Lab, Samsung Advanced Institute of Technology, 2007 - 2011'
    ],
    achievements: [
      'Led multiple national research projects on embodied AI',
      'Technology transfer to Samsung, LG, and others'
    ],
    image: '/images/people/hwasup.png',
    homepage: 'https://www.xrhumanlab.net'
  },
  {
    id: 2,
    name: 'Dr. Sang Chul Ahn',
    degree: 'Principal Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Autonomous robot navigation and SLAM algorithms for complex environments. Development of robust localization systems.',
    work: ['KIST Embodied AGI Research Group, 2020 - Present'],
    achievements: [
      'Advanced SLAM algorithm development',
      'Published in top robotics journals',
      'Led autonomous navigation projects'
    ],
    image: 'https://picsum.photos/400/600?random=2'
  },
  {
    id: 3,
    name: 'Dr. Soonkyum Kim',
    degree: 'Principal Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Deep reinforcement learning for robotic manipulation and grasping. Focus on sample-efficient learning algorithms.',
    work: ['KIST Embodied AGI Research Group, 2019 - Present'],
    achievements: [
      'Breakthrough in robotic grasping algorithms',
      'International collaboration projects',
      'Award-winning research publications'
    ],
    image: 'https://picsum.photos/400/600?random=3'
  },
  {
    id: 4,
    name: 'Dr. Sehyuk Yim',
    degree: 'Principal Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Computer vision and object detection for embodied AI systems. Specializing in real-time visual perception.',
    work: ['KIST Embodied AGI Research Group, 2022 - Present'],
    achievements: [
      'Real-time vision system development',
      'Enhanced object detection accuracy',
      'Industry partnerships in AI vision'
    ],
    image: 'https://picsum.photos/400/600?random=4'
  },
  {
    id: 5,
    name: 'Dr. Jeongryul Kim',
    degree: 'Senior Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Natural language processing for human-robot communication. Development of conversational AI systems.',
    work: ['KIST Embodied AGI Research Group, 2023 - Present'],
    achievements: [
      'Advanced NLP for robotics',
      'Human-robot dialogue systems',
      'Published research on conversational AI'
    ],
    image: 'https://picsum.photos/400/600?random=5'
  },
  {
    id: 6,
    name: 'Dr. Soomin Kim',
    degree: 'Senior Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Specializing in multi-modal learning and human-robot interaction. Research focuses on developing intuitive interfaces for embodied AI systems.',
    work: ['KIST Embodied AGI Research Group, 2021 - Present'],
    achievements: [
      'Pioneer in multi-modal human-robot interfaces',
      'Published in top HRI conferences',
      'Developed innovative interaction paradigms'
    ],
    image: 'https://picsum.photos/400/600?random=6'
  },
  {
    id: 7,
    name: 'Dr. Tackgeun You',
    degree: 'Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Working on cognitive architectures for embodied AI and developing bio-inspired learning algorithms for autonomous systems.',
    work: ['KIST Embodied AGI Research Group, 2022 - Present'],
    achievements: [
      'Cognitive architecture research',
      'Bio-inspired AI algorithms',
      'Cross-disciplinary research leadership'
    ],
    image: 'https://picsum.photos/400/600?random=7'
  }
]; 