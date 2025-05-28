'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

      <motion.div
        className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight whitespace-nowrap"
        >
          <span className="text-red-500">KIST</span> Embodied AGI Research Team
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground mb-6"
        >
          Center for Artificial Intelligence Research <span className="hidden md:inline">|</span><br className="md:hidden" /> KIST
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Pioneering the future of artificial general intelligence through embodied learning and human-robot interaction research.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* (Get in Touch button removed) */}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}