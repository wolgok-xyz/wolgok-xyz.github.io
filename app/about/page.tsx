import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
  title: 'About | Jhon Doe',
  description: 'Learn about Jhon Doe, an M.Sc. Chemistry student from West Bengal, India, her background, research interests, and professional goals.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="About Me"
          description="Learn about my journey, interests, and aspirations in the field of chemistry."
        />

        <AboutContent />
      </SectionContainer>
    </div>
  );
}