import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import SectionContainer from '@/components/common/SectionContainer';

export async function generateStaticParams() {
  return projectsData.map(project => ({ id: project.id.toString() }));
}

export default async function ProjectPage({ params }: any) {
  const project = projectsData.find(p => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24">
      <SectionContainer>
        <ProjectDetail project={project} />
      </SectionContainer>
    </div>
  );
} 