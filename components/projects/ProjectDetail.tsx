import { Project } from '@/data/projects/types';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  if (!project.details) return null;

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8 mt-4">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.description}</p>
      </div>

      {/* Project Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">과제기간</h3>
          <p className="text-gray-600">{project.details.period}</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">참여기관</h3>
          <ul className="text-gray-600">
            {project.details.organizations.map((org, index) => (
              <li key={index}>{org}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">과제금액</h3>
          <p className="text-gray-600">{project.details.budget}</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">주관기관</h3>
          <p className="text-gray-600">{project.institute}</p>
        </Card>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {project.details.content.map((content, index) => (
          <Card key={index} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
            {content.imageUrl && (
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={content.imageUrl}
                  alt={content.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <p className="text-gray-600 whitespace-pre-line">{content.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
} 