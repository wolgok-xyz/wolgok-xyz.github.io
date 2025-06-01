export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "KIST AGI Team Wins Best Paper at **** 2024",
    description: "Our team received the Best Paper Award at the International Conference on Robotics and Automation for our work on vision-language-action models.",
    date: "2024-05-20",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "New Grant for Human-Robot Interaction Research",
    description: "KIST Embodied AGI Lab has been awarded a major grant to advance research in social intelligence and human-robot collaboration.",
    date: "2024-04-10",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Workshop: Sim2Real Transfer in Robotics",
    description: "We hosted a successful workshop on sim-to-real transfer techniques, featuring speakers from academia and industry.",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
]; 