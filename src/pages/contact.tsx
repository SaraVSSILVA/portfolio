import Head from 'next/head';
import Link from 'next/link';
import { SectionsTitle } from '@/components/SectionsTitle';
import { ContactForm } from '@/components/ContactForm';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato | TechSea</title>
      </Head>

      <section className="bg-techsea-background py-16 md:py-24">
        <div className="container px-4 md:px-12">
          <SectionsTitle title="Fale Comigo" />

          <div className="flex flex-col md:flex-row gap-12">
            {/* Formulário de Contato */}
            <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-heading text-3xl text-techsea-secondary mb-6">
                Envie uma mensagem
              </h2>
              <ContactForm />
            </div>

            {/* Informações de Contato e Links */}
            <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <h2 className="font-heading text-3xl text-techsea-secondary mb-6">
                Entre em contato
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-body text-lg text-techsea-secondary">
                  E-mail: <br />
                  <a href="mailto:saravitoriads@outlook.com" className="text-techsea-primary font-semibold hover:underline">
                    saravitoriads@outlook.com
                  </a>
                </p>
                <p className="font-body text-lg text-techsea-secondary">
                  Telefone: <br />
                  <a href="tel:[SEU_TELEFONE]" className="text-techsea-primary font-semibold hover:underline">
                    [SEU TELEFONE]
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-body font-semibold text-techsea-secondary">
                  Me encontre nas redes
                </h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://linkedin.com/in/saraslva" target="_blank" rel="noopener noreferrer" className="text-techsea-primary hover:text-[#008f92] transition-colors">
                    <span className="font-body font-semibold">LinkedIn</span>
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="https://github.com/saraslva" target="_blank" rel="noopener noreferrer" className="text-techsea-primary hover:text-[#008f92] transition-colors">
                    <span className="font-body font-semibold">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};