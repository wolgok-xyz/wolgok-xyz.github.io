'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, Users, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projectsData, type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-white p-8 rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
            <div className="flex items-center">
              <Building2 className="h-3 w-3 mr-1" />
              <span>{project.agency}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{project.period}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{project.organizations.join(', ')}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        {project.link && (
          <Link 
            href={project.link} 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View Project Details
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...projectsData]
        .sort((a, b) => b.id - a.id)
        .map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
    </div>
  );
}