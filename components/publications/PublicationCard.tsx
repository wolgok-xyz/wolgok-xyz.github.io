'use client';

import { motion } from 'framer-motion';
import { publicationsData, type Publication } from '@/data/publications';
import { Users, BookOpen, FileText, ExternalLink, Youtube } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {publication.videoId && (
        <div className="w-full h-40 md:w-[241px] md:h-[161px] flex-shrink-0 relative rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${publication.videoId}`}
            title={publication.title}
            className="w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="w-full md:flex-1">
        <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
        <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
          <Users className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{publication.authors}</span>
        </div>
        <div className="flex items-start gap-2 text-sm mb-2">
          <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>
            <span className="font-medium">{publication.venue}</span> ({publication.year})
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {publication.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>{link.label}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
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
        {publication.abstract && <p className="text-sm mt-2">{publication.abstract}</p>}
      </div>
    </motion.div>
  );
}

export default function PublicationGrid() {
  const years = Array.from(new Set(publicationsData.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <div className="space-y-12">
      {years.map((year) => (
        <section key={year}>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">{year}</h2>
          <div className="space-y-4">
            {publicationsData
              .filter((p) => p.year === year)
              .map((publication) => (
                <PublicationItem key={publication.id} publication={publication} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
