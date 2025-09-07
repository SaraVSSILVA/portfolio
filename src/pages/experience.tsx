import Head from 'next/head';
import { experiences } from '@/data/experiences';

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Experiências | TechSea</title>
      </Head>

      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-12">
          {/* Título Principal */}
          <h1 className="font-heading text-4xl md:text-5xl text-techsea-secondary text-center mb-12">
            Minhas Experiências
          </h1>

          {/* Linha do Tempo */}
          <div className="relative">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-techsea-background h-full"></div>

            {/* Itens da Linha do Tempo */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex items-start mb-8 md:mb-16 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:text-right'}`}>
                {/* Marcador do ponto */}
                <div className={`w-8 h-8 rounded-full bg-techsea-primary z-10 flex-shrink-0 relative ${index % 2 === 0 ? 'ml-0 mr-4 md:mr-0 md:left-1/2 md:-ml-4' : 'mr-0 ml-4 md:ml-0 md:right-1/2 md:mr-4'}`}></div>

                {/* Conteúdo da experiência */}
                <div className={`bg-techsea-background p-6 rounded-lg shadow-md w-full md:w-[calc(50%-20px)] transition-transform transform hover:scale-[1.02] ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                  <h3 className="font-heading text-2xl text-techsea-secondary font-bold mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-body text-lg text-techsea-secondary font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="font-body text-sm text-gray-500 mb-4">
                    {exp.dates}
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-techsea-secondary">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}