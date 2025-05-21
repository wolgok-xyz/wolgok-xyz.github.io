'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const educationData = [
  {
    id: 1,
    degree: 'M.Sc. in Chemistry',
    institution: 'University of Calcutta',
    location: 'Kolkata, West Bengal',
    period: '2022-2024',
    description: 'Specializing in Organic Chemistry with focus on sustainable synthesis methods. Conducted research on eco-friendly catalysts for organic transformations.',
    achievements: [
      'University Gold Medalist',
      'Published research paper in Journal of Organic Chemistry',
      'Presented at National Chemistry Conference 2023'
    ]
  },
  {
    id: 2,
    degree: 'B.Sc. in Chemistry (Honours)',
    institution: 'Jadavpur University',
    location: 'Kolkata, West Bengal',
    period: '2019-2022',
    description: 'Comprehensive foundation in chemical principles with laboratory experience in analytical, organic, inorganic, and physical chemistry.',
    achievements: [
      'Graduated with First Class Honours',
      'Department Merit Scholarship recipient',
      'Undergraduate research project on green chemistry'
    ]
  },
  {
    id: 3,
    degree: 'Higher Secondary Education',
    institution: 'West Bengal Council of Higher Secondary Education',
    location: 'West Bengal',
    period: '2017-2019',
    description: 'Focused on Science stream with specialization in Chemistry, Physics, and Mathematics.',
    achievements: [
      'Scored 95% in Chemistry',
      'State-level Science Olympiad finalist',
      'Best Science Student Award'
    ]
  }
];

export default function EducationTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {educationData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 last:mb-0"
        >
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                
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
        </motion.div>
      ))}
    </div>
  );
}