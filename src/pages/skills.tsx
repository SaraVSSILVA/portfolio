import Head from 'next/head';
import { SkillCard } from '@/components/SkillCard';

// Dados de exemplo para suas habilidades
const skillsData = {
  frontend: [
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS3', icon: '/icons/css3.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Express.js', icon: '/icons/express.svg' },
    { name: 'APIs RESTful', icon: '/icons/api.svg' }, // Exemplo de ícone genérico
  ],
  database: [
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
  ],
  toolsAndMethodologies: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' },
    { name: 'Agile/Scrum', icon: '/icons/agile.svg' },
    { name: 'CI/CD', icon: '/icons/cicd.svg' }, // Exemplo de ícone genérico
  ],
};

export default function Habilidades() {
  return (
    <>
      <Head>
        <title>Habilidades | TechSea</title>
      </Head>

      <section className="bg-techsea-background py-16 md:py-24">
        <div className="container px-4 md:px-12">
          {/* Título Principal */}
          <h1 className="font-heading text-4xl md:text-5xl text-techsea-secondary text-center mb-12">
            Minhas Habilidades
          </h1>

          {/* Seção Frontend */}
          <h2 className="font-heading text-3xl text-techsea-primary mb-6 mt-10 border-b-2 border-techsea-primary pb-2">Frontend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {skillsData.frontend.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>

          {/* Seção Backend */}
          <h2 className="font-heading text-3xl text-techsea-primary mb-6 mt-10 border-b-2 border-techsea-primary pb-2">Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {skillsData.backend.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>

          {/* Seção Banco de Dados */}
          <h2 className="font-heading text-3xl text-techsea-primary mb-6 mt-10 border-b-2 border-techsea-primary pb-2">Banco de Dados</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {skillsData.database.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>

          {/* Seção Ferramentas e Metodologias */}
          <h2 className="font-heading text-3xl text-techsea-primary mb-6 mt-10 border-b-2 border-techsea-primary pb-2">Ferramentas & Metodologias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {skillsData.toolsAndMethodologies.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}