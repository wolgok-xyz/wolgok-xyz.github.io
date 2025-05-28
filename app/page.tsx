import { Suspense } from 'react';
import Hero from '@/components/home/Hero';
import AboutContent from '@/components/about/AboutContent';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      
      <Hero />
      
      <SectionContainer id="about" className="bg-background">
        <AboutContent />
      </SectionContainer>
      
      <SectionContainer className="bg-muted/30">
        <PageHeader
          title="Our Goals"
          description="Our mission is to advance embodied artificial general intelligence by integrating robotics, machine learning, and human-robot interaction. We aim to create intelligent agents that learn, adapt, and collaborate in the real world."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Robotics & Embodiment</h3>
            <p className="text-muted-foreground mb-6">
              We develop intelligent robots that perceive, act, and adapt in the real world, bridging the gap between AI and physical embodiment.
            </p>
            <Link 
              href="/projects" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              See projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Learning & Adaptation</h3>
            <p className="text-muted-foreground mb-6">
              Our research focuses on machine learning algorithms that enable agents to learn from experience, adapt to new tasks, and generalize knowledge.
            </p>
            <Link 
              href="/publications" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              See publications <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Collaboration & Interaction</h3>
            <p className="text-muted-foreground mb-6">
              We advance human-robot interaction and multi-agent collaboration, aiming for AGI systems that work alongside people and other agents.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Contact Team <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Want to know more about our lab? Explore our website to discover our latest research projects, meet our team members, and learn about our achievements in embodied artificial general intelligence and robotics.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}