import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import NewsCards from '@/components/news/NewsCard';

export const metadata: Metadata = {
  title: 'News | KIST Embodied AGI Research Group',
  description: 'Latest news and updates from the KIST Embodied AGI Research Group.',
};

export default function NewsPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Recent News & Events"
          description="Stay up to date with the latest news, awards, and events from our research group."
        />
        <NewsCards />
      </SectionContainer>
    </div>
  );
} 