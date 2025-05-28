import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
  title: 'About | KIST Embodied AGI',
  description: 'Discover our pioneering research in embodied artificial general intelligence and human-robot interaction at KIST.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="About Team"
          description="Discover our pioneering research in embodied artificial general intelligence and human-robot interaction at KIST."
        />

        <AboutContent />
      </SectionContainer>
    </div>
  );
}