'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { newsData, type NewsItem } from '@/data/news';

interface NewsCardProps {
  newsItem: NewsItem;
  index: number;
}

function NewsCard({ newsItem, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group overflow-hidden rounded-lg border bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-white p-8 rounded-lg">
        <Image
          src={newsItem.imageUrl}
          alt={newsItem.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {newsItem.title}
          </h3>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{newsItem.date}</span>
            </div>
          </div>
          <p className="text-muted-foreground">{newsItem.description}</p>
        </div>
        {newsItem.link && (
          <Link
            href={newsItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read More
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function NewsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((newsItem, index) => (
        <NewsCard
          key={newsItem.id}
          newsItem={newsItem}
          index={index}
        />
      ))}
    </div>
  );
} 