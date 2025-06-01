import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import ProjectCards from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
	title: 'About | KIST Embodied AGI',
	description: 'Discover our pioneering research in embodied artificial general intelligence and human-robot interaction at KIST.',
};

export default function ProjectsPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Research Projects"
					description="Explore my laboratory work and research projects in the field of chemistry."
				/>

				<ProjectCards />
			</SectionContainer>
		</div>
	);
}