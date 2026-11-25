'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { publicationsData, type Publication } from '@/data/publications';

// "CoRL 2026" from "Conference on Robot Learning (CoRL)". The acronym must
// start with a letter so issue numbers like "31(4)" are skipped. Venues
// without an acronym use the part before the first comma if short
// (e.g. "IEEE Access"), otherwise just the year.
function label(p: Publication) {
  const acronym = p.venue.match(/\(([A-Za-z][^)]*)\)/)?.[1];
  const venue = acronym ?? p.venue.split(',')[0];
  return venue.length <= 24 ? `${venue} ${p.year}` : `${p.year}`;
}

// Newest year's international (non-domestic) publications.
const international = publicationsData.filter((p) => !p.domestic);
const latestYear = Math.max(...international.map((p) => p.year));
const latest = international.filter((p) => p.year === latestYear);

const list = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 0.9, staggerChildren: 0.1 } }
};

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LatestPublications() {
  if (latest.length === 0) return null;

  return (
    <motion.div variants={list} initial="hidden" animate="show" className="w-full max-w-2xl mx-auto text-left">
      <motion.p variants={row} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">
        Latest Publications
      </motion.p>
      <ul className="divide-y divide-border/60 rounded-xl border border-border/60 bg-background/70 backdrop-blur-sm">
        {latest.map((pub) => {
          const href = pub.links[0]?.url ?? '/publications';
          return (
            <motion.li key={pub.id} variants={row}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-2.5 hover:bg-green-500/5 transition-colors"
              >
                <span className="flex-shrink-0 w-24 sm:w-28 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold px-2.5 py-1 text-center">
                  {label(pub)}
                </span>
                <span className="flex-1 min-w-0 line-clamp-2 sm:line-clamp-1 text-sm sm:text-base text-foreground/90 group-hover:text-primary transition-colors">
                  {pub.title}
                </span>
                <ArrowUpRight size={16} className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.li>
          );
        })}
      </ul>
      <motion.div variants={row} className="mt-3 text-center">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          See all publications <ArrowRight size={14} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
