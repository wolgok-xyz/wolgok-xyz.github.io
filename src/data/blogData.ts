import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Vision-Language Navigation",
    paragraph:
      "Developing agents that can navigate complex environments using natural language instructions and visual perception.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Research Team",
      image: "/images/blog/author-01.png",
      designation: "Embodied AGI Lab",
    },
    tags: ["Navigation", "Vision", "Language"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Robotic Manipulation",
    paragraph:
      "Research on dexterous manipulation and object interaction using multimodal perception and learning.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Research Team",
      image: "/images/blog/author-02.png",
      designation: "Embodied AGI Lab",
    },
    tags: ["Robotics", "Manipulation", "Learning"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Human-Robot Collaboration",
    paragraph:
      "Investigating natural and intuitive ways for humans and robots to work together in shared environments.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Research Team",
      image: "/images/blog/author-03.png",
      designation: "Embodied AGI Lab",
    },
    tags: ["HRI", "Collaboration", "Safety"],
    publishDate: "2024",
  },
];

export default blogData; 