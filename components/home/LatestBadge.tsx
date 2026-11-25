'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { publicationsData } from '@/data/publications';

// Short venue label: the acronym in parentheses if present (e.g. "CoRL"),
// otherwise the venue up to the first comma (e.g. "IEEE Access").
function shortVenue(venue: string) {
  const acronym = venue.match(/\(([^)]+)\)/);
  return acronym ? acronym[1] : venue.split(',')[0];
}

export default function LatestBadge() {
  const latestYear = Math.max(...publicationsData.map((p) => p.year));
  const latest = publicationsData.find((p) => p.year === latestYear);
  if (!latest) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      className="mb-4"
    >
      <Link
        href="/publications"
        className="group inline-flex max-w-full items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 dark:bg-green-500/20 hover:bg-green-500/20 dark:hover:bg-green-500/30 px-4 py-2 rounded-full font-medium transition-colors"
      >
        <Sparkles size={18} className="flex-shrink-0" />
        <span className="flex-shrink-0">New</span>
        <span className="flex-shrink-0 opacity-50">·</span>
        <span className="truncate max-w-[11rem] sm:max-w-md">
          {shortVenue(latest.venue)} {latest.year}: {latest.title}
        </span>
        <ArrowRight size={16} className="flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
