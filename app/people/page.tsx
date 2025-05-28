import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import PeopleTimeline from '@/components/people/PeopleTimeline';

export const metadata: Metadata = {
	title: 'People | KIST Embodied AGI Research Team',
	description: 'Meet our team of researchers and scientists at KIST Embodied AGI Research Lab.',
};

export default function PeoplePage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Our Team"
					description="Meet the researchers and scientists behind our embodied AGI research."
				/>
				<PeopleTimeline />
			</SectionContainer>
		</div>
	);
}