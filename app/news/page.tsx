import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import NewsCard from '@/components/news/NewsCard';
import { news } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'News | KIST Embodied AGI Research Group',
  description: 'Latest news and updates from the KIST Embodied AGI Research Group.',
};

export default function NewsPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="Lab News & Events"
          description="Stay up to date with the latest news, awards, and events from our research group."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              date={item.date}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
} 