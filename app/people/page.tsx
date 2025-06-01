import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import PeopleCard from '@/components/people/PeopleCard';

export const metadata: Metadata = {
	title: 'People | KIST Embodied AGI Research Group',
	description: 'Meet our team of researchers and scientists at KIST Embodied AGI Research Group.',
};

export default function PeoplePage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="People"
					description="Meet the brilliant minds shaping the future of embodied artificial intelligence."
				/>
				<PeopleCard />
			</SectionContainer>
		</div>
	);
}