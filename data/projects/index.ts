export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  collaborators: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Vision-Language-Action Model for Embodied AGI",
    description: "Developing multi-modal AI models that integrate vision, language, and action for real-world robotic agents. Focus on end-to-end learning and generalization across tasks.",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    date: "2024",
    collaborators: ["Dr. H. Slim", "KIST AGI Team"],
    link: "#"
  },
  {
    id: 2,
    title: "World Model Learning in Robotics",
    description: "Researching self-supervised learning methods for robots to build internal world models, enabling prediction, planning, and adaptation in dynamic environments.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    date: "2023",
    collaborators: ["Dr. J. Kim", "KIST Robotics"],
    link: "#"
  },
  {
    id: 3,
    title: "Human-Robot Interaction for Social Intelligence",
    description: "Designing and evaluating embodied agents capable of natural and adaptive interaction with humans, including emotion recognition and social learning.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "2023",
    collaborators: ["Dr. S. Lee", "Cognitive Science Group"],
    link: "#"
  },
  {
    id: 4,
    title: "Robotic Manipulation with Reinforcement Learning",
    description: "Applying deep reinforcement learning to enable robots to perform complex manipulation tasks, such as object grasping, assembly, and tool use.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    date: "2022",
    collaborators: ["Dr. M. Park", "KIST AI Lab"],
    link: "#"
  },
  {
    id: 5,
    title: "Multi-Agent Embodied AI Systems",
    description: "Exploring collaborative and competitive behaviors in multi-agent embodied AI systems, focusing on communication, coordination, and emergent intelligence.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    date: "2022",
    collaborators: ["Dr. Y. Choi", "KIST Multi-Agent Group"],
    link: "#"
  },
  {
    id: 6,
    title: "Sim2Real Transfer for Embodied Agents",
    description: "Bridging the gap between simulation and real-world deployment for embodied agents, using domain adaptation and transfer learning techniques.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    date: "2021",
    collaborators: ["Dr. E. Kim", "KIST Sim2Real Team"],
    link: "#"
  }
]; 