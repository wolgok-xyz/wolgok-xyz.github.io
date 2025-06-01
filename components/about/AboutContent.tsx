'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Globe, Bot, Users } from 'lucide-react';

export default function AboutContent() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="relative rounded-lg overflow-hidden shadow-xl">
					<Image
						src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
						alt="AI Robot"
						width={600}
						height={800}
						className="object-cover w-full h-[500px]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
					<div className="absolute bottom-0 left-0 p-6">
						<h3 className="text-xl font-semibold mb-2">Toward AGI Robot</h3>
						<p className="text-muted-foreground">Embodied AGI Research Group</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="space-y-6"
			>
				<p className="text-muted-foreground">
					Welcome to the Embodied AGI Research Group at KIST! We are a dedicated group of researchers and engineers working at the intersection of artificial intelligence, robotics, and cognitive science. Our mission is to advance the field of embodied artificial general intelligence through innovative research and practical applications.
				</p>

				<p className="text-muted-foreground">
					Our team focuses on developing AI systems that can learn and interact with the physical world through embodied experiences. We combine cutting-edge machine learning techniques with robotics to create intelligent agents that can understand, learn from, and adapt to their environment in real-time.
				</p>

				<div className="grid grid-cols-2 gap-4 my-8">
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Eye className="h-10 w-10 text-chart-1 mb-2" />
						<h3 className="font-medium">Vision-Language-Action Model</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Globe className="h-10 w-10 text-chart-2 mb-2" />
						<h3 className="font-medium">World Foundation Model</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Bot className="h-10 w-10 text-chart-3 mb-2" />
						<h3 className="font-medium text-center">
							Autonomous<br />
							Navigation & Manipulation
						</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Users className="h-10 w-10 text-chart-4 mb-2" />
						<h3 className="font-medium">Human-Robot Interaction</h3>
					</div>
				</div>

				<p className="text-muted-foreground">
					We are committed to pushing the boundaries of what's possible in AI research, with a particular focus on human-robot interaction, autonomous learning, and the development of more natural and intuitive ways for machines to understand and interact with the world around them.
				</p>
			</motion.div>
		</div>
	);
}