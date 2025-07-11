import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import PublicationGrid from '@/components/publications/PublicationCard';

export const metadata: Metadata = {
  title: 'Publications | KIST Embodied AGI Research Group',
  description: 'Explore our research publications in embodied artificial general intelligence and human-robot interaction.',
};

export default function PublicationsPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Recent Publications"
          description="Our research publications in embodied artificial general intelligence and human-robot interaction."
        />

        <PublicationGrid />
      </SectionContainer>
    </div>
  );
} 