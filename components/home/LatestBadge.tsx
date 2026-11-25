'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { publicationsData, type Publication } from '@/data/publications';

const ROTATE_MS = 4000;

// "CoRL 2026" from "Conference on Robot Learning (CoRL)". Venues without an
// acronym use the part before the first comma if short (e.g. "IEEE Access"),
// otherwise just the year so the title stays visible.
function label(p: Publication) {
  // Acronym must start with a letter, so issue numbers like "31(4)" are skipped.
  const acronym = p.venue.match(/\(([A-Za-z][^)]*)\)/)?.[1];
  const venue = acronym ?? p.venue.split(',')[0];
  return venue.length <= 24 ? `${venue} ${p.year}` : `${p.year}`;
}

const latestYear = Math.max(...publicationsData.map((p) => p.year));
const latest = publicationsData.filter((p) => p.year === latestYear);

export default function LatestBadge() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || latest.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % latest.length), ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  if (latest.length === 0) return null;
  const pub = latest[index];

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
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="group inline-flex max-w-full items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 dark:bg-green-500/20 hover:bg-green-500/20 dark:hover:bg-green-500/30 px-4 py-2 rounded-full font-medium transition-colors"
      >
        <Sparkles size={18} className="flex-shrink-0" />
        <span className="flex-shrink-0">New</span>
        <span className="flex-shrink-0 opacity-50">·</span>
        <span className="relative block h-6 w-[11rem] sm:w-[28rem] overflow-hidden text-left" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={pub.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 truncate"
            >
              {label(pub)}: {pub.title}
            </motion.span>
          </AnimatePresence>
        </span>
        <ArrowRight size={16} className="flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
