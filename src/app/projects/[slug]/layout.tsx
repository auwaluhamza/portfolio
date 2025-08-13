import { generateStaticParams } from './data';
import { Metadata } from 'next';
import { projectData } from './data';

export { generateStaticParams };

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectData[params.slug as keyof typeof projectData];
  
  if (!project) {
    return {
      title: 'Project Not Found - Auwalu Hamza',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} - Auwalu Hamza Portfolio`,
    description: project.description,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 