import Head from 'next/head';
import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { servicesData } from '@/data/services'; // Importação do arquivo de dados

export default function Services() {
  return (
    <>
      <Head>
        <title>Serviços | TechSea</title>
      </Head>

      <section className="bg-techsea-background py-16 md:py-24">
        <div className="container px-4 md:px-12">
          {/* Título Principal */}
          <h1 className="font-heading text-4xl md:text-5xl text-techsea-secondary text-center mb-12">
            Meus Serviços
          </h1>

          {/* Grid de Cards de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          {/* Chamada para Ação */}
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-techsea-secondary mb-4">
              Pronto para construir sua próxima solução?
            </h2>
            <Link href="/contato">
              <a className="inline-block bg-techsea-primary text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#008f92]">
                Solicite um Orçamento
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}