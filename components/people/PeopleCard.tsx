'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Lightbulb, Building, Trophy, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { peopleData, type Person } from '@/data/people';

interface PeopleCardProps {
  item: Person;
  index: number;
}

function PeopleCard({ item, index }: PeopleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/4 flex-shrink-0">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            
            {/* Homepage Link */}
            {item.homepage && (
              <div className="flex justify-center mt-3">
                <Link
                  href={item.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                  www.xrhumanlab.net
                </Link>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="md:w-3/4 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">{item.name}</h3>
              <p className="text-lg text-muted-foreground">{item.degree}</p>
            </div>

            <div className="space-y-4">
              {/* Education */}
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{item.education}</span>
              </div>

              {/* Research */}
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{item.research}</span>
              </div>

              {/* Work Experience */}
              {item.work && item.work.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-muted-foreground mb-2 flex items-center">
                    <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                    Work Experience
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.work.map((workItem, i) => (
                      <li key={i}>{workItem}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <h4 className="font-medium text-muted-foreground mb-2 flex items-center">
                    <Trophy className="w-4 h-4 mr-2 flex-shrink-0" />
                    Achievements
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PeopleCards() {
  return (
    <div className="space-y-8">
      {peopleData.map((item, index) => (
        <PeopleCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}