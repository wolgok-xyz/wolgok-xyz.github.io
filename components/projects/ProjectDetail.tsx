'use client';

import { Project } from '@/data/projects/types';
import Image from 'next/image';
import { Calendar, Users, Building2, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  if (!project.details) return null;

  return (
    <div>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-8 mt-4 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 mx-[15%]">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.description}</p>
      </motion.div>

      {/* Project Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            icon: <Calendar className="w-6 h-6 text-primary" />,
            label: 'Project Period',
            value: project.period,
          },
          {
            icon: <Users className="w-6 h-6 text-primary" />,
            label: 'Participating Organizations',
            value: project.organizations.join(', '),
          },
          {
            icon: <Wallet className="w-6 h-6 text-primary" />,
            label: 'Project Budget',
            value: project.details.budget,
          },
          {
            icon: <Building2 className="w-6 h-6 text-primary" />,
            label: 'Managing Agency',
            value: project.agency,
          },
        ].map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {item.icon}
            <div className="min-w-0">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-medium truncate">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {project.details.content.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
            {content.imageUrl && (
              <div className="w-[70%] mx-auto mb-4">
                <Image
                  src={content.imageUrl}
                  alt={content.title}
                  width={0}
                  height={0}
                  sizes="70vw"
                  className="w-full h-auto rounded-lg"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}
            <p className="text-gray-600 whitespace-pre-line">{content.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 