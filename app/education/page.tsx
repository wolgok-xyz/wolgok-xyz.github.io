import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import EducationTimeline from '@/components/education/EducationTimeline';

export const metadata: Metadata = {
	title: 'Education | Jhon Doe',
	description: 'Explore Jhon Doe\'s academic journey, qualifications, and achievements in the field of chemistry.',
};

export default function EducationPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Education"
					description="My academic journey and qualifications in the field of chemistry."
				/>

				<EducationTimeline />
			</SectionContainer>
		</div>
	);
}