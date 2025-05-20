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
		<div className="relative">
			{/* Timeline axis */}
			<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2" />

			{educationData.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: index * 0.2 }}
					viewport={{ once: true, margin: "-100px" }}
					className={cn(
						"relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0",
						index % 2 === 0 ? "md:text-left" : "md:text-right"
					)}
				>
					{/* Timeline marker */}
					<div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
						<div className="absolute inset-1 rounded-full bg-background" />
					</div>

					{/* Timeline content */}
					<div className={cn(
						"md:col-span-1 bg-card rounded-lg p-6 shadow-md relative",
						index % 2 === 0
							? "md:mr-8"
							: "md:ml-8 md:order-first"
					)}>
						<div className="absolute left-0 top-4 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 z-10 md:hidden">
							<div className="absolute inset-1 rounded-full bg-background" />
						</div>

						<div className="flex items-start mb-4">
							<GraduationCap className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
							<h3 className="text-xl font-bold">{item.degree}</h3>
						</div>

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

					<div className="hidden md:block" />
				</motion.div>
			))}
		</div>
	);
}