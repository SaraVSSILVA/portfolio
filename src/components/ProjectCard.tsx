import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
}

export const ProjectCard = ({
  imageSrc,
  title,
  description,
  technologies,
  projectUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-techsea-background rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Imagem do projeto */}
      <Image
        src={imageSrc}
        alt={`Imagem do projeto ${title}`}
        width={600}
        height={400}
        objectFit="cover"
      />

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="font-heading text-2xl text-techsea-secondary mb-2">
          {title}
        </h3>
        <p className="font-body text-techsea-secondary mb-4">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="mb-4">
          <p className="font-body font-semibold text-sm text-techsea-secondary">
            Tecnologias:
            <span className="font-normal ml-2">{technologies.join(', ')}</span>
          </p>
        </div>

        {/* Botões de link */}
        <div className="flex space-x-4">
          <Link href={projectUrl}>
            <a className="inline-block bg-techsea-primary text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-opacity-90 transition-colors">
              Ver Projeto
            </a>
          </Link>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block border border-techsea-primary text-techsea-primary font-bold py-2 px-4 rounded-full text-sm hover:bg-techsea-primary hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};