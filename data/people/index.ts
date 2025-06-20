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
    education: 'Ph.D. in Control and Instrumentation, Seoul National University, 1996',
    research: 'World Foundation Model',
    work: ['KIST Embodied AGI Research Group, 1997 - Present', 'Postdoctoral Researcher, University of Southern California, 1996 - 1997'],
    achievements: [
      'Deep Learning-based 3D Human and Environment Modeling',
      'UPnP based Robot Middleware'
    ],
    image: '/images/people/ahn.png',
    homepage: 'https://sites.google.com/view/asckist'
  },
  {
    id: 3,
    name: 'Dr. Soonkyum Kim',
    degree: 'Principal Researcher',
    education: 'PhD. in Mechanical Engineering and Applied Mechanics, University of Pennsylvania, 2013',
    research: 'Autonomous Navigation, Path Planning, Optimal Control Problem',
    work: ['KIST Embodied AGI Research Group, 2018 - Present', 'Samsung Electronics, 2015 - 2018', 'Postdoctoral Researcher, Carnegie Mellon University, 2013 - 2015'],
    achievements: [
      'Learning-based Trajectory Generation',
      'Omnidirectional Mobile Robot'
    ],
    image: '/images/people/skkim.jpg',
    homepage: 'https://sites.google.com/site/kimsoonkyum'
  },
  {
    id: 4,
    name: 'Dr. Sehyuk Yim',
    degree: 'Principal Researcher',
    education: 'Ph.D. Mechanical Engineering, Carnegie Mellon University, 2013',
    research: 'Human-Robot Interaction',
    work: ['KIST Embodied AGI Research Group, 2015 - Present', 'Postdoctoral Researcher, Massachusetts Institute of Technology, 2014'],
    achievements: [
      'Human Interactive Physical Agent',
      'Music AI and humanoid robot Moffett'
    ],
    image: '/images/people/yim.png',
    homepage: 'https://sites.google.com/view/meinlab'
  },
  {
    id: 5,
    name: 'Dr. Jeongryul Kim',
    degree: 'Senior Researcher',
    education: 'Ph.D. Mechanical Engineering, Seoul National University, 2015',
    research: 'Autonomous Manipulation, Vision-Language-Action Model',
    work: ['KIST Embodied AGI Research Group, 2021 - Present', 'Postdoctoral Researcher, KIST 2018 - 2021', 'Samsung Electronics, 2015 - 2018'],
    achievements: [
      'Surgical Robot System',
      'Robot Gripper Development'
    ],
    image: '/images/people/jrkim.jpg'
  },
  {
    id: 6,
    name: 'Dr. Soomin Kim',
    degree: 'Senior Researcher',
    education: 'Ph.D. School of Computing, Korea Advanced Institute of Science and Technology, 2021',
    research: 'Vision-Language-Action Model',
    work: ['KIST Embodied AGI Research Group, 2021 - Present'],
    achievements: [
      'Image Understanding and Processing',
      'Sentence and Language Hierarchy Understanding'
    ],
    image: '/images/people/smkim.jpg'
  },
  {
    id: 7,
    name: 'Dr. Tackgeun You',
    degree: 'Researcher',
    education: 'Ph.D in Computer Science and Engineering, Pohang University of Science and Technology, 2024',
    research: 'Spatial Intelligence, Generative Models, Neural Architecture',
    work: ['KIST Embodied AGI Research Group, 2024 - Present', 'Kakao Brain, 2021 - 2022'],
    achievements: [
      'Autoregressive Generative Models'
    ],
    image: '/images/people/you.jpg',
    homepage: 'https://tackgeun.github.io'
  }
]; 
