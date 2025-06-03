'use client';

import { motion } from 'framer-motion';
import { publicationsData, type Publication } from '@/data/publications';
import { Users, BookOpen, FileText, ExternalLink, Youtube } from 'lucide-react';

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
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Users className="h-4 w-4" />
          <span>{publication.authors}</span>
        </div>
        <div className="flex items-center gap-2 text-sm mb-2">
          <BookOpen className="h-4 w-4" />
          <span className="font-medium">{publication.journal}</span>
          <span>({publication.year})</span>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {publication.doi && (
            <a
              href={publication.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>arXiv</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {publication.videoId && (
            <a
              href={`https://youtu.be/${publication.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Youtube className="h-4 w-4" />
              <span>YouTube</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
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