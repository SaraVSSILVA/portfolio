import Head from 'next/head';
import { ProjectCard } from '@/components/ProjectCard';
import { academicProjects } from '@/data/projects'; // Importação do arquivo de dados

export default function ProjetosAcademicos() {
  return (
    <>
      <Head>
        <title>Projetos Acadêmicos | TechSea</title>
      </Head>

      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-12">
          {/* Título Principal */}
          <h1 className="font-heading text-4xl md:text-5xl text-techsea-secondary text-center mb-12">
            Projetos Acadêmicos & Pessoais
          </h1>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageSrc={project.imageSrc}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}