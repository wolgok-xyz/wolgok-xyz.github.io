'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const peopleData = [
  {
    id: 1,
    degree: 'Principal Investigator',
    institution: 'KIST Embodied AGI Research Lab',
    location: 'Seoul, South Korea',
    period: '2020 - Present',
    description: 'Leading research in embodied AI and human-robot interaction. Specializing in multi-modal learning and physical interaction for AGI development.',
    achievements: [
      'Led multiple national research projects on embodied AI',
      'Published in top-tier AI and robotics journals',
      'Keynote speaker at international AI conferences'
    ],
    image: 'https://picsum.photos/400/600?random=1'
  },
  {
    id: 2,
    degree: 'Senior Research Scientist',
    institution: 'KIST Embodied AGI Research Lab',
    location: 'Seoul, South Korea',
    period: '2021 - Present',
    description: 'Expert in reinforcement learning and robotic control systems. Currently focusing on developing adaptive learning algorithms for embodied agents.',
    achievements: [
      'Developed novel reinforcement learning algorithms',
      'Multiple patents in robotic control systems',
      'Best paper award at ICRA 2022'
    ],
    image: 'https://picsum.photos/400/600?random=2'
  },
  {
    id: 3,
    degree: 'Research Scientist',
    institution: 'KIST Embodied AGI Research Lab',
    location: 'Seoul, South Korea',
    period: '2022 - Present',
    description: 'Specializing in computer vision and sensor fusion for robotic perception. Working on integrating visual and tactile feedback for improved robot learning.',
    achievements: [
      'Innovative work in multi-modal sensor fusion',
      'Published in top computer vision conferences',
      'Developed novel perception algorithms'
    ],
    image: 'https://picsum.photos/400/600?random=3'
  },
  {
    id: 4,
    degree: 'Research Scientist',
    institution: 'KIST Embodied AGI Research Lab',
    location: 'Seoul, South Korea',
    period: '2022 - Present',
    description: 'Focusing on natural language processing and human-robot communication. Developing methods for robots to understand and respond to human instructions.',
    achievements: [
      'Advanced work in human-robot dialogue systems',
      'Published in ACL and EMNLP',
      'Developed novel NLP architectures'
    ],
    image: 'https://picsum.photos/400/600?random=4'
  },
  {
    id: 5,
    degree: 'Postdoctoral Researcher',
    institution: 'KIST Embodied AGI Research Lab',
    location: 'Seoul, South Korea',
    period: '2023 - Present',
    description: 'Working on cognitive architectures for embodied AI systems. Research interests include memory systems and decision-making in physical environments.',
    achievements: [
      'Novel contributions to cognitive architectures',
      'Published in top AI journals',
      'Developing new memory systems for robots'
    ],
    image: 'https://picsum.photos/400/600?random=5'
  }
];

export default function PeopleCard() {
  return (
    <div className="max-w-5xl mx-auto">
      {peopleData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-12 last:mb-0"
        >
          <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-[23%] relative">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={item.image}
                    alt={item.degree}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 23vw"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-[77%] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{item.institution}, {item.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                        Achievements
                      </h4>
                      <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}