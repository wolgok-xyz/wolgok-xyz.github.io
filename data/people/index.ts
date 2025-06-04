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
    education: 'Ph.D. in Electrical Engineering, PennState Univ., 2007',
    research: 'Vision-Language-Action Model, World Foundation Model',
    work: [
      'Center for Artificial Intelligence Research, KIST, 2011 - Present',
      'Mixed Reality Lab, Samsung Advanced Institute of Technology, 2007 - 2011'
    ],
    achievements: [
      'Led multiple national research projects on embodied AI',
      'Technology transfer to Samsung, LG, and others'
    ],
    image: '/images/people/lim.png',
    homepage: 'https://www.xrhumanlab.net'
  },
  {
    id: 2,
    name: 'Dr. Sang Chul Ahn',
    degree: 'Principal Researcher',
    education: 'Ph.D. in Control and Instrumentation Engineering, SNU, 2019',
    research: 'World Foundation Model',
    work: ['KIST Embodied AGI Research Group, 2020 - Present'],
    achievements: [
      'Advanced SLAM algorithm development',
      'Led autonomous navigation projects'
    ],
    image: '/images/people/ahn.png',
    homepage: 'https://sites.google.com/view/asckist'
  },
  {
    id: 3,
    name: 'Dr. Soonkyum Kim',
    degree: 'Principal Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Autonomous Navigation, World Foundation Model',
    work: ['KIST Embodied AGI Research Group, 2019 - Present'],
    achievements: [
      'Breakthrough in robotic grasping algorithms',
      'Award-winning research publications'
    ],
    image: '/images/people/skkim.jpg'
  },
  {
    id: 4,
    name: 'Dr. Sehyuk Yim',
    degree: 'Principal Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Human-Robot Interaction',
    work: ['KIST Embodied AGI Research Group, 2022 - Present'],
    achievements: [
      'Real-time vision system development',
      'Industry partnerships in AI vision'
    ],
    image: '/images/people/yim.png',
    homepage: 'https://sites.google.com/view/meinlab'
  },
  {
    id: 5,
    name: 'Dr. Jeongryul Kim',
    degree: 'Senior Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Autonomous Manipulation, Vision-Language-Action Model',
    work: ['KIST Embodied AGI Research Group, 2023 - Present'],
    achievements: [
      'Advanced NLP for robotics',
      'Published research on conversational AI'
    ],
    image: '/images/people/jrkim.jpg'
  },
  {
    id: 6,
    name: 'Dr. Soomin Kim',
    degree: 'Senior Researcher',
    education: 'KIST Embodied AGI Research Group',
    research: 'Vision-Language-Action Model',
    work: ['KIST Embodied AGI Research Group, 2021 - Present'],
    achievements: [
      'Pioneer in multi-modal human-robot interfaces',
      'Developed innovative interaction paradigms'
    ],
    image: '/images/people/smkim.jpg'
  },
  {
    id: 7,
    name: 'Dr. Tackgeun You',
    degree: 'Researcher',
    education: 'Ph.D in Computer Science and Engineering, POSTECH, 2024',
    research: 'Spatial Intelligence, Generative Models, Neural Architecture',
    work: ['KIST Embodied AGI Research Group, 2022 - Present', 'Kakao Brain, 2021 - 2022'],
    achievements: [
      'Autoregressive Generative Models'
    ],
    image: '/images/people/you.jpg',
    homepage: 'https://tackgeun.github.io/'
  }
]; 
