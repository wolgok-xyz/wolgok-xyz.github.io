import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import CertificateGrid from '@/components/certificates/CertificateGrid';

export const metadata: Metadata = {
	title: 'Certificates | Jhon Doe',
	description: 'View academic and professional certificates earned by Jhon Doe in the field of chemistry.',
};

export default function CertificatesPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Certificates"
					description="Academic and professional certifications showcasing my expertise and continuous learning in chemistry."
				/>

				<CertificateGrid />
			</SectionContainer>
		</div>
	);
}