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
    id: 3,
    title: "12 DoF Robot Hand: Low-Cost Dexterous Manipulation",
    description: "Our team developed a $400 12-DoF robot hand using Dynamixel actuators and 3D printing. The hand can perform complex tasks like object manipulation and water pouring, with a fingertip camera in development for enhanced capabilities.",
    date: "2024-05-10",
    imageUrl: "https://img.youtube.com/vi/UTsNSTtkAQs/maxresdefault.jpg",
    link: "https://youtu.be/UTsNSTtkAQs"
  },
  {
    id: 2,
    title: "Dr. Yim's Interview: Music Robots Research",
    description: "Dr. Yim discusses our research on music robots, featuring a drumming humanoid and singing robot Rea. The project aims to develop robots that can analyze and replicate human musical techniques, with the goal of preserving and recreating musical performances for cultural heritage.",
    date: "2024-05-15",
    imageUrl: "https://img.youtube.com/vi/XVlwNMHstOQ/maxresdefault.jpg",
    link: "https://youtu.be/XVlwNMHstOQ"
  },
  {
    id: 1,
    title: "Dr. Lim's Interview: Meta Humanoid Technology",
    description: "YTN Science features Dr. Lim's interview on 'Meta Humanoid' technology, where XR overlays digital humans onto robots for natural interaction, aiming to bypass the uncanny valley, with Korea leading development despite challenges.",
    date: "2024-05-20",
    imageUrl: "https://img.youtube.com/vi/-kzVOZqOuNo/maxresdefault.jpg",
    link: "https://youtu.be/-kzVOZqOuNo"
  }
]; 