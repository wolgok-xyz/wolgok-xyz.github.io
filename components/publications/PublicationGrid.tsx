'use client';

import { motion } from 'framer-motion';
import { publicationsData, type Publication } from '@/data/publications';

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

interface PublicationItemProps {
  publication: Publication;
  index: number;
}

function PublicationItem({ publication, index }: PublicationItemProps) {
  return (
    <motion.div
      key={publication.id}
      variants={item}
      className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
    >
      <div className="w-full h-40 md:w-[241px] md:h-[161px] flex-shrink-0 relative rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${publication.videoId}`}
          title={publication.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="w-full md:flex-1 mt-4 md:mt-0">
        <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{publication.authors}</p>
        <p className="text-sm mb-2">
          <span className="font-medium">{publication.journal}</span> ({publication.year})
        </p>
        <p className="text-sm text-muted-foreground mb-2">DOI: {publication.doi}</p>
        <p className="text-sm">{publication.abstract}</p>
      </div>
    </motion.div>
  );
}

export default function PublicationGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {publicationsData.map((publication, index) => (
        <PublicationItem
          key={publication.id}
          publication={publication}
          index={index}
        />
      ))}
    </motion.div>
  );
} 