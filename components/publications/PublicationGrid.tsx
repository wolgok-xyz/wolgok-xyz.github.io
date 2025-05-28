'use client';

import { motion } from 'framer-motion';

const publications = [
  {
    title: "Embodied Learning in Human-Robot Interaction",
    authors: "Smith, J., et al.",
    journal: "Nature Robotics",
    year: 2024,
    doi: "10.1038/s41586-024-00000-0",
    abstract: "A comprehensive study on embodied learning approaches in human-robot interaction scenarios.",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  },
  {
    title: "AGI Development through Physical Interaction",
    authors: "Johnson, A., et al.",
    journal: "Science Robotics",
    year: 2023,
    doi: "10.1126/scirobotics.0000000",
    abstract: "Exploring the role of physical interaction in developing artificial general intelligence.",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  },
  // Add more publications as needed
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PublicationGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {publications.map((pub, index) => (
        <motion.div
          key={index}
          variants={item}
          className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
        >
          <div className="w-full h-40 md:w-[241px] md:h-[161px] flex-shrink-0 relative rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${pub.videoId}`}
              title={pub.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="w-full md:flex-1 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
            <p className="text-sm mb-2">
              <span className="font-medium">{pub.journal}</span> ({pub.year})
            </p>
            <p className="text-sm text-muted-foreground mb-2">DOI: {pub.doi}</p>
            <p className="text-sm">{pub.abstract}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 